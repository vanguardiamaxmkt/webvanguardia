import type { FaqItem } from "@/types/content";

export function Faq({
  heading = "Lo que más nos consultan",
  items,
  id,
}: {
  heading?: string;
  items: FaqItem[];
  id?: string;
}) {
  return (
    <section id={id}>
      <div className="wrap">
        <div className="sec-eyebrow">Preguntas frecuentes</div>
        <h2 className="sec-h">{heading}</h2>
        <div style={{ marginTop: 18 }}>
          {items.map((item) => (
            <details className="faq" key={item.q}>
              <summary>
                {item.q}
                <span className="faq-ico" aria-hidden="true" />
              </summary>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
