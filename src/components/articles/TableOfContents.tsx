"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/article-html";

/**
 * Índice de contenidos: fijo al costado en escritorio y desplegable en móvil.
 * Resalta la sección que se está leyendo.
 */
export function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const heads = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    if (!heads.length) return;
    const onScroll = () => {
      // La última sección cuyo título ya pasó el tercio superior de la pantalla.
      const line = window.innerHeight * 0.3;
      let cur = heads[0].id;
      for (const h of heads) if (h.getBoundingClientRect().top <= line) cur = h.id;
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const list = (
    <ol>
      {items.map((i) => (
        <li key={i.id}>
          <a href={`#${i.id}`} className={i.id === active ? "on" : undefined}>
            {i.text}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <details className="toc toc--mobile">
        <summary>Contenido del artículo</summary>
        {list}
      </details>
      <nav className="toc toc--desktop" aria-label="Contenido del artículo">
        <p className="toc-title">En este artículo</p>
        {list}
      </nav>
    </>
  );
}
