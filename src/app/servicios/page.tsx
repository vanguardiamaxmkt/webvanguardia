import type { Metadata } from "next";
import { serviciosPages } from "@/content/pages";
import { SiloIndex } from "@/components/templates/SiloIndex";

export const metadata: Metadata = {
  title: "Servicios técnicos e inmobiliarios | VanguardiaMax",
  description:
    "Saneamiento inmobiliario, auditoría de planos, supervisión de obras, estudios de viabilidad e ITF para tu predio o proyecto. Cobertura nacional.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosIndex() {
  return (
    <SiloIndex
      eyebrow="Servicios"
      heading="Servicios técnicos e inmobiliarios"
      intro="Más allá de la tasación, te acompañamos a regularizar, auditar y supervisar tu patrimonio. Todos con validez técnica y cobertura nacional."
      current="Servicios"
      path="/servicios"
      items={serviciosPages}
      baseMessage="Hola VanguardiaMax, quiero información sobre sus servicios."
      segment="servicios-index"
    />
  );
}
