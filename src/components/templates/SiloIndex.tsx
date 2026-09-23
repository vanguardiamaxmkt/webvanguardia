import Link from "next/link";
import type { PageEntry } from "@/content/pages";
import { pagePath } from "@/content/pages";
import { WhatsAppProvider } from "@/components/whatsapp/WhatsAppProvider";
import { Topbar } from "@/components/layout/Topbar";
import { siteNav } from "@/content/site";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/whatsapp/FloatingWhatsApp";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { Prose } from "@/components/sections/Prose";
import { Faq } from "@/components/sections/Faq";
import { JsonLd } from "@/components/ui/JsonLd";
import type { FaqItem, ProseBlock } from "@/types/content";

function label(p: PageEntry): string {
  return p.kind === "landing" ? p.content.hero.eyebrow : p.content.breadcrumbLabel;
}

/**
 * Índice de un silo (/tasaciones o /servicios): grilla de tarjetas. Opcionalmente
 * añade contenido SEO y preguntas frecuentes (con su schema FAQPage) debajo.
 */
export function SiloIndex({
  eyebrow,
  heading,
  intro,
  current,
  items,
  baseMessage,
  segment,
  seoContent,
  faq,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  current: string;
  items: PageEntry[];
  baseMessage: string;
  segment: string;
  seoContent?: ProseBlock[];
  faq?: { heading?: string; items: FaqItem[] };
}) {
  const faqJsonLd = faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <WhatsAppProvider baseMessage={baseMessage} segment={segment}>
      {faqJsonLd && <JsonLd data={[faqJsonLd]} />}
      <Topbar nav={siteNav} />
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
        {/* Fondo blanco (sin `alt`): separa la guía de la grilla gris de tarjetas,
            que sigue siendo el bloque principal de la página. */}
        {seoContent && <Prose blocks={seoContent} />}
        {faq && <Faq heading={faq.heading} items={faq.items} id="faq" />}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </WhatsAppProvider>
  );
}
