/**
 * Opciones del campo "Tipo de tasación" del formulario del hero (home y
 * páginas del silo /tasaciones) y del formulario de /contacto. Reflejan las
 * páginas del silo. Se usa tanto en el <select> del cliente como en la
 * validación del endpoint /api/contacto.
 */
export const TIPOS_TASACION = [
  "Hipotecaria",
  "Judicial y pericial",
  "Activos fijos",
  "Empresas e inventario",
  "Alquileres y renta",
  "Vehículos y maquinaria",
  "Embarcaciones",
  "Predios agrícolas",
  "Obras de arte",
  "Fiduciaria",
  "Para seguros",
  "Hoteles y resorts",
  "Impuesto predial",
  "Otra",
] as const;

export type TipoTasacion = (typeof TIPOS_TASACION)[number];

/**
 * Tipo que el formulario del hero trae preseleccionado en cada página del
 * silo /tasaciones (clave = slug de la página).
 */
export const TIPO_POR_SLUG: Record<string, TipoTasacion> = {
  hipotecaria: "Hipotecaria",
  judicial: "Judicial y pericial",
  "activos-fijos": "Activos fijos",
  empresas: "Empresas e inventario",
  alquiler: "Alquileres y renta",
  vehicular: "Vehículos y maquinaria",
  embarcaciones: "Embarcaciones",
  agricolas: "Predios agrícolas",
  "obras-arte": "Obras de arte",
  fiduciarias: "Fiduciaria",
  "para-seguros": "Para seguros",
  hoteles: "Hoteles y resorts",
  "impuesto-predial": "Impuesto predial",
};
