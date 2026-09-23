import type { FaqItem, ProseBlock } from "@/types/content";

/**
 * Índice /tasaciones. Destino asignado al grupo de búsquedas "tasación de
 * inmuebles / tasador de inmuebles" (paso 2 SEO, sept. 2026: 400 impresiones
 * en posición 5,8 con 1 clic y sin página propia; ver seo/paso-2-2026-09.md).
 *
 * Solo se afirma lo que ya está verificado en el sitio (seo/brief.md):
 * rango de precio, entrega express en 24 h, documentos, registros y cobertura.
 */
export const tasacionesIndex = {
  meta: {
    title: "Tasación de inmuebles en Lima y todo el Perú | VanguardiaMax",
    description:
      "Tasadores de inmuebles certificados en Lima y todo el Perú: casas, departamentos, terrenos y locales. Informes con validez ante bancos, juzgados y la SBS.",
  },
  eyebrow: "Tasadores de inmuebles certificados",
  heading: "Tasación de inmuebles en Lima y todo el Perú",
  // Corto a propósito: las tarjetas deben quedar a la vista sin hacer scroll.
  intro:
    "Casas, departamentos, terrenos y locales —también vehículos, maquinaria y activos— con validez ante bancos, juzgados, notarías y la SBS. Elige para qué necesitas tu tasación:",

  seoContent: [
    { type: "h2", text: "¿Qué es una tasación de inmuebles?" },
    {
      type: "p",
      html: "Una <b>tasación de inmuebles</b> es el informe técnico que determina cuánto vale una propiedad. La elabora un perito tasador luego de inspeccionar el inmueble y analizar el mercado, conforme al <b>Reglamento Nacional de Tasaciones</b> del Perú. El informe expresa el <b>valor comercial</b> (lo que pagaría el mercado), el <b>valor de realización</b> (el que usa el banco para una venta rápida) y, cuando se requiere, el <b>valor asegurable</b>.",
    },
    {
      type: "p",
      html: "La finalidad define el tipo de informe: no es lo mismo tasar una vivienda para un <a href='/tasaciones/hipotecaria'>crédito hipotecario</a> que para una herencia o un proceso judicial. Por eso te orientamos primero sobre el documento correcto para tu caso.",
    },
    { type: "h2", text: "Tasadores de inmuebles certificados en Lima y todo el Perú" },
    {
      type: "p",
      html: "Nuestros <b>tasadores de inmuebles</b> son ingenieros y arquitectos colegiados, inscritos en los registros que exige cada trámite: el <b>REPEV</b> de la SBS para créditos y garantías, y el <b>REPEJ</b> del Poder Judicial para peritajes. Con más de 25 años de experiencia, atendemos en <b>Lima, Callao y provincias</b>, con equipos descentralizados en todo el Perú.",
    },
    { type: "h2", text: "Qué inmuebles tasamos" },
    {
      type: "ul",
      items: [
        "<b>Casas y departamentos (vivienda):</b> para <a href='/tasaciones/hipotecaria'>crédito hipotecario</a>, compraventa, herencias o divorcios con <a href='/tasaciones/judicial'>tasación judicial</a>.",
        "<b>Terrenos urbanos y agrícolas:</b> lotes, predios rústicos y <a href='/tasaciones/agricolas'>fundos agrícolas</a>.",
        "<b>Locales comerciales, oficinas y almacenes:</b> para garantías, compraventa o para fijar la renta con una <a href='/tasaciones/alquiler'>tasación de alquiler</a>.",
        "<b>Edificios, plantas industriales y proyectos inmobiliarios:</b> incluidos los <a href='/tasaciones/activos-fijos'>activos fijos</a> de empresas.",
      ],
    },
    { type: "h2", text: "¿Cuánto cuesta una tasación de inmuebles?" },
    {
      type: "p",
      html: "En el Perú, una tasación de inmuebles cuesta aproximadamente entre <b>S/ 300 y S/ 1 500</b>. El precio depende del tipo de inmueble, su ubicación y la finalidad del informe. Te damos una cotización exacta el mismo día; si quieres entender qué mueve el precio, lee <a href='/articulos/precio-de-una-tasacion-cuanto-cuesta-tasar-en-peru-lo-que-las-tasadoras-no-te-dicen'>cuánto cuesta tasar en el Perú</a>.",
    },
    { type: "h2", text: "Documentos para tasar un inmueble" },
    {
      type: "ul",
      items: [
        "Copia literal de la partida registral o título de propiedad.",
        "PU y HR (declaración del impuesto predial).",
        "Planos del inmueble, si los tienes.",
        "Documentos que acrediten la titularidad.",
      ],
    },
    {
      type: "p",
      html: "Te confirmamos la lista exacta según tu caso por WhatsApp antes de la inspección.",
    },
  ] satisfies ProseBlock[],

  faq: {
    heading: "Preguntas frecuentes sobre la tasación de inmuebles",
    items: [
      {
        q: "¿Qué es una tasación de inmuebles?",
        a: "Es el informe técnico que determina el valor de una propiedad —valor comercial, de realización y, si se requiere, asegurable—, elaborado por un perito tasador conforme al Reglamento Nacional de Tasaciones del Perú.",
      },
      {
        q: "¿Quién puede ser tasador de inmuebles en el Perú?",
        a: "Un ingeniero o arquitecto colegiado y habilitado. Según la finalidad se exige además estar inscrito en registros como el REPEV de la SBS (créditos y garantías) o el REPEJ del Poder Judicial (peritajes judiciales).",
      },
      {
        q: "¿Cuánto cuesta una tasación de inmuebles?",
        a: "Aproximadamente entre S/ 300 y S/ 1 500, según el tipo de inmueble, su ubicación y la finalidad del informe. Te damos la cotización exacta el mismo día.",
      },
      {
        q: "¿Cuánto demora una tasación de inmuebles?",
        a: "La tasación hipotecaria express se entrega en 24 horas. En otros informes el plazo depende del tipo de inmueble y la finalidad; te lo confirmamos al cotizar.",
      },
      {
        q: "¿Qué documentos necesito para tasar mi inmueble?",
        a: "Generalmente copia literal o título de propiedad, PU y HR, planos y cualquier documento que acredite la titularidad. Te indicamos la lista exacta según tu caso.",
      },
      {
        q: "¿Tasan inmuebles fuera de Lima?",
        a: "Sí. Tenemos cobertura nacional: Lima, Callao y provincias de todo el Perú.",
      },
    ] satisfies FaqItem[],
  },
};
