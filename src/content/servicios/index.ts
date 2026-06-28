import type { ServiceContent } from "@/types/content";
import { embarcaciones } from "./embarcaciones";
import { auditoriaPlanos } from "./auditoria-planos";
import { impuestoPredial } from "./impuesto-predial";
import { supervisionObras } from "./supervision-obras";

/** Ordered registry of SEO service pages, keyed by route slug. */
export const servicios: ServiceContent[] = [
  embarcaciones,
  auditoriaPlanos,
  impuestoPredial,
  supervisionObras,
];

export const serviciosBySlug: Record<string, ServiceContent> = Object.fromEntries(
  servicios.map((s) => [s.slug, s]),
);

export function getServicio(slug: string): ServiceContent | undefined {
  return serviciosBySlug[slug];
}
