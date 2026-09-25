"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Contenedor del carrusel de certificaciones. La animación arranca solo
 * cuando la sección entra en pantalla y se detiene al salir, para no gastar
 * CPU durante la carga inicial ni mientras el usuario está en otra parte.
 */
export function CertsMarquee({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setRunning(entry.isIntersecting), {
      rootMargin: "0px 0px -10% 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={running ? "certs-marquee is-running" : "certs-marquee"}>
      {children}
    </div>
  );
}
