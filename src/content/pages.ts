import type { LandingContent, ServiceContent } from "@/types/content";
import { hipotecaria } from "./landings/hipotecaria";
import { judicial } from "./landings/judicial";
import { activosFijos } from "./landings/activos-fijos";
import { empresas } from "./landings/empresas";
import { alquileres } from "./landings/alquileres";
import { vehiculos } from "./landings/vehiculos";
import { saneamientoInmobiliario } from "./landings/saneamiento-inmobiliario";
import { agricolas } from "./landings/agricolas";
import { obrasArte } from "./landings/obras-arte";
import { fiduciarias } from "./landings/fiduciarias";
import { tasacionesParaSeguros } from "./landings/tasaciones-para-seguros";
import { estudioViabilidad } from "./landings/proyectos-estudio-viabilidad";
import { proyeccionInmobiliaria } from "./landings/proyectos-proyeccion-inmobiliaria";
import { estudioItf } from "./landings/proyectos-estudio-itf";
import { embarcaciones } from "./servicios/embarcaciones";
import { auditoriaPlanos } from "./servicios/auditoria-planos";
import { impuestoPredial } from "./servicios/impuesto-predial";
import { supervisionObras } from "./servicios/supervision-obras";

/**
 * Registro unificado de páginas con su silo (carpeta de URL) y tipo de plantilla.
 * El silo agrupa por TEMA (SEO); el `kind` decide la plantilla (conversión vs SEO).
 * Así una misma URL puede albergar cualquiera de los dos tipos de contenido.
 */
export type Silo = "tasaciones" | "servicios";

export type PageEntry =
  | { kind: "landing"; silo: Silo; content: LandingContent }
  | { kind: "service"; silo: Silo; content: ServiceContent };

export const pages: PageEntry[] = [
  // ── Silo /tasaciones (keywords principales) ──────────────────────────────
  { kind: "landing", silo: "tasaciones", content: hipotecaria },
  { kind: "landing", silo: "tasaciones", content: judicial },
  { kind: "landing", silo: "tasaciones", content: activosFijos },
  { kind: "landing", silo: "tasaciones", content: empresas },
  { kind: "landing", silo: "tasaciones", content: alquileres },
  { kind: "landing", silo: "tasaciones", content: vehiculos },
  { kind: "service", silo: "tasaciones", content: embarcaciones },
  { kind: "service", silo: "tasaciones", content: impuestoPredial },
  { kind: "landing", silo: "tasaciones", content: agricolas },
  { kind: "landing", silo: "tasaciones", content: obrasArte },
  { kind: "landing", silo: "tasaciones", content: fiduciarias },
  { kind: "landing", silo: "tasaciones", content: tasacionesParaSeguros },
  // ── Silo /servicios (servicios complementarios) ──────────────────────────
  { kind: "landing", silo: "servicios", content: saneamientoInmobiliario },
  { kind: "service", silo: "servicios", content: auditoriaPlanos },
  { kind: "service", silo: "servicios", content: supervisionObras },
  { kind: "landing", silo: "servicios", content: estudioViabilidad },
  { kind: "landing", silo: "servicios", content: proyeccionInmobiliaria },
  { kind: "landing", silo: "servicios", content: estudioItf },
];

export const tasacionesPages = pages.filter((p) => p.silo === "tasaciones");
export const serviciosPages = pages.filter((p) => p.silo === "servicios");

export function findPage(silo: Silo, slug: string): PageEntry | null {
  return pages.find((p) => p.silo === silo && p.content.slug === slug) ?? null;
}

export function pagePath(p: PageEntry): string {
  return `/${p.silo}/${p.content.slug}`;
}

/** Datos breadcrumb del silo, para páginas de servicio. */
export const SILO_PARENT: Record<Silo, { name: string; href: string }> = {
  tasaciones: { name: "Tasaciones", href: "/tasaciones" },
  servicios: { name: "Servicios", href: "/servicios" },
};
