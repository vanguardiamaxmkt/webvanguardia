import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

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
          <div style={{ marginTop: 10 }}>
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
