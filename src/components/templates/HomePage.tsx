import Link from "next/link";
import { home } from "@/content/home";
import { homeNav } from "@/content/site";
import { WhatsAppProvider } from "@/components/whatsapp/WhatsAppProvider";
import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink";
import { WaIcon } from "@/components/whatsapp/WaIcon";
import { LeadForm } from "@/components/whatsapp/LeadForm";
import { FloatingWhatsApp } from "@/components/whatsapp/FloatingWhatsApp";
import { Topbar } from "@/components/layout/Topbar";
import { Footer } from "@/components/layout/Footer";
import { CertCard } from "@/components/sections/CertCard";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Icon } from "@/components/ui/Icon";

export function HomePage() {
  return (
    <WhatsAppProvider
      baseMessage={home.whatsapp.baseMessage}
      segment={home.whatsapp.segment}
    >
      <Topbar variant="home" nav={homeNav} />
      <main>
        {/* ===== Hero ===== */}
        <section className="hero hero--home">
          <svg
            className="hero-skyline"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: -1,
              width: "100%",
              height: "auto",
              zIndex: 2,
              opacity: 0.55,
              pointerEvents: "none",
            }}
          >
            <path fill="#13344F" d="M0,150 L0,96 L60,96 L60,72 L96,72 L96,110 L150,110 L150,60 L168,48 L186,60 L186,84 L240,84 L240,40 L300,40 L300,150 Z" />
            <path fill="#0C2236" d="M280,150 L280,70 L330,70 L330,44 L360,44 L360,70 L410,70 L410,96 L470,96 L470,30 L500,12 L530,30 L530,150 Z" />
            <path fill="#13344F" d="M520,150 L520,84 L580,84 L580,54 L620,54 L620,84 L690,84 L690,108 L760,108 L760,66 L800,66 L800,150 Z" />
            <path fill="#0C2236" d="M780,150 L780,48 L820,48 L820,150 Z M840,150 L840,78 L900,78 L900,150 Z M860,78 L870,60 L880,78 Z" />
            <path fill="#13344F" d="M880,150 L880,90 L940,90 L940,58 L990,58 L990,90 L1050,90 L1050,120 L1110,120 L1110,72 L1140,72 L1140,150 Z" />
            <path fill="#0C2236" d="M1120,150 L1120,56 L1160,56 L1160,30 L1190,30 L1190,56 L1250,56 L1250,96 L1320,96 L1320,66 L1360,66 L1360,150 Z" />
            <path fill="#13344F" d="M1340,150 L1340,84 L1400,84 L1400,108 L1440,108 L1440,150 Z" />
          </svg>
          <div className="wrap">
            <div className="hero-copy">
              <span className="eyebrow">{home.hero.eyebrow}</span>
              <h1>
                {home.hero.heading}
                <span className="accent">{home.hero.headingAccent}</span>
              </h1>
              <p className="sub">{home.hero.sub}</p>
              <div className="hero-cta">
                <WhatsAppLink className="btn btn-wa" location="hero">

                  <WaIcon />
                  {home.hero.primaryLabel}
                </WhatsAppLink>
                <a className="btn btn-ghost" href="#servicios">
                  {home.hero.secondaryLabel}
                </a>
              </div>
              <div className="trustline">
                {home.hero.trust.map((t) => (
                  <span key={t.label}>
                    <Icon name={t.icon} />
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="hero-art">
              <CertCard data={{ kind: "cert", ...home.cert }} />
            </div>
          </div>
        </section>

        <TrustStrip stats={home.stats} />

        {/* ===== Hub de derivación ===== */}
        <section className="seg" id="servicios">
          <div className="wrap">
            <div className="sec-head-center">
              <div className="sec-eyebrow">{home.segmentsIntro.eyebrow}</div>
              <h2 className="sec-h">{home.segmentsIntro.heading}</h2>
              <p className="sec-p">{home.segmentsIntro.body}</p>
            </div>
            <div className="seg-grid">
              {home.segments.map((seg) => (
                <Link className="seg-card" href={seg.href} key={seg.href}>
                  <span className="seg-ic">
                    <svg viewBox="0 0 24 24">
                      {seg.iconPaths.map((d, i) => (
                        <path key={i} d={d} />
                      ))}
                    </svg>
                  </span>
                  <span className="seg-tag">{seg.tag}</span>
                  <h3>{seg.title}</h3>
                  <p>{seg.body}</p>
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

        {/* ===== Bienes que tasamos ===== */}
        <section className="assets">
          <div className="wrap">
            <div className="sec-eyebrow" style={{ color: "var(--gold)" }}>
              {home.assets.eyebrow}
            </div>
            <h2 className="sec-h">{home.assets.heading}</h2>
            <p className="sec-p">{home.assets.body}</p>
            <div className="chips">
              {home.assets.chips.map((chip) => (
                <span className="chip" key={chip}>
                  <Icon name="check" />
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Por qué VanguardiaMax ===== */}
        <section>
          <div className="wrap">
            <div className="sec-eyebrow">{home.benefits.eyebrow}</div>
            <h2 className="sec-h">{home.benefits.heading}</h2>
            <div className="benefits-grid">
              {home.benefits.items.map((b) => (
                <article className="bcard" key={b.num}>
                  <span className="bnum">{b.num}</span>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Proceso de 5 pasos ===== */}
        <section className="how" id="como">
          <div className="wrap">
            <div className="sec-head-center">
              <div className="sec-eyebrow">{home.process.eyebrow}</div>
              <h2 className="sec-h">{home.process.heading}</h2>
              <p className="sec-p">{home.process.body}</p>
            </div>
            <div className="proc">
              {home.process.steps.map((step) => (
                <div className="proc-step" key={step.num}>
                  <div className="proc-n">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Homologación ===== */}
        <section className="homol" id="homologacion">
          <div className="wrap">
            <div className="homol-grid">
              <div>
                <div className="sec-eyebrow">{home.homologacion.eyebrow}</div>
                <h2 className="sec-h">{home.homologacion.heading}</h2>
                <p className="sec-p">{home.homologacion.body}</p>
                <div className="homol-badges">
                  <div className="reg-badge">
                    <span className="rb-ic">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 3l8 4v5c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V7l8-4z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </span>
                    <div>
                      <b>REPEV</b>
                      <span>Registro de Peritos Valuadores · SBS</span>
                    </div>
                  </div>
                  <div className="reg-badge">
                    <span className="rb-ic">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 3v18M5 7h14M7 7l-3 7a3 3 0 006 0L7 7zm10 0l-3 7a3 3 0 006 0l-3-7z" />
                      </svg>
                    </span>
                    <div>
                      <b>REPEJ</b>
                      <span>Registro de Peritos Judiciales · Poder Judicial</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inst-grid">
                <article className="inst">
                  <span className="inst-ic">
                    <svg viewBox="0 0 24 24">
                      <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6" />
                    </svg>
                  </span>
                  <div>
                    <h4>Banca y financieras</h4>
                    <p>Crédito hipotecario, garantías y financiamiento bajo normativa SBS.</p>
                  </div>
                </article>
                <article className="inst">
                  <span className="inst-ic">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3v18M5 7h14M7 7l-3 7a3 3 0 006 0L7 7zm10 0l-3 7a3 3 0 006 0l-3-7zM6 21h12" />
                    </svg>
                  </span>
                  <div>
                    <h4>Poder Judicial</h4>
                    <p>Peritajes para juicios, herencias y división de bienes.</p>
                  </div>
                </article>
                <article className="inst">
                  <span className="inst-ic">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 8l8-5 8 5M5 8v11h14V8M9 19v-6h6v6" />
                    </svg>
                  </span>
                  <div>
                    <h4>Notarías y SUNARP</h4>
                    <p>Sustento para escrituras, saneamiento e inscripciones registrales.</p>
                  </div>
                </article>
                <article className="inst">
                  <span className="inst-ic">
                    <svg viewBox="0 0 24 24">
                      <path d="M6 2h9l3 3v17H6zM6 2v20M9 8h6M9 12h6M9 16h4" />
                    </svg>
                  </span>
                  <div>
                    <h4>SUNAT y municipios</h4>
                    <p>Autoavalúo, predial, arbitrios y trámites tributarios.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Formulario maestro ===== */}
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
                {home.form.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Icon name="check" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <LeadForm fields={home.form.fields} />
          </div>
        </section>

        <Faq items={home.faq.items} id="faq" />
        <FinalCta data={home.finalCta} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </WhatsAppProvider>
  );
}
