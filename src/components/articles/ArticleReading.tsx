"use client";

import { useEffect, useRef, useState } from "react";
import { pushDataLayer } from "@/lib/whatsapp";

const MILESTONES = [25, 50, 75, 100];

/**
 * Barra de progreso de lectura + medición para GTM/GA4.
 *
 * El progreso se mide sobre el cuerpo del artículo (`#article-content`), no
 * sobre toda la página, para que el pie y los relacionados no lo distorsionen.
 * Eventos (una vez por visita a la página):
 *  - `article_scroll` con `percent` 25 / 50 / 75 / 100.
 *  - `article_read_complete` cuando llegó al 90 % y estuvo activo (pestaña
 *    visible) al menos el 40 % del tiempo de lectura estimado (mínimo 20 s).
 *    Así un scroll rápido hasta el final no cuenta como lectura.
 *  - `article_related_click` y `article_share` (clics en "Sigue leyendo" y en
 *    los botones de compartir; los enlaces llevan `data-track`).
 */
export function ArticleReading({
  slug,
  category,
  readingMinutes,
}: {
  slug: string;
  category: string | null;
  readingMinutes: number;
}) {
  const [progress, setProgress] = useState(0);
  const sent = useRef(new Set<number>());
  const completed = useRef(false);
  const maxProgress = useRef(0);
  const activeSeconds = useRef(0);

  useEffect(() => {
    const base = { article_slug: slug, article_category: category || "", reading_minutes: readingMinutes };
    const needed = Math.max(20, readingMinutes * 60 * 0.4);

    const tryComplete = () => {
      if (completed.current || maxProgress.current < 0.9 || activeSeconds.current < needed) return;
      completed.current = true;
      pushDataLayer({ event: "article_read_complete", ...base, active_seconds: Math.round(activeSeconds.current) });
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const el = document.getElementById("article-content");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.5;
      const p = total > 0 ? Math.min(1, Math.max(0, (window.innerHeight * 0.5 - rect.top) / total)) : 1;
      setProgress(p);
      if (p > maxProgress.current) maxProgress.current = p;
      for (const m of MILESTONES) {
        if (p * 100 >= m && !sent.current.has(m)) {
          sent.current.add(m);
          pushDataLayer({ event: "article_scroll", percent: m, ...base });
        }
      }
      tryComplete();
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Tiempo activo: solo cuenta con la pestaña visible.
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        activeSeconds.current += 1;
        tryComplete();
      }
    }, 1000);

    // Clics medidos (relacionados y compartir).
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (!el) return;
      const kind = el.dataset.track;
      if (kind === "related") {
        pushDataLayer({
          event: "article_related_click",
          ...base,
          target_slug: el.dataset.slug || "",
          position: Number(el.dataset.position || 0),
          read_percent: Math.round(maxProgress.current * 100),
        });
      } else if (kind === "share") {
        pushDataLayer({ event: "article_share", ...base, network: el.dataset.network || "" });
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("click", onClick);
      window.clearInterval(timer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [slug, category, readingMinutes]);

  return (
    <div className="read-progress" aria-hidden="true">
      <i style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
