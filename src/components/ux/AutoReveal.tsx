"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Elements revealed on scroll: page blocks AND each individual card. */
const REVEAL_SELECTOR =
  "main > section, main > .strip, .seg-card, .bcard, .inst, .rel-card, .proc-step, .stat, .chip";

/**
 * Reveals page blocks (`main > section`, the stats strip) and each individual
 * card as they scroll into view, using a single IntersectionObserver. Re-runs on
 * client-side navigation. Respects `prefers-reduced-motion` and degrades
 * gracefully when IntersectionObserver is unavailable (everything is shown).
 *
 * The initial hidden state lives in CSS keyed on `html.reveal-ready`, which an
 * inline script in the layout sets before first paint — so there is no flash
 * and no-JS users see all content.
 */
export function AutoReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );
    if (targets.length === 0) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("reveal-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
