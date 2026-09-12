import { site } from "@/content/site";

export interface Utm {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  /** Google Ads (gclid / gbraid / wbraid). */
  gclid: string;
  /** Meta / Facebook / Instagram. */
  fbclid: string;
  /** Microsoft / Bing Ads. */
  msclkid: string;
  /** TikTok. */
  ttclid: string;
}

/** Read UTM / click-id attribution params from a query string. */
export function readUtm(search: string): Utm {
  const p = new URLSearchParams(search);
  const get = (key: string) => p.get(key) || "";
  return {
    source: get("utm_source"),
    medium: get("utm_medium"),
    campaign: get("utm_campaign"),
    content: get("utm_content"),
    term: get("utm_term"),
    // Google Ads auto-etiqueta con gclid (y gbraid/wbraid en iOS).
    gclid: get("gclid") || get("gbraid") || get("wbraid"),
    fbclid: get("fbclid"),
    msclkid: get("msclkid"),
    ttclid: get("ttclid"),
  };
}

/**
 * Resuelve la etiqueta de origen de la visita. Prioridad:
 *  1. Campaña con nombre (utm_campaign) → carga la campaña (+ fuente/contenido).
 *  2. UTM sin nombre de campaña → muestra la fuente/medio/contenido.
 *  3. Clic de plataforma sin UTMs (gclid/fbclid/msclkid/ttclid) → la plataforma.
 *  4. Sin ninguna atribución → `web-<segmento>` (tráfico sin campaña).
 */
export function originLabel(utm: Utm, segment: string): string {
  if (utm.campaign) {
    return [utm.campaign, utm.source, utm.content].filter(Boolean).join(" | ");
  }
  if (utm.source || utm.medium || utm.content) {
    return [utm.source, utm.medium, utm.content].filter(Boolean).join(" | ");
  }
  if (utm.gclid) return "google-ads";
  if (utm.fbclid) return "facebook";
  if (utm.msclkid) return "bing-ads";
  if (utm.ttclid) return "tiktok";
  return `web-${segment}`;
}

/** Tag "(Origen: …)" que se agrega al final de cada mensaje de WhatsApp. */
export function originTag(utm: Utm, segment: string): string {
  return `\n\n(Origen: ${originLabel(utm, segment)})`;
}

