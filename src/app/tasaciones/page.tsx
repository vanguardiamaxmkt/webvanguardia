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
      items={tasacionesPages}
      baseMessage="Hola VanguardiaMax, quiero información sobre la tasación de mi inmueble."
      segment="tasaciones-index"
      seoContent={tasacionesIndex.seoContent}
      faq={tasacionesIndex.faq}
    />
  );
}
