import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink";
import { WaIcon } from "@/components/whatsapp/WaIcon";

/**
 * Llamada a la acción al final de cada artículo: invita a escribir a un asesor
 * por WhatsApp. El clic se mide como `whatsapp_click` con ubicación
 * `articulo-final` (igual que el resto de botones de WhatsApp).
 */
export function ArticleCta({ title }: { title: string }) {
  return (
    <aside className="article-cta" aria-label="Habla con un asesor">
      <div className="article-cta-text">
        <span className="article-cta-eyebrow">Atención por WhatsApp</span>
        <b>¿Tienes dudas sobre tu caso? Habla con un asesor</b>
        <p>
          Cuéntanos qué necesitas tasar y para qué. Un asesor de VanguardiaMax te orienta por
          WhatsApp y te envía el alcance y la cotización, sin compromiso.
        </p>
      </div>
      <WhatsAppLink
        className="btn btn-wa"
        location="articulo-final"
        message={`Hola VanguardiaMax, leí el artículo "${title}" y quiero hablar con un asesor.`}
      >
        <WaIcon />
        Escribir a un asesor
      </WhatsAppLink>
      <p className="article-cta-privacy">
        Al escribirnos aceptas el tratamiento de tus datos conforme a nuestra{" "}
        <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer">
          Política de Privacidad
        </a>
        .
      </p>
    </aside>
  );
}
