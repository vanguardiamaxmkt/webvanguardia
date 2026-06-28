import type { Step } from "@/types/content";

/** Landing "Cómo funciona" — 3-step process. */
export function Steps({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: string;
  items: Step[];
}) {
  return (
    <section className="how">
      <div className="wrap">
        <div className="sec-eyebrow">{eyebrow}</div>
        <h2 className="sec-h">{heading}</h2>
        <ol className="steps">
          {items.map((s) => (
            <li className="step" key={s.num}>
              <span className="step-n">{s.num}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
