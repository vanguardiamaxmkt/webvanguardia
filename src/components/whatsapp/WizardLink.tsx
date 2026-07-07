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

      // Destino real del scroll: la tarjeta del formulario si existe; si no
      // (páginas de servicio), el botón del CTA final. Así no se detiene en el
      // inicio de la sección (título/bullets), sino en el wizard mismo.
      const highlight =
        el.querySelector<HTMLElement>(".form-card") ??
        el.querySelector<HTMLElement>(".btn-wa") ??
        el;

      // Scroll a la tarjeta descontando la altura del menú fijo. Se recalcula
      // en cada llamada porque el layout puede moverse mientras cargan las
      // imágenes de arriba (reflow) — por eso corregimos varias veces.
      const scrollToWizard = () => {
        const header = document.querySelector<HTMLElement>(".topbar");
        const offset = (header?.offsetHeight ?? 0) + 16;
        const y = highlight.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      };

      // Primer campo real del formulario (ignora honeypot y ocultos).
      const field = el.querySelector<HTMLElement>(
        "input:not([type=hidden]):not([tabindex='-1']), select, textarea",
      );

      scrollToWizard();
      // Correcciones por reflow (imágenes/íconos que terminan de cargar).
      window.setTimeout(scrollToWizard, 350);
      window.setTimeout(() => {
        scrollToWizard();
        highlight.classList.remove("wizard-attn");
        void highlight.offsetWidth; // reinicia la animación en cada clic
        highlight.classList.add("wizard-attn");
        field?.focus({ preventScroll: true });
      }, 700);
    },
    [target],
  );

  return (
    <a href={`#${target}`} className={className} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </a>
  );
}
