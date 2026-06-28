import Link from "next/link";
import type { RelatedSection } from "@/types/content";

export function Related({ data, id }: { data: RelatedSection; id?: string }) {
  return (
    <section className="related" id={id}>
      <div className="wrap">
        <div className="sec-eyebrow" style={{ color: "var(--gold)" }}>
          Servicios relacionados
        </div>
        <h2 className="sec-h">{data.title}</h2>
        <p className="lead-p">{data.intro}</p>
        <div className="related-grid">
          {data.cards.map((card) => (
            <Link className="rel-card" href={card.href} key={card.href}>
              <span className="rel-tag">{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <span className="go">Ver servicio →</span>
            </Link>
          ))}
        </div>
        {data.moreLinks && data.moreLinks.length > 0 && (
          <p className="more-links">
            También:{" "}
            {data.moreLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 && " · "}
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
