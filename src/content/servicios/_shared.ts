import type { Stat } from "@/types/content";
import { site } from "@/content/site";
import { ORG_REF } from "@/lib/schema";

/** Stats strip shared by servicio pages that use the default credentials. */
export const SERVICE_STATS_DEFAULT: Stat[] = [
  { n: "+25", l: "años de experiencia" },
  { n: "+10 mil", l: "tasaciones realizadas" },
  { n: "SBS", l: "empresa autenticada" },
  { n: "Nacional", l: "cobertura en todo el Perú" },
];

/**
 * Proveedor de los Service JSON-LD: referencia a la ficha única de la empresa
 * que el layout publica en todas las páginas (src/lib/schema.ts).
 */
export const ORG_PROVIDER = ORG_REF;

/** Build the BreadcrumbList JSON-LD for a servicio/tasación page. */
export function breadcrumbJsonLd(
  label: string,
  path: string,
  parent: { name: string; href: string } = { name: "Servicios", href: "/servicios" },
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: parent.name,
        item: `${site.url}${parent.href}`,
      },
      { "@type": "ListItem", position: 3, name: label, item: `${site.url}${path}` },
    ],
  };
}
