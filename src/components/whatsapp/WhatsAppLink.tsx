"use client";

import { useWhatsApp } from "./WhatsAppProvider";

/**
 * A WhatsApp CTA link. Resolves its href client-side with UTM attribution and
 * fires a `whatsapp_click` dataLayer event.
 */
export function WhatsAppLink({
  message,
  className,
  children,
  ariaLabel,
  location,
}: {
  /** Custom prefilled message; defaults to the page base message. */
  message?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  /** Ubicación del botón (header, hero, cta-final, flotante) para el registro. */
  location?: string;
}) {
  const { buildUrl, contact, submitLead } = useWhatsApp();

  return (
    <a
      className={className}
      href={buildUrl(message)}
      target="_blank"
      rel="noopener"
      aria-label={ariaLabel}
      onClick={() => {
        // El href ya se computó con la atribución (este clic la lleva).
        // Registramos el contacto del botón en la hoja (segundo plano)…
        submitLead({
          campos: [
            { label: "Contacto", valor: "Botón WhatsApp" },
            { label: "Ubicación", valor: location ?? "—" },
          ],
        });
        // …y luego el evento GTM + consumo de la atribución.
        contact();
      }}
    >
      {children}
    </a>
  );
}
