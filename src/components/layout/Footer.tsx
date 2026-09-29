import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { SOCIAL } from "@/content/social";


export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <div style={{ marginBottom: 12 }}>
            <Image
              className="brand-logo"
              src="/logo.svg"
              alt={site.name}
              width={319}
              height={76}
              unoptimized
            />
          </div>
          {site.address} ·{" "}
          <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>
          <div style={{ marginTop: 6 }}>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="footer-social">
            {SOCIAL.map((s) => (
              <a
                key={s.key}
                href={site.social[s.key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
          <div className="footer-links">
            <Link href="/contacto">Contacto</Link>
            <Link href="/politica-de-privacidad">Política de Privacidad</Link>
            <Link href="/libro-de-reclamaciones" className="footer-libro">
              📕 Libro de Reclamaciones
            </Link>
          </div>
        </div>
        <p className="legal">{site.legal}</p>
      </div>
    </footer>
  );
}
