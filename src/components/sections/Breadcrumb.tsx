import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="crumb" aria-label="Ruta de navegación">
      <div className="wrap">
        {items.map((item, i) => (
          <span key={item.label} style={{ display: "contents" }}>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span className="cur">{item.label}</span>
            )}
            {i < items.length - 1 && <span className="sep">›</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}
