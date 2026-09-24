import Link from "next/link";

/**
 * Enlaces a las demás páginas del mismo silo ("Otras tasaciones"). Bloque
 * discreto al final de las landings: da navegación al lector y reparte
 * enlaces internos con el nombre de cada servicio como texto del enlace.
 */
export function SiloLinks({
  eyebrow,
  heading,
  parent,
  allLabel,
  links,
}: {
  eyebrow: string;
  heading: string;
  parent: { name: string; href: string };
  /** Texto del enlace al índice del silo. */
  allLabel: string;
  links: { label: string; href: string }[];
}) {
  if (links.length === 0) return null;
  return (
    <section className="silo-links" aria-label={eyebrow}>
      <div className="wrap">
        <div className="sec-eyebrow">{eyebrow}</div>
        <h2 className="sec-h">{heading}</h2>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link className="silo-links-all" href={parent.href}>
          {allLabel} →
        </Link>
      </div>
    </section>
  );
}
