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
import { LeadForm } from "@/components/whatsapp/LeadForm";
import { Icon } from "@/components/ui/Icon";

/** Renders a complete paid-traffic landing page from its content config. */
export function LandingPage({ content }: { content: LandingContent }) {
  return (
    <WhatsAppProvider
      baseMessage={content.whatsapp.baseMessage}
      segment={content.whatsapp.segment}
    >
      <Topbar />
      <main>
        <Hero content={content.hero} card={<CertCard data={content.heroCard} />} />
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
        <FinalCta data={content.finalCta} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </WhatsAppProvider>
  );
}
