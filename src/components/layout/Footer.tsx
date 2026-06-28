import Image from "next/image";
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
        </div>
        <p className="legal">{site.legal}</p>
      </div>
    </footer>
  );
}
