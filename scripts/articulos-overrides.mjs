/**
 * Metadatos revisados a mano para la migración del blog legacy.
 *
 * La clave es el `legacyId` del export de WordPress. Todo lo que no se declare
 * aquí lo deriva automáticamente `limpiar-articulos.mjs` desde el contenido.
 *
 *  - title / meta_title  -> título del artículo y title SEO (más corto)
 *  - meta_description    -> se recorta a 155 caracteres
 *  - draftReason         -> fuerza el estado "borrador" y explica por qué
 */

export const OVERRIDES = {
  /* ------------------------------ Tasaciones ------------------------------ */
  3805: {
    title: "Tasadores de terrenos: cómo determinar el valor de un terreno",
    meta_title: "Tasadores de terrenos: cómo determinar su valor",
    focus_keyword: "tasadores de terrenos",
    category: "Tasaciones",
    tags: "tasación de terrenos, valor del terreno, peritaje",
    excerpt:
      "Ubicación, zonificación, accesibilidad y topografía: los factores que definen el valor de un terreno y los métodos que aplica un tasador profesional.",
    meta_description:
      "Qué factores determinan el valor de un terreno y qué métodos usan los tasadores profesionales para lograr una valoración precisa en el Perú.",
  },

  3840: {
    title: "Cómo realizar una tasación inmobiliaria en tres pasos",
    meta_title: "Tasación inmobiliaria en 3 pasos",
    focus_keyword: "tasación inmobiliaria",
    category: "Tasaciones",
    tags: "tasación de inmuebles, análisis de mercado, informe de tasación",
    excerpt:
      "Los tres pasos de una tasación de inmuebles precisa: inspección detallada de la propiedad, análisis comparativo de mercado y elaboración del informe.",
    meta_description:
      "Inspección de la propiedad, análisis comparativo de mercado e informe pericial: los tres pasos de una tasación inmobiliaria precisa.",
  },

  4053: {
    title: "Tasaciones de inmuebles: guía completa para valoraciones precisas",
    meta_title: "Tasaciones de inmuebles: guía de valoración",
    focus_keyword: "tasaciones de inmuebles",
    category: "Tasaciones",
    tags: "tasación de inmuebles, valor de mercado, tasador profesional",
    excerpt:
      "Qué factores influyen en el valor de un inmueble, qué métodos de valoración existen y por qué conviene contratar a un tasador profesional.",
    meta_description:
      "Guía de tasación de inmuebles: factores que influyen en el valor, métodos de valoración y por qué contratar a un tasador profesional.",
  },

  4055: {
    title: "Tasaciones: todo lo que necesitas saber",
    meta_title: "Tasaciones: guía completa",
    focus_keyword: "tasaciones",
    category: "Tasaciones",
    tags: "tasaciones, tipos de tasación, tasador certificado",
    excerpt:
      "Qué es una tasación, qué tipos existen, cómo es el proceso y qué factores afectan al valor final de un bien.",
    meta_description:
      "Qué es una tasación, qué tipos existen, cómo es el proceso y qué factores afectan al valor final de un bien.",
    draftReason:
      "duplica a /tasaciones-de-inmuebles-guia-completa-para-valoraciones-precisas y el original quedó truncado en el punto 11.2",
  },

  5208: {
    title: "¿Cuánto cuesta tasar en el Perú? Lo que las tasadoras no te dicen",
    meta_title: "¿Cuánto cuesta una tasación en el Perú?",
    focus_keyword: "cuánto cuesta una tasación en Perú",
    category: "Tasaciones",
    tags: "precio de tasación, perito tasador, SBS",
    excerpt:
      "Cuánto cuesta tasar en el Perú, qué factores mueven el precio y cómo elegir un perito tasador acreditado ante la SBS y demás registros vigentes.",
    meta_description:
      "Cuánto cuesta una tasación en el Perú, qué factores mueven el precio y cómo elegir un perito tasador acreditado ante la SBS.",
  },

  /* --------------------------- Tasación judicial -------------------------- */
  5529: {
    title: "Tasación judicial: evaluación técnica para procesos legales en el Perú",
    meta_title: "Tasación judicial en el Perú: proceso y usos",
    focus_keyword: "tasación judicial",
    category: "Tasación judicial",
    tags: "tasación judicial, perito judicial, REPEJ",
    excerpt:
      "Qué es una tasación judicial, quién puede realizarla, cómo es el proceso pericial y en qué casos legales se exige en el Perú.",
    meta_description:
      "Qué es una tasación judicial, quién puede realizarla, cómo es el proceso pericial y en qué casos legales se exige en el Perú.",
  },

  5537: {
    title: "Tasación judicial: importancia, proceso y aplicaciones en el Perú",
    meta_title: "Tasación judicial: proceso y aplicaciones",
    focus_keyword: "tasación judicial",
    category: "Tasación judicial",
    tags: "tasación judicial, perito tasador, remate judicial",
    excerpt:
      "El rol de la tasación judicial en divorcios, herencias, embargos y expropiaciones, y las etapas del peritaje ante el Poder Judicial.",
    meta_description:
      "El rol de la tasación judicial en divorcios, herencias, embargos y expropiaciones, y las etapas del peritaje ante el Poder Judicial.",
    draftReason:
      "duplica a /tasacion-judicial-evaluacion-tecnica-para-procesos-legales-en-el-peru (mismo tema y misma keyword)",
  },

  /* -------------------------- Normativa contable -------------------------- */
  5512: {
    title: "¿Qué es la tasación de propiedades con IFRS (NIIF)?",
    meta_title: "Tasación de propiedades con NIIF / IFRS",
    focus_keyword: "tasación con IFRS",
    category: "Normativa contable",
    tags: "NIIF, IFRS, valor razonable, activos fijos",
    excerpt:
      "Cómo se valoran activos y pasivos a valor razonable según las NIIF, qué normas aplican (NIC 16, 40 y 41; NIIF 13) y el rol del tasador independiente.",
    meta_description:
      "Cómo se valoran activos y pasivos a valor razonable según NIIF/IFRS, qué normas aplican y cuál es el rol del tasador independiente.",
  },

  /* ------------------------ Inversión inmobiliaria ------------------------ */
  4074: {
    title: "¿Cuáles son los pasos para la construcción de un centro comercial?",
    meta_title: "Pasos para construir un centro comercial",
    focus_keyword: "construcción de un centro comercial",
    category: "Inversión inmobiliaria",
    tags: "inversión inmobiliaria, estudio de viabilidad, centro comercial",
    excerpt:
      "Del estudio de títulos al ITF: los estudios previos que respaldan la inversión y el desarrollo de un centro comercial.",
    meta_description:
      "Del estudio de títulos al ITF: los estudios previos que respaldan la inversión y el desarrollo de un centro comercial.",
  },
};

/** Categoría para las notas breves heredadas (entran como borrador). */
export const STUB_CATEGORY = {
  46: "Mercado inmobiliario",
  48: "Mercado inmobiliario",
  50: "Mercado inmobiliario",
  2402: "Guías",
  2403: "Noticias",
  2404: "Guías",
};
