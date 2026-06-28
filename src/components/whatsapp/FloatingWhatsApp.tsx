import { WhatsAppLink } from "./WhatsAppLink";
import { WaIcon } from "./WaIcon";

/** Persistent floating WhatsApp button (bottom-right). */
export function FloatingWhatsApp() {
  return (
    <WhatsAppLink className="float-wa" ariaLabel="Escríbenos por WhatsApp" location="flotante">
      <WaIcon />
    </WhatsAppLink>
  );
}
