import type { LandingContent } from "@/types/content";
import { hipotecaria } from "./hipotecaria";
import { judicial } from "./judicial";
import { activosFijos } from "./activos-fijos";
import { alquileres } from "./alquileres";
import { empresas } from "./empresas";
import { vehiculos } from "./vehiculos";
import { saneamientoInmobiliario } from "./saneamiento-inmobiliario";

/** Ordered registry of paid-traffic landings, keyed by route slug. */
export const landings: LandingContent[] = [
  hipotecaria,
  judicial,
  activosFijos,
  alquileres,
  empresas,
  vehiculos,
  saneamientoInmobiliario,
];

export const landingsBySlug: Record<string, LandingContent> = Object.fromEntries(
  landings.map((l) => [l.slug, l]),
);

export function getLanding(slug: string): LandingContent | undefined {
  return landingsBySlug[slug];
}
