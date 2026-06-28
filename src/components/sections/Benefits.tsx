import type { Benefit } from "@/types/content";

export function Benefits({
  eyebrow,
  heading,
  items,
  alt = false,
}: {
  eyebrow: string;
  heading: string;
  items: Benefit[];
  /** Use the cream "alt" background (servicio pages). */
  alt?: boolean;
}) {
  return (
    <section className={alt ? "alt" : undefined}>
      <div className="wrap">
        <div className="sec-eyebrow">{eyebrow}</div>
        <h2 className="sec-h">{heading}</h2>
        <div className="benefits-grid">
          {items.map((b) => (
            <article className="bcard" key={b.num}>
              <span className="bnum">{b.num}</span>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
