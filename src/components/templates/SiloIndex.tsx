import Link from "next/link";
import type { PageEntry } from "@/content/pages";
import { pagePath } from "@/content/pages";
import { WhatsAppProvider } from "@/components/whatsapp/WhatsAppProvider";
import { Topbar } from "@/components/layout/Topbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/whatsapp/FloatingWhatsApp";
import { Breadcrumb } from "@/components/sections/Breadcrumb";

function label(p: PageEntry): string {
  return p.kind === "landing" ? p.content.hero.eyebrow : p.content.breadcrumbLabel;
}

/** Índice de un silo (/tasaciones o /servicios): grilla de tarjetas. */
export function SiloIndex({
  eyebrow,
  heading,
  intro,
  current,
  items,
  baseMessage,
  segment,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  current: string;
  items: PageEntry[];
  baseMessage: string;
  segment: string;
}) {
  return (
    <WhatsAppProvider baseMessage={baseMessage} segment={segment}>
      <Topbar />
      <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: current }]} />
      <main>
        <section className="seg">
          <div className="wrap">
            <div className="sec-head-center">
              <div className="sec-eyebrow">{eyebrow}</div>
              <h1 className="sec-h">{heading}</h1>
              <p className="sec-p">{intro}</p>
            </div>
            <div className="seg-grid">
              {items.map((p) => (
                <Link className="seg-card" href={pagePath(p)} key={p.content.slug}>
                  <span className="seg-tag">
                    {p.silo === "tasaciones" ? "Tasación" : "Servicio"}
                  </span>
                  <h3>{label(p)}</h3>
                  <p>{p.content.hero.sub}</p>
                  <span className="seg-more">
                    Ver más{" "}
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </WhatsAppProvider>
  );
}
