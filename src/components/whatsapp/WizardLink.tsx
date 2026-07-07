"use client";

import { useCallback } from "react";

/**
 * Enlace interno hacia el wizard/CTA de la página (por defecto `#cotizar`).
 *
 * Reemplaza a los botones que antes abrían WhatsApp directo (hero y flotante):
 * al ser un ancla DENTRO de la página, los bots que rastrean o pre-cargan
 * enlaces `wa.me`/`api.whatsapp.com` ya no disparan aperturas de chat ni
 * registros de lead. El humano real hace scroll suave al formulario y enfocamos
 * el primer campo; la conversión a WhatsApp ocurre recién al enviar el wizard.
 */
export function WizardLink({
  target = "cotizar",
  className,
  children,
  ariaLabel,
}: {
  /** id del elemento destino dentro de la página. */
  target?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const el = document.getElementById(target);
      if (!el) return; // sin destino en esta página: deja el salto por defecto
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // Elemento a resaltar: la tarjeta del formulario si existe; si no
      // (páginas de servicio), el botón del CTA final.
      const highlight =
        el.querySelector<HTMLElement>(".form-card") ??
        el.querySelector<HTMLElement>(".btn-wa") ??
        el;
      // Primer campo real del formulario (ignora honeypot y ocultos).
      const field = el.querySelector<HTMLElement>(
        "input:not([type=hidden]):not([tabindex='-1']), select, textarea",
      );

      // Tras el scroll suave: pulso de atención + enfoque del primer campo.
      window.setTimeout(() => {
        highlight.classList.remove("wizard-attn");
        void highlight.offsetWidth; // reinicia la animación en cada clic
        highlight.classList.add("wizard-attn");
        field?.focus({ preventScroll: true });
      }, 450);
    },
    [target],
  );

  return (
    <a href={`#${target}`} className={className} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </a>
  );
}