/** Build a wa.me deep link with the message + attribution tag URL-encoded. */
export function whatsappUrl(message: string, utm: Utm, segment: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    message + originTag(utm, segment),
  )}`;
}

/* -------------------------------------------------------------------------- */
/* Persistencia de atribución (por visita)                                    */
/*                                                                            */
/* La atribución se guarda en sessionStorage para que SIGA al usuario al      */
/* cambiar de página, y se borra cuando completa el objetivo (contacta por    */
/* WhatsApp / envía el formulario). sessionStorage se limpia solo al cerrar   */
/* la pestaña, así que cada visita arranca limpia.                            */
/* -------------------------------------------------------------------------- */

const STORAGE_KEY = "vmax_attribution";

/** ¿El objeto trae alguna señal de atribución (UTM o click-id)? */
export function hasAttribution(utm: Utm): boolean {
  return Boolean(
    utm.campaign ||
      utm.source ||
      utm.medium ||
      utm.content ||
      utm.term ||
      utm.gclid ||
      utm.fbclid ||
      utm.msclkid ||
      utm.ttclid,
  );
}

/** Guarda la atribución de la visita. */
export function persistUtm(utm: Utm): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
  } catch {
    /* storage no disponible (modo privado, etc.) */
  }
}

/** Recupera la atribución guardada previamente en la visita. */
export function loadUtm(): Utm | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Utm) : null;
  } catch {
    return null;
  }
}

/** Borra la atribución: el objetivo (contacto) ya se cumplió. */
export function clearUtm(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* noop */
  }
}

/* -------------------------------------------------------------------------- */
/* Página de entrada y referrer de la visita                                  */
/*                                                                            */
/* Se guardan una sola vez (en la primera página de la sesión) para saber por */
/* qué página aterrizó el visitante y desde dónde venía, aunque luego navegue */
/* a otra página y recién ahí envíe el formulario.                            */
/* -------------------------------------------------------------------------- */

const VISIT_KEY = "vmax_visit";

export interface Visit {
  /** URL completa de la primera página de la sesión. */
  landing: string;
  /** document.referrer en esa primera página (vacío si llegó directo). */
  referrer: string;
}

/** Registra la página de entrada si aún no hay una guardada en la sesión. */
export function persistVisit(): Visit {
  const current: Visit = {
    landing: typeof window === "undefined" ? "" : window.location.href,
    referrer: typeof document === "undefined" ? "" : document.referrer,
  };
  if (typeof window === "undefined") return current;
  try {
    const raw = window.sessionStorage.getItem(VISIT_KEY);
    if (raw) return JSON.parse(raw) as Visit;
    window.sessionStorage.setItem(VISIT_KEY, JSON.stringify(current));
  } catch {
    /* storage no disponible */
  }
  return current;
}

/* -------------------------------------------------------------------------- */
/* Clasificación del canal (para correos / reportes)                          */
/* -------------------------------------------------------------------------- */

const PAID_MEDIUMS = [
  "cpc", "ppc", "paid", "paidsearch", "paid_search", "paid-search",
  "paidsocial", "paid_social", "paid-social", "display", "cpm", "cpv", "cpa",
  "retargeting", "remarketing", "ads",
];
const SEARCH_HOSTS = ["google.", "bing.", "yahoo.", "duckduckgo.", "ecosia.", "yandex."];
const SOCIAL_HOSTS: [string, string][] = [
  ["facebook.", "Facebook"],
  ["fb.", "Facebook"],
  ["instagram.", "Instagram"],
  ["tiktok.", "TikTok"],
  ["linkedin.", "LinkedIn"],
  ["youtube.", "YouTube"],
  ["twitter.", "X (Twitter)"],
  ["x.com", "X (Twitter)"],
  ["t.co", "X (Twitter)"],
  ["whatsapp.", "WhatsApp"],
];

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/**
 * Describe de dónde vino la visita en lenguaje claro, p. ej.
 * "Pagado · Google Ads", "Orgánico · Google", "Social · Facebook",
 * "Campaña · email", "Referido · idealista.pe" o "Directo".
 * Es una función pura: sirve tanto en el cliente como en el servidor.
 */
export function channelLabel(utm: Utm, referrer = ""): string {
  const medium = utm.medium.toLowerCase();
  const source = utm.source || "";

  if (utm.gclid) return "Pagado · Google Ads";
  if (utm.msclkid) return "Pagado · Microsoft/Bing Ads";
  if (utm.ttclid) return "Pagado · TikTok Ads";
  if (PAID_MEDIUMS.includes(medium)) return `Pagado · ${source || medium}`;
  if (medium === "organic") return `Orgánico · ${source || "buscador"}`;
  if (medium === "social" || medium === "social-media") return `Social · ${source || "redes"}`;
  if (utm.fbclid) return "Social · Facebook/Instagram";
  if (utm.campaign || source || medium) {
    return `Campaña · ${[source, medium].filter(Boolean).join(" / ")}`;
  }

  const host = hostOf(referrer);
  if (!host || host.endsWith(hostOf(site.url) || "vanguardiamax.com")) return "Directo";
  if (SEARCH_HOSTS.some((h) => host.startsWith(h) || host.includes("." + h))) {
    return `Orgánico · ${host.split(".")[0]}`;
  }
  const social = SOCIAL_HOSTS.find(([h]) => host.startsWith(h) || host.includes("." + h));
  if (social) return `Social · ${social[1]}`;
  return `Referido · ${host}`;
}

/** Push a GTM dataLayer event (no-op safe when GTM is absent). */
export function pushDataLayer(event: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(event);
}
