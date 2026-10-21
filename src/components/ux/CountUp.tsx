"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Número que "cuenta" desde 0 hasta su valor cuando entra en pantalla
 * (franja de confianza: "+25", "+10 mil"). Conserva prefijo y sufijo del texto
 * original; si el texto no tiene dígitos ("SBS", "Nacional") se muestra tal cual.
 *
 * El HTML del servidor lleva el valor final (SEO y sin JS); el conteo solo
 * ocurre en el cliente y respeta `prefers-reduced-motion`.
 */
const DURATION_MS = 1400;

function parse(value: string) {
  const m = value.match(/^([^\d]*)(\d[\d.,\s]*\d|\d)(.*)$/);
  if (!m) return null;
  const raw = m[2];
  const separator = raw.match(/[^\d]/)?.[0] ?? "";
  return { prefix: m[1], raw, target: Number(raw.replace(/[^\d]/g, "")), separator, suffix: m[3] };
}

/** Agrupa de a miles con el mismo separador que traía el texto ("1 500"). */
function format(n: number, separator: string) {
  const s = String(n);
  return separator ? s.replace(/\B(?=(\d{3})+(?!\d))/g, separator) : s;
}

export function CountUp({ value }: { value: string }) {
  const parsed = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    const p = parse(value);
    if (!p || !el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }
    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION_MS);
          const eased = 1 - Math.pow(1 - t, 3);
          setCurrent(Math.round(eased * p.target));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        setCurrent(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  if (!parsed) return <>{value}</>;
  return (
    <span ref={ref} className="count">
      {parsed.prefix}
      <span className="count-n">
        {current === null ? parsed.raw : format(current, parsed.separator)}
      </span>
      {parsed.suffix}
    </span>
  );
}
