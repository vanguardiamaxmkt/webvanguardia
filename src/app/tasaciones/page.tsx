import type { Metadata } from "next";
import { tasacionesPages } from "@/content/pages";
import { SiloIndex } from "@/components/templates/SiloIndex";

export const metadata: Metadata = {
  title: "Tasaciones con validez legal en el Perú | VanguardiaMax",
  description:
    "Todas nuestras tasaciones: hipotecaria, judicial, de activos fijos, vehicular, de alquiler y de embarcaciones. Informes con valor comercial y de realización reconocidos por la SBS, bancos y juzgados.",
  alternates: { canonical: "/tasaciones" },
};

export default function TasacionesIndex() {
  return (
    <SiloIndex
      eyebrow="Tasaciones"
      heading="Tasaciones con validez legal para cada necesidad"
      intro="Elige el tipo de tasación que necesitas. Todos nuestros informes tienen sustento conforme al Reglamento Nacional de Tasaciones y son reconocidos por bancos, juzgados y notarías."
      current="Tasaciones"
      items={tasacionesPages}
      baseMessage="Hola VanguardiaMax, quiero información sobre sus tasaciones."
      segment="tasaciones-index"
    />
  );
}
