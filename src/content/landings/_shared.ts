import type { Stat } from "@/types/content";

/** Stats strip shared by most landings. */
export const DEFAULT_STATS: Stat[] = [
  { n: "+25", l: "años de experiencia" },
  { n: "+10 mil", l: "tasaciones realizadas" },
  { n: "SBS", l: "empresa autenticada" },
  { n: "Nacional", l: "cobertura en todo el Perú" },
];

/** Lead-form bullets shared by most landings. */
export const DEFAULT_BULLETS = [
  "Respuesta el mismo día por WhatsApp",
  "Cotización personalizada según tu caso",
  "Atención en Lima, Callao y todo el Perú",
];
