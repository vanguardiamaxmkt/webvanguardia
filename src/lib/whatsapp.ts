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

/** Push a GTM dataLayer event (no-op safe when GTM is absent). */
export function pushDataLayer(event: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(event);
}
