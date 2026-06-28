import type { Stat } from "@/types/content";
import { site } from "@/content/site";

/** Stats strip shared by servicio pages that use the default credentials. */
export const SERVICE_STATS_DEFAULT: Stat[] = [
  { n: "+25", l: "años de experiencia" },
  { n: "+10 mil", l: "tasaciones realizadas" },
  { n: "SBS", l: "empresa autenticada" },
  { n: "Nacional", l: "cobertura en todo el Perú" },
];

/** Organization block reused across all servicio JSON-LD Service schemas. */
export const ORG_PROVIDER = {
  "@type": "Organization",
  name: site.name,
  telephone: site.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Platinum Plaza I, C. Dean Valdivia 148",
    addressLocality: "San Isidro",
    addressRegion: "Lima",
    addressCountry: "PE",
  },
} as const;

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
