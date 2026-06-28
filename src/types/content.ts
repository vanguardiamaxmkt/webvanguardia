/**
 * Shared content model for VanguardiaMax pages.
 *
 * Pages are data-driven: each landing/servicio is a typed object consumed by a
 * shared page component. Adding a new page = adding a new content file + registry
 * entry, no new layout code.
 */

/** Icon keys map to the inline SVG set in `components/ui/Icon.tsx`. */
export type IconKey =
  | "shield"
  | "star"
  | "check"
  | "bank"
  | "house"
  | "gavel"
  | "doc"
  | "building"
  | "file-check"
  | "ship"
  | "ruler";

export interface CTAButton {
  /** Visible label. */
  label: string;
  /**
   * When set, renders a WhatsApp deep-link (UTM-aware) instead of an anchor.
   * The text is prefilled into the chat.
   */
  whatsapp?: boolean;
  /** Anchor / route href for non-WhatsApp buttons. */
  href?: string;
}

export interface TrustItem {
  icon: IconKey;
  label: string;
}

export interface Stat {
  n: string;
  l: string;
}

/** Landing "certificate" hero card. */
export interface CertCard {
  kind: "cert";
  title: string;
  subtitle: string;
  rows: { k: string; v: string }[];
  /** Text wrapped around the circular seal. */
  sealText: string;
  foot: string;
}

/** Servicio "facts" hero card. */
export interface FactsCard {
  kind: "facts";
  title: string;
  rows: { k: string; v: string }[];
}

export interface Benefit {
  num: string;
  title: string;
  body: string;
}

export interface Step {
  num: string;
  title: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FormSelect {
  type: "select";
  name: string;
  label: string;
  options: string[];
}

export interface FormInput {
  type: "text" | "tel";
  name: string;
  label: string;
  placeholder?: string;
}

export type FormField = FormSelect | FormInput;

export interface LeadForm {
  /** Left-column selling points. */
  bullets: string[];
  fields: FormField[];
}

export interface FinalCTA {
  title: string;
  body: string;
  button: string;
}

export interface RelatedCard {
  tag: string;
  title: string;
  body: string;
  href: string;
}

export interface RelatedSection {
  title: string;
  intro: string;
  cards: RelatedCard[];
  /** "También: …" inline links. */
  moreLinks?: { label: string; href: string }[];
}

/** Rich-text block for servicio prose sections. */
export type ProseBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; html: string }
  | { type: "ul"; items: string[] };

export interface PageMeta {
  title: string;
  description: string;
  /** Canonical path, e.g. "/servicios/embarcaciones". */
  canonical?: string;
}

export interface HeroContent {
  eyebrow: string;
  /** Plain heading; the part to italicize/accent goes in `headingAccent`. */
  heading: string;
  headingAccent?: string;
  sub: string;
  primaryCta: CTAButton;
  secondaryCta?: CTAButton;
  trust: TrustItem[];
}

/** WhatsApp prefilled-message config shared by all CTAs on a page. */
export interface WhatsAppConfig {
  /** Base message prefilled into WhatsApp on simple CTA clicks. */
  baseMessage: string;
  /** Attribution segment label used in dataLayer + origin tag. */
  segment: string;
}

/** A paid-traffic landing page. */
export interface LandingContent {
  slug: string;
  meta: PageMeta;
  hero: HeroContent;
  heroCard: CertCard;
  stats: Stat[];
  pain?: { eyebrow: string; heading: string; body: string };
  benefits: { eyebrow: string; heading: string; items: Benefit[] };
  steps: { eyebrow: string; heading: string; items: Step[] };
  /** Bloque de contenido extenso para SEO (renderizado como prose). */
  seoContent?: ProseBlock[];
  form: LeadForm;
  faq: { items: FaqItem[] };
  finalCta: FinalCTA;
  whatsapp: WhatsAppConfig;
}

/** An SEO service page. */
export interface ServiceContent {
  slug: string;
  meta: PageMeta;
  breadcrumbLabel: string;
  hero: HeroContent;
  heroCard: FactsCard;
  stats: Stat[];
  prose: ProseBlock[];
  benefits: { eyebrow: string; heading: string; items: Benefit[] };
  faq: { heading: string; items: FaqItem[] };
  related: RelatedSection;
  finalCta: FinalCTA;
  whatsapp: WhatsAppConfig;
  /** JSON-LD objects injected verbatim into the page head. */
  jsonLd: Record<string, unknown>[];
}
