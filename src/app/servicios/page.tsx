import type { Metadata } from "next";
import { serviciosPages } from "@/content/pages";
import { SiloIndex } from "@/components/templates/SiloIndex";

export const metadata: Metadata = {
  title: "Servicios técnicos e inmobiliarios | VanguardiaMax",
  description:
    "Servicios complementarios de VanguardiaMax: saneamiento inmobiliario, auditoría de planos, impuesto predial y municipal, y supervisión de obras. Cobertura nacional con peritos certificados.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosIndex() {
  return (
    <SiloIndex
      eyebrow="Servicios"
      heading="Servicios técnicos e inmobiliarios"
      intro="Más allá de la tasación, te acompañamos a regularizar, auditar y supervisar tu patrimonio. Todos con validez técnica y cobertura nacional."
      current="Servicios"
      items={serviciosPages}
      baseMessage="Hola VanguardiaMax, quiero información sobre sus servicios."
      segment="servicios-index"
    />
  );
}
