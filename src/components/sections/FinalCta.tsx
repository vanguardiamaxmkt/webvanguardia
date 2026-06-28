import type { FinalCTA } from "@/types/content";
import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink";
import { WaIcon } from "@/components/whatsapp/WaIcon";

export function FinalCta({ data }: { data: FinalCTA }) {
  return (
    <section className="final">
      <div className="wrap">
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        <WhatsAppLink className="btn btn-wa" location="cta-final">
          <WaIcon />
          {data.button}
        </WhatsAppLink>
      </div>
    </section>
  );
}
