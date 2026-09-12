/**
 * Opciones del campo "Tipo de tasación" del formulario del hero (home).
 * Reflejan las páginas del silo /tasaciones. Se usa tanto en el <select> del
 * cliente como en la validación del endpoint /api/contacto.
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
  "Impuesto predial",
  "Otra",
] as const;
