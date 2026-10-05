"use client";

import { useCallback } from "react";

/**
 * Botón "Cotiza por formulario" de las páginas con formulario en el hero:
 * llama la atención sobre la tarjeta del formulario (pulso `wizard-attn`) y
 * enfoca su primer campo. Si la tarjeta no está a la vista (móvil: queda
 * debajo de los botones), primero hace scroll hasta ella. Sin JavaScript
 * funciona como ancla normal.
 */
export function HeroFormLink({
  target = "formulario",
  className,
  children,
}: {
  /** id de la tarjeta del formulario del hero. */
  target?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const card = document.getElementById(target);
      if (!card) return; // sin formulario en esta página: deja el salto por defecto
      e.preventDefault();

      const pulse = () => {
        card.classList.remove("wizard-attn");
        void card.offsetWidth; // reinicia la animación en cada clic
        card.classList.add("wizard-attn");
        card
          .querySelector<HTMLElement>("input:not([type=hidden]):not([tabindex='-1'])")
          ?.focus({ preventScroll: true });
      };

      const header = document.querySelector<HTMLElement>(".topbar");
      const offset = (header?.offsetHeight ?? 0) + 16;
      const rect = card.getBoundingClientRect();
      const visible = rect.top >= offset && rect.bottom <= window.innerHeight;
      if (visible) {
        pulse();
        return;
      }
      window.scrollTo({ top: Math.max(0, rect.top + window.scrollY - offset), behavior: "smooth" });
      window.setTimeout(pulse, 600);
    },
    [target],
  );

  return (
    <a href={`#${target}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
