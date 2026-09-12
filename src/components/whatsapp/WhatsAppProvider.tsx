"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  readUtm,
  whatsappUrl,
  hasAttribution,
  persistUtm,
  loadUtm,
  clearUtm,
  originLabel,
  pushDataLayer,
  persistVisit,
  type Utm,
  type Visit,
} from "@/lib/whatsapp";

interface WhatsAppContextValue {
  /** Page-level WhatsApp config. */
  baseMessage: string;
  segment: string;
  /** Atribución vigente de la visita (UTM / click-ids). */
  utm: Utm;
  /** Etiqueta de origen resuelta (la misma que va en el tag de WhatsApp). */
  origin: string;
  /** Página de entrada y referrer de la sesión. */
  visit: Visit;
  /** Build a deep link for an arbitrary message, enriched with attribution. */
  buildUrl: (message?: string) => string;
  /**
   * Registra el contacto: empuja el evento `whatsapp_click` (con segmento y
   * atribución UTM) al dataLayer y consume la atribución de la visita.
   * `extra` permite añadir campos al evento (p. ej. `form_submit: true`).
   */
  contact: (extra?: Record<string, unknown>) => void;
  /**
   * Envía el lead del formulario a la hoja de cálculo (Google Sheets) en
   * segundo plano, con la atribución vigente. NO se espera (fire-and-forget),
   * así que no retrasa la apertura de WhatsApp.
   */
  submitLead: (lead: {
    campos: { label: string; valor: string }[];
    nombre?: string;
    telefono?: string;
  }) => void;
}

const EMPTY_UTM: Utm = {
  source: "",
  medium: "",
  campaign: "",
  content: "",
  term: "",
  gclid: "",
  fbclid: "",
  msclkid: "",
  ttclid: "",
};

const WhatsAppContext = createContext<WhatsAppContextValue | null>(null);

/**
 * Provides UTM-aware WhatsApp link building to client components below it.
 * UTMs are read from the URL after mount; before that, links resolve to the
 * base message without an attribution tag (still fully functional).
 */
export function WhatsAppProvider({
  baseMessage,
  segment,
  children,
}: {
  baseMessage: string;
  segment: string;
  children: React.ReactNode;
}) {
  const [utm, setUtm] = useState<Utm>(EMPTY_UTM);
  const [visit, setVisit] = useState<Visit>({ landing: "", referrer: "" });

  // Al montar cada página: si la URL trae atribución, la guardamos (gana la más
  // reciente); si no, recuperamos la guardada para que SIGA entre páginas.
  // La página de entrada y el referrer se fijan una sola vez por sesión.
  useEffect(() => {
    setVisit(persistVisit());
    const fromUrl = readUtm(window.location.search);
    if (hasAttribution(fromUrl)) {
      persistUtm(fromUrl);
      setUtm(fromUrl);
    } else {
      const stored = loadUtm();
      if (stored) setUtm(stored);
    }
  }, []);

  // Objetivo cumplido (contactó por WhatsApp): registramos el evento con la
  // atribución vigente y luego la consumimos.
  const contact = useCallback(
    (extra?: Record<string, unknown>) => {
      pushDataLayer({
        event: "whatsapp_click",
        segmento: segment,
        origen: originLabel(utm, segment),
        utm_campaign: utm.campaign,
        utm_source: utm.source,
        utm_medium: utm.medium,
        utm_content: utm.content,
        ...extra,
      });
      clearUtm();
      setUtm(EMPTY_UTM);
    },
    [segment, utm],
  );

  // Registro del lead en la hoja de cálculo (segundo plano, sin await).
  const submitLead = useCallback<WhatsAppContextValue["submitLead"]>(
    (lead) => {
      const payload = {
        segmento: segment,
        origen: originLabel(utm, segment),
        url: typeof window !== "undefined" ? window.location.href : "",
        utm_campaign: utm.campaign,
        utm_source: utm.source,
        utm_medium: utm.medium,
        utm_content: utm.content,
        nombre: lead.nombre ?? "",
        telefono: lead.telefono ?? "",
        campos: lead.campos,
      };
      try {
        fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      } catch {
        /* nunca debe afectar al usuario */
      }
    },
    [segment, utm],
  );

  const value = useMemo<WhatsAppContextValue>(
    () => ({
      baseMessage,
      segment,
      utm,
      origin: originLabel(utm, segment),
      visit,
      buildUrl: (message?: string) =>
        whatsappUrl(message ?? baseMessage, utm, segment),
      contact,
      submitLead,
    }),
    [baseMessage, segment, utm, visit, contact, submitLead],
  );

  return <WhatsAppContext.Provider value={value}>{children}</WhatsAppContext.Provider>;
}

export function useWhatsApp(): WhatsAppContextValue {
  const ctx = useContext(WhatsAppContext);
  if (!ctx) {
    throw new Error("useWhatsApp must be used within a WhatsAppProvider");
  }
  return ctx;
}
