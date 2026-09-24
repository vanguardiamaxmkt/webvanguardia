import { site } from "@/content/site";

/**
 * Datos estructurados (JSON-LD) compartidos.
 *
 * La empresa se declara UNA sola vez, en el layout, con un identificador fijo
 * (`ORG_ID`). El resto de schemas (Service, Article…) la referencian con
 * `{ "@id": ORG_ID }` en vez de repetirla, para que buscadores y motores de IA
 * vean una única entidad coherente: quién es, dónde está y qué hace.
 */
export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;

/** Referencia a la empresa para usar como provider / publisher / author. */
export const ORG_REF = { "@type": "ProfessionalService", "@id": ORG_ID, name: site.name } as const;

/** Ficha de la empresa: ProfessionalService (subtipo de LocalBusiness). */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    taxID: site.ruc,
    description:
      "Empresa peruana de tasaciones y peritajes: tasación de inmuebles, judicial, hipotecaria, de activos fijos, vehicular y de empresas bajo NIIF, conforme al Reglamento Nacional de Tasaciones.",
    url: site.url,
    logo: `${site.url}/logo.svg`,
    image: `${site.url}/logo.svg`,
    telephone: site.phoneE164,
    email: site.email,
    priceRange: "S/ 300 – S/ 1 500",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Platinum Plaza I, C. Dean Valdivia 148",
      addressLocality: "San Isidro",
      addressRegion: "Lima",
      addressCountry: "PE",
    },
    areaServed: { "@type": "Country", name: "Perú" },
    knowsAbout: [
      "Tasación de inmuebles",
      "Tasación judicial",
      "Tasación hipotecaria",
      "Tasación de activos fijos",
      "Valoración NIIF / IFRS",
      "Reglamento Nacional de Tasaciones",
    ],
    sameAs: Object.values(site.social),
  };
}

/** El sitio web, publicado por la empresa. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: "es-PE",
    publisher: { "@id": ORG_ID },
  };
}

/** Un servicio concreto prestado por la empresa. */
export function serviceJsonLd(s: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
  /** Rango de precio en soles, solo si está verificado en el sitio. */
  price?: { low: number; high: number };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.serviceType,
    description: s.description,
    url: `${site.url}${s.path}`,
    provider: ORG_REF,
    areaServed: { "@type": "Country", name: "Perú" },
    ...(s.price && {
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "PEN",
        lowPrice: s.price.low,
        highPrice: s.price.high,
      },
    }),
  };
}

/**
 * FAQPage generado SIEMPRE desde las preguntas visibles de la página: Google
 * exige que el marcado coincida con lo que ve el usuario.
 */
export function faqPageJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Migas de pan a partir de una lista [nombre, ruta]. */
export function breadcrumbListJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path === "/" ? "" : it.path}`,
    })),
  };
}
