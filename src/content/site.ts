/**
 * Global site configuration. Single source of truth for brand, contact,
 * legal copy and the canonical production URL.
 */
export const site = {
  name: "VanguardiaMax",
  tagline: "Tasaciones Perú",
  url: "https://vanguardiamax.com",
  /** WhatsApp number in international format, digits only. */
  whatsappNumber: "51963561496",
  /** Phone for tel: links. */
  phoneE164: "+51963561496",
  phoneDisplay: "963 561 496",
  address: "Platinum Plaza I, C. Dean Valdivia 148, San Isidro",
  /** Google Tag Manager container id (snippet injected when set). */
  gtmId: "GTM-PKC382BQ",
  legal:
    "Tasaciones conforme al Reglamento Nacional de Tasaciones del Perú (R.M. Nº172-2016-VIVIENDA) y Resolución S.B.S. Nº11356-2008, con la finalidad de concluir el valor comercial y de realización de los bienes. © 2026 VanguardiaMax.",
} as const;

/** Top navigation shown on the home page (anchor links to home sections). */
export const homeNav = [
  { href: "/tasaciones", label: "Tasaciones" },
  { href: "/servicios", label: "Servicios" },
  { href: "/articulos", label: "Artículos" },
  { href: "#faq", label: "Preguntas" },
] as const;
