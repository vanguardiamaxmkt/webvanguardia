import type { Metadata } from "next";
import { tasacionesPages } from "@/content/pages";
import { tasacionesIndex } from "@/content/tasaciones-index";
import { SiloIndex } from "@/components/templates/SiloIndex";

export const metadata: Metadata = {
  title: tasacionesIndex.meta.title,
  description: tasacionesIndex.meta.description,
  alternates: { canonical: "/tasaciones" },
};

export default function TasacionesIndex() {
  return (
    <SiloIndex
      eyebrow={tasacionesIndex.eyebrow}
      heading={tasacionesIndex.heading}
      intro={tasacionesIndex.intro}
      current="Tasaciones"
      path="/tasaciones"
      items={tasacionesPages}
      baseMessage="Hola VanguardiaMax, quiero información sobre la tasación de mi inmueble."
      segment="tasaciones-index"
      seoContent={tasacionesIndex.seoContent}
      faq={tasacionesIndex.faq}
      service={{
        name: tasacionesIndex.heading,
        serviceType: "Tasación de inmuebles",
        description: tasacionesIndex.meta.description,
        path: "/tasaciones",
        // Rango verificado en el sitio (artículo de precios, seo/brief.md).
        price: { low: 300, high: 1500 },
      }}
    />
  );
}
