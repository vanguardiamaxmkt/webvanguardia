import type { ServiceContent } from "@/types/content";
import { WhatsAppProvider } from "@/components/whatsapp/WhatsAppProvider";
import { Topbar } from "@/components/layout/Topbar";
import { siteNav } from "@/content/site";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/whatsapp/FloatingWhatsApp";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { Hero } from "@/components/sections/Hero";
import { FactsCard } from "@/components/sections/FactsCard";
import { LeadForm } from "@/components/whatsapp/LeadForm";
import { EmailLeadSection } from "@/components/sections/EmailLeadSection";
import type { FormField } from "@/types/content";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Prose } from "@/components/sections/Prose";
import { Benefits } from "@/components/sections/Benefits";
import { Faq } from "@/components/sections/Faq";
import { Related } from "@/components/sections/Related";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/content/site";
import { TIPO_POR_SLUG } from "@/content/tipos-tasacion";
import { faqPageJsonLd } from "@/lib/schema";

/** Campos del formulario de WhatsApp del hero en las páginas de servicio. */
const SERVICE_FORM_FIELDS: FormField[] = [
  { type: "text", name: "nombre", label: "Nombre" },
  { type: "text", name: "ubicacion", label: "Distrito o ciudad" },
  { type: "tel", name: "telefono", label: "Teléfono / WhatsApp" },
];

/** Renders a complete SEO service page from its content config. */
export function ServicePage({
  content,
  parent = { name: "Servicios", href: "/servicios" },
  heroForm = false,
}: {
  content: ServiceContent;
  /** Breadcrumb parent (silo): Servicios por defecto, Tasaciones para embarcaciones. */
  parent?: { name: string; href: string };
  /**
   * Muestra en el hero la tarjeta con formulario por correo (como la home) en
   * lugar de la ficha del servicio, si la página define `formCard`. Activo en
   * el silo /tasaciones.
   */
  heroForm?: boolean;
}) {
  const path = content.meta.canonical ?? `${parent.href}/${content.slug}`;
  const withForm = heroForm && !!content.formCard;
  // El FAQPage escrito a mano en cada archivo se reemplaza por uno generado
  // desde las preguntas visibles; al Service se le completa la url si falta.
  const jsonLd = [
    ...content.jsonLd
      .filter((block) => block["@type"] !== "FAQPage")
      .map((block) =>
        block["@type"] === "Service" && !block.url ? { ...block, url: `${site.url}${path}` } : block,
      ),
    faqPageJsonLd(content.faq.items),
  ];

  return (
    <WhatsAppProvider
      baseMessage={content.whatsapp.baseMessage}
      segment={content.whatsapp.segment}
    >
      <JsonLd data={jsonLd} />
      <Topbar nav={siteNav} ctaTarget={withForm ? "cotizar" : undefined} />
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
          ctaTarget={withForm ? "cotizar" : undefined}
          card={
            withForm ? (
              <LeadForm fields={SERVICE_FORM_FIELDS} variant="hero" id="cotizar" />
            ) : (
              <FactsCard data={content.heroCard} />
            )
          }
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
        {withForm && content.formCard && (
          <EmailLeadSection
            cert={content.formCard}
            defaultTipo={TIPO_POR_SLUG[content.slug]}
            submitLabel={content.formCard.submitLabel}
          />
        )}
        <Related data={content.related} id="servicios" />
        <FinalCta data={content.finalCta} />
      </main>
      <Footer />
      <FloatingWhatsApp target={withForm ? "cotizar" : undefined} />
    </WhatsAppProvider>
  );
}
