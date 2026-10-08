import type { CertCard as CertCardData } from "@/types/content";
import { HeroLeadForm } from "@/components/hero/HeroLeadForm";
import { Icon } from "@/components/ui/Icon";

const BULLETS = [
  "Te contactamos hoy por teléfono o correo",
  "Cotización personalizada según tu caso",
  "Atención en Lima, Callao y todo el Perú",
];

/**
 * Sección final con el formulario por correo (el principal, por WhatsApp, va
 * en la cabecera). Para quien prefiere que lo contacten en vez de escribir.
 */
export function EmailLeadSection({
  cert,
  defaultTipo,
  submitLabel,
}: {
  cert: Omit<CertCardData, "kind">;
  defaultTipo?: Parameters<typeof HeroLeadForm>[0]["defaultTipo"];
  submitLabel?: string;
}) {
  return (
    <section className="lead" id="cotizar-correo">
      <div className="wrap lead-grid">
        <div>
          <div className="sec-eyebrow" style={{ color: "var(--gold)" }}>
            ¿Prefieres que te contactemos?
          </div>
          <h2>Déjanos tus datos y te escribimos hoy</h2>
          <p className="sec-p">
            Si no usas WhatsApp, completa este formulario: un especialista te llama o te
            escribe el mismo día.
          </p>
          <ul>
            {BULLETS.map((b) => (
              <li key={b}>
                <Icon name="check" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <HeroLeadForm cert={cert} defaultTipo={defaultTipo} submitLabel={submitLabel} cardId="formulario-correo" />
      </div>
    </section>
  );
}
