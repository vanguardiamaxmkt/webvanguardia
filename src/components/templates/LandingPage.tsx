import type { LandingContent } from "@/types/content";
import { WhatsAppProvider } from "@/components/whatsapp/WhatsAppProvider";
import { Topbar } from "@/components/layout/Topbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/whatsapp/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { CertCard } from "@/components/sections/CertCard";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Pain } from "@/components/sections/Pain";
import { Benefits } from "@/components/sections/Benefits";
import { Steps } from "@/components/sections/Steps";
import { Prose } from "@/components/sections/Prose";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { SiloLinks } from "@/components/sections/SiloLinks";
import { LeadForm } from "@/components/whatsapp/LeadForm";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteNav } from "@/content/site";
import { breadcrumbListJsonLd, serviceJsonLd } from "@/lib/schema";

/**
 * Renders a complete landing page from its content config. Además del diseño
 * de conversión, emite su JSON-LD (Service, FAQPage, BreadcrumbList), migas
 * visibles, menú y enlaces a las demás páginas del silo.
 */
export function LandingPage({
  content,
  parent,
  siblings,
}: {
  content: LandingContent;
  /** Silo al que pertenece (Tasaciones / Servicios). */
  parent: { name: string; href: string };
  /** Demás páginas del mismo silo, para el bloque de enlaces. */
  siblings: { label: string; href: string }[];
}) {
  const name = content.serviceName ?? content.hero.eyebrow;
  const path = content.meta.canonical ?? `${parent.href}/${content.slug}`;

  const jsonLd: Record<string, unknown>[] = [
    serviceJsonLd({
      name,
      serviceType: name,
      description: content.meta.description,
      path,
    }),
    breadcrumbListJsonLd([
      { name: "Inicio", path: "/" },
      { name: parent.name, path: parent.href },
      { name, path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <WhatsAppProvider
      baseMessage={content.whatsapp.baseMessage}
      segment={content.whatsapp.segment}
    >
      <JsonLd data={jsonLd} />
      <Topbar nav={siteNav} ctaTarget="cotizar" />
      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: parent.name, href: parent.href },
          { label: name },
        ]}
      />
      <main>
        <Hero
          content={content.hero}
          card={<CertCard data={content.heroCard} />}
          ctaTarget="cotizar"
        />
        <TrustStrip stats={content.stats} />
        {content.pain && (
          <Pain
            eyebrow={content.pain.eyebrow}
            heading={content.pain.heading}
            body={content.pain.body}
          />
        )}
        <Benefits
          eyebrow={content.benefits.eyebrow}
          heading={content.benefits.heading}
          items={content.benefits.items}
        />
        <Steps
          eyebrow={content.steps.eyebrow}
          heading={content.steps.heading}
          items={content.steps.items}
        />

        {content.seoContent && <Prose blocks={content.seoContent} alt />}

        <section className="lead" id="cotizar">
          <div className="wrap lead-grid">
            <div>
              <div className="sec-eyebrow" style={{ color: "var(--gold)" }}>
                Cotiza ahora
              </div>
              <h2>Cuéntanos de tu caso y te respondemos hoy</h2>
              <p className="sec-p">
                Completa los datos y te llevamos directo a WhatsApp con tu consulta
                lista. Sin formularios eternos.
              </p>
              <ul>
                {content.form.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Icon name="check" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <LeadForm fields={content.form.fields} />
          </div>
        </section>

        <Faq items={content.faq.items} id="faq" />
        <SiloLinks
          eyebrow={parent.name === "Tasaciones" ? "Otras tasaciones" : "Otros servicios"}
          heading={
            parent.name === "Tasaciones"
              ? "¿Necesitas tasar otro tipo de bien?"
              : "Más servicios para tu proyecto"
          }
          parent={parent}
          allLabel={parent.name === "Tasaciones" ? "Ver todas las tasaciones" : "Ver todos los servicios"}
          links={siblings}
        />
        <FinalCta data={content.finalCta} />
      </main>
      <Footer />
      <FloatingWhatsApp target="cotizar" />
    </WhatsAppProvider>
  );
}
