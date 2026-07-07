import type { HeroContent } from "@/types/content";
import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink";
import { WizardLink } from "@/components/whatsapp/WizardLink";
import { WaIcon } from "@/components/whatsapp/WaIcon";
import { Icon } from "@/components/ui/Icon";

/** Shared hero for landings and servicios. The right-column card is passed in. */
export function Hero({
  content,
  variant = "landing",
  card,
  ctaTarget,
}: {
  content: HeroContent;
  variant?: "landing" | "service";
  card: React.ReactNode;
  /**
   * Si se pasa (páginas con formulario), el CTA de WhatsApp baja al wizard con
   * ese id. Si se omite (páginas sin formulario), abre WhatsApp directo.
   */
  ctaTarget?: string;
}) {
  const { eyebrow, heading, headingAccent, sub, primaryCta, secondaryCta, trust } =
    content;

  return (
    <section className={`hero${variant === "service" ? " hero--service" : ""}`}>
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>
            {heading}
            {headingAccent && <span className="accent">{headingAccent}</span>}
          </h1>
          <p className="sub">{sub}</p>
          <div className="hero-cta">
            {primaryCta.whatsapp ? (
              ctaTarget ? (
                <WizardLink
                  className="btn btn-wa"
                  target={ctaTarget}
                  ariaLabel={primaryCta.label}
                >
                  <WaIcon />
                  {primaryCta.label}
                </WizardLink>
              ) : (
                <WhatsAppLink className="btn btn-wa" location="hero">
                  <WaIcon />
                  {primaryCta.label}
                </WhatsAppLink>
              )
            ) : (
              <a className="btn btn-wa" href={primaryCta.href}>
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a className="btn btn-ghost" href={secondaryCta.href}>
                {secondaryCta.label}
              </a>
            )}
          </div>
          <div className="trustline">
            {trust.map((t) => (
              <span key={t.label}>
                <Icon name={t.icon} />
                {t.label}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-art">{card}</div>
      </div>
    </section>
  );
}
