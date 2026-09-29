import type { Metadata } from "next";
import { site, siteNav } from "@/content/site";
import { SOCIAL } from "@/content/social";
import type { FaqItem } from "@/types/content";
import { WhatsAppProvider } from "@/components/whatsapp/WhatsAppProvider";
import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink";
import { WaIcon } from "@/components/whatsapp/WaIcon";
import { FloatingWhatsApp } from "@/components/whatsapp/FloatingWhatsApp";
import { Topbar } from "@/components/layout/Topbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { Faq } from "@/components/sections/Faq";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { ORG_ID, WEBSITE_ID, breadcrumbListJsonLd, faqPageJsonLd } from "@/lib/schema";
import { ContactForm } from "./ContactForm";

const DESCRIPTION =
  "Contáctanos por WhatsApp, teléfono o correo. Oficina en San Isidro, Lima, y tasaciones en todo el Perú. Te respondemos el mismo día.";

export const metadata: Metadata = {
  title: "Contacto | VanguardiaMax",
  description: DESCRIPTION,
  alternates: { canonical: "/contacto" },
};

const MAP_QUERY = encodeURIComponent(site.mapQuery);
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&z=16&hl=es&output=embed`;
const MAP_OPEN = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

/** Íconos de los canales de contacto (monocromo, heredan el color). */
const ICONS = {
  phone:
    "M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.24 1.02l-2.21 2.2z",
  mail: "M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  pin: "M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z",
  clock: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.2 3.1.8-1.3-4.5-2.7V7z",
  route:
    "M21.7 11.3l-9-9a1 1 0 00-1.4 0l-9 9a1 1 0 000 1.4l9 9a1 1 0 001.4 0l9-9a1 1 0 000-1.4zM14 14.5V12h-4v3H8v-4a1 1 0 011-1h5V7.5l3.5 3.5-3.5 3.5z",
} as const;

function Glyph({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const FAQ: FaqItem[] = [
  {
    q: "¿En cuánto tiempo responden?",
    a: "Respondemos el mismo día. WhatsApp es el canal más rápido: cuéntanos qué bien necesitas tasar y para qué trámite, y te damos el alcance y la cotización.",
  },
  {
    q: "¿Qué información debo tener a la mano para cotizar?",
    a: "El tipo de bien, dónde está (distrito o ciudad) y la finalidad de la tasación: crédito, juicio, seguros, contabilidad o compraventa. Con eso cotizamos; los documentos, como la copia literal, el PU/HR o los planos, se piden después según el caso.",
  },
  {
    q: "¿Necesito ir a la oficina?",
    a: "No. La coordinación y la cotización se hacen por WhatsApp, teléfono o correo, y la inspección se realiza donde está el bien. Si prefieres una reunión, coordinamos una cita en nuestra oficina de San Isidro.",
  },
  {
    q: "¿Atienden fuera de Lima?",
    a: "Sí. Tenemos cobertura en todo el Perú, con equipos en Lima, Callao y provincias.",
  },
  {
    q: "¿Cuánto cuesta una tasación?",
    a: "Como referencia, entre S/ 300 y S/ 1 500, según el tipo de bien, su ubicación y la finalidad del informe. Escríbenos con esos datos y te damos una cotización exacta.",
  },
];

export default function ContactoPage() {
  const path = "/contacto";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${site.url}${path}#webpage`,
      url: `${site.url}${path}`,
      name: "Contacto | VanguardiaMax",
      description: DESCRIPTION,
      inLanguage: "es-PE",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      mainEntity: { "@id": ORG_ID },
    },
    breadcrumbListJsonLd([
      { name: "Inicio", path: "/" },
      { name: "Contacto", path },
    ]),
    faqPageJsonLd(FAQ),
  ];

  return (
    <WhatsAppProvider
      baseMessage="Hola VanguardiaMax, quiero cotizar una tasación."
      segment="contacto"
    >
      <JsonLd data={jsonLd} />
      <Topbar nav={siteNav} />
      <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
      <main>
        {/* ===== Cabecera con formulario ===== */}
        <section className="hero hero--service contact-hero">
          <div className="wrap">
            <div>
              <h1>
                <span className="eyebrow">Contacto</span> Hablemos de{" "}
                <span className="accent">tu tasación</span>
              </h1>
              <p className="sub">
                Cuéntanos qué bien necesitas tasar y para qué trámite. Te respondemos el
                mismo día por el canal que prefieras.
              </p>
              <div className="hero-cta">
                <WhatsAppLink className="btn btn-wa" location="hero">
                  <WaIcon />
                  Escríbenos por WhatsApp
                </WhatsAppLink>
                <a className="btn btn-ghost" href={`tel:${site.phoneE164}`}>
                  <Glyph d={ICONS.phone} />
                  Llamar {site.phoneDisplay}
                </a>
              </div>
              <div className="trustline">
                <span>
                  <Icon name="check" />
                  Respuesta el mismo día
                </span>
                <span>
                  <Icon name="shield" />
                  Cobertura en todo el Perú
                </span>
                <span>
                  <Icon name="star" />
                  +25 años de experiencia
                </span>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* ===== Canales de atención ===== */}
        <section className="contact-channels">
          <div className="wrap">
            <div className="sec-head-center">
              <div className="sec-eyebrow">Canales de atención</div>
              <h2 className="sec-h">Elige cómo quieres que te atendamos</h2>
            </div>
            <ul className="contact-cards">
              <li className="ccard">
                <div className="ccard-ic ccard-ic--wa">
                  <WaIcon />
                </div>
                <h3>WhatsApp</h3>
                <WhatsAppLink className="ccard-val" location="canales">
                  +51 {site.phoneDisplay}
                </WhatsAppLink>
                <p>El canal más rápido para cotizar y coordinar la inspección.</p>
              </li>
              <li className="ccard">
                <div className="ccard-ic">
                  <Glyph d={ICONS.phone} />
                </div>
                <h3>Teléfono</h3>
                <a className="ccard-val" href={`tel:${site.phoneE164}`}>
                  +51 {site.phoneDisplay}
                </a>
                <p>Llámanos y te orientamos sobre el tipo de tasación que necesitas.</p>
              </li>
              <li className="ccard">
                <div className="ccard-ic">
                  <Glyph d={ICONS.mail} />
                </div>
                <h3>Correo electrónico</h3>
                <a className="ccard-val" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <p>Para enviarnos documentos o solicitar una propuesta formal.</p>
              </li>
              <li className="ccard">
                <div className="ccard-ic">
                  <Glyph d={ICONS.pin} />
                </div>
                <h3>Oficina</h3>
                <a className="ccard-val" href={MAP_OPEN} target="_blank" rel="noopener noreferrer">
                  {site.address}
                </a>
                <p>San Isidro, Lima. Coordina tu visita por WhatsApp.</p>
              </li>
              {site.hours.length > 0 && (
                <li className="ccard">
                  <div className="ccard-ic">
                    <Glyph d={ICONS.clock} />
                  </div>
                  <h3>Horario de atención</h3>
                  {site.hours.map((h) => (
                    <p className="ccard-val" key={h}>
                      {h}
                    </p>
                  ))}
                </li>
              )}
            </ul>
          </div>
        </section>

        {/* ===== Ubicación y mapa ===== */}
        <section className="contact-location">
          <div className="wrap contact-map-grid">
            <div>
              <div className="sec-eyebrow">Dónde estamos</div>
              <h2 className="sec-h">Nuestra oficina en San Isidro</h2>
              <address className="contact-address">
                {site.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
              <div className="contact-address-actions">
                <a className="btn btn-primary-dark" href={MAP_DIRECTIONS} target="_blank" rel="noopener noreferrer">
                  <Glyph d={ICONS.route} />
                  Cómo llegar
                </a>
                <a className="btn btn-ghost" href={MAP_OPEN} target="_blank" rel="noopener noreferrer">
                  Abrir en Google Maps
                </a>
              </div>
              {site.hours.length > 0 && (
                <div className="contact-hours">
                  <Glyph d={ICONS.clock} />
                  <div>
                    <b>Horario de atención</b>
                    {site.hours.map((h) => (
                      <span key={h}>{h}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="contact-social">
                <b>Síguenos</b>
                <div className="footer-social contact-social-links">
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
              </div>
            </div>
            <div className="contact-map">
              <iframe
                src={MAP_EMBED}
                title={`Mapa: oficina de ${site.name} en San Isidro, Lima`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <Faq heading="Antes de escribirnos" items={FAQ} id="faq" />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </WhatsAppProvider>
  );
}
