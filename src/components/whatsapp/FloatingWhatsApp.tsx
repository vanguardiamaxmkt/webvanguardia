import { WizardLink } from "./WizardLink";
import { WhatsAppLink } from "./WhatsAppLink";
import { WaIcon } from "./WaIcon";

/**
 * Botón flotante persistente (abajo a la derecha).
 * - Con `target` (páginas con formulario): lleva al wizard para evitar clics
 *   automáticos de bots; el chat se abre al enviar el formulario.
 * - Sin `target` (páginas sin formulario): abre WhatsApp directo.
 */
export function FloatingWhatsApp({ target }: { target?: string }) {
  if (target) {
    return (
      <WizardLink target={target} className="float-wa" ariaLabel="Cotiza tu tasación">
        <WaIcon />
      </WizardLink>
    );
  }
  return (
    <WhatsAppLink className="float-wa" ariaLabel="Escríbenos por WhatsApp" location="flotante">
      <WaIcon />
    </WhatsAppLink>
  );
}
