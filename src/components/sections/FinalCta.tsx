import type { FinalCTA } from "@/types/content";
import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink";
import { WaIcon } from "@/components/whatsapp/WaIcon";

export function FinalCta({ data, id }: { data: FinalCTA; id?: string }) {
  return (
    <section className="final" id={id}>
      <div className="wrap">
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        <WhatsAppLink className="btn btn-wa" location="cta-final">
          <WaIcon />
          {data.button}
        </WhatsAppLink>
        <p className="final-privacy">
          Al escribirnos aceptas el tratamiento de tus datos conforme a nuestra{" "}
          <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer">
            Política de Privacidad
          </a>
          .
        </p>
      </div>
    </section>
  );
}
