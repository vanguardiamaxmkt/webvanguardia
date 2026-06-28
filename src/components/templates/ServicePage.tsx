import type { ServiceContent } from "@/types/content";
import { WhatsAppProvider } from "@/components/whatsapp/WhatsAppProvider";
import { Topbar } from "@/components/layout/Topbar";
import { siteNav } from "@/content/site";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/whatsapp/FloatingWhatsApp";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { Hero } from "@/components/sections/Hero";
import { FactsCard } from "@/components/sections/FactsCard";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Prose } from "@/components/sections/Prose";
import { Benefits } from "@/components/sections/Benefits";
import { Faq } from "@/components/sections/Faq";
import { Related } from "@/components/sections/Related";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/ui/JsonLd";

/** Renders a complete SEO service page from its content config. */
export function ServicePage({
  content,
  parent = { name: "Servicios", href: "/servicios" },
}: {
  content: ServiceContent;
  /** Breadcrumb parent (silo): Servicios por defecto, Tasaciones para embarcaciones. */
  parent?: { name: string; href: string };
}) {
  return (
    <WhatsAppProvider
      baseMessage={content.whatsapp.baseMessage}
      segment={content.whatsapp.segment}
    >
      <JsonLd data={content.jsonLd} />
      <Topbar nav={siteNav} />
      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: parent.name, href: parent.href },
          { label: content.breadcrumbLabel },
        ]}
      />
      <main>
        <Hero
          content={content.hero}
          variant="service"
          card={<FactsCard data={content.heroCard} />}
        />
        <TrustStrip stats={content.stats} />
        <Prose blocks={content.prose} />
        <Benefits
          eyebrow={content.benefits.eyebrow}
          heading={content.benefits.heading}
          items={content.benefits.items}
          alt
        />
        <Faq heading={content.faq.heading} items={content.faq.items} />
        <Related data={content.related} id="servicios" />
        <FinalCta data={content.finalCta} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </WhatsAppProvider>
  );
}
