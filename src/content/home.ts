import type { Benefit, FaqItem, FinalCTA, FormField, Stat } from "@/types/content";

export interface SegmentCard {
  /** SVG path `d` strings rendered as stroked icons. */
  iconPaths: string[];
  tag: string;
  title: string;
  body: string;
  href: string;
}

export const home = {
  meta: {
    title:
      "Tasaciones Inmobiliarias con Validez Legal en el Perú | VanguardiaMax",
    description:
      "Tasación de inmuebles con validez legal en todo el Perú: crédito y garantía, compraventa, judicial, herencias, divorcios, municipal y empresarial. Peritos certificados, informes reconocidos por la SBS. Consulta por WhatsApp.",
    canonical: "/",
  },
  hero: {
    eyebrow: "Tasaciones inmobiliarias · todo el Perú",
    heading: "Conoce el valor real de tu inmueble ",
    headingAccent: "con respaldo legal",
    sub: "Tasaciones con valor comercial y de realización conforme a norma, reconocidas por bancos, juzgados, notarías y la SBS. Para crédito, compraventa, herencias, divorcios o trámites: el documento correcto para tu caso.",
    primaryLabel: "Solicita tu tasación",
    secondaryLabel: "Ver servicios",
    trust: [
      { icon: "shield" as const, label: "Autenticado por la SBS" },
      { icon: "star" as const, label: "+25 años de experiencia" },
      { icon: "check" as const, label: "Cobertura nacional" },
    ],
  },
  cert: {
    title: "Informe de Tasación",
    subtitle: "Valor comercial · Valor de realización",
    rows: [
      { k: "Valor comercial", v: "S/ ———" },
      { k: "Valor de realización", v: "S/ ———" },
    ],
    sealText: "TASACIÓN CERTIFICADA · SBS · REGLAMENTO NACIONAL · ",
    foot: "Reconocido por bancos, juzgados y notarías · SBS",
  },
  stats: [
    { n: "+25", l: "años de experiencia" },
    { n: "+10 mil", l: "tasaciones realizadas" },
    { n: "SBS", l: "empresa autenticada" },
    { n: "Nacional", l: "cobertura en todo el Perú" },
  ] satisfies Stat[],
  segmentsIntro: {
    eyebrow: "Para qué necesitas tu tasación",
    heading: "Un informe distinto para cada objetivo",
    body: "Elige el motivo de tu tasación y te llevamos a la atención especializada para tu caso. Todos nuestros informes tienen validez legal y sustento conforme al Reglamento Nacional de Tasaciones.",
  },
  segments: [
    {
      iconPaths: ["M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6"],
      tag: "Crédito · Financiamiento",
      title: "Crédito y garantía hipotecaria",
      body: "Para préstamos, refinanciamiento o financiar con tu inmueble como garantía. Valor comercial y de realización que el banco acepta, en modalidad express.",
      href: "/tasaciones/hipotecaria",
    },
    {
      iconPaths: [
        "M12 3v18M5 7h14M7 7l-3 7a3 3 0 006 0L7 7zm10 0l-3 7a3 3 0 006 0l-3-7zM6 21h12",
      ],
      tag: "Herencias · Divorcios · Juicios",
      title: "Judicial y pericial",
      body: "Peritaje con validez legal para sucesiones, división de bienes, procesos judiciales y gestión notarial. Reconocido por juzgados.",
      href: "/tasaciones/judicial",
    },
    {
      iconPaths: [
        "M3 21h18M4 21V8h7v13M11 21V3h9v18",
        "M7 11v0M7 15v0M15 7v0M15 11v0M15 15v0",
      ],
      tag: "Empresas · Activos",
      title: "Inventario Activos Fijos",
      body: "Valorización de maquinaria, equipos y plantas para estados financieros (NIIF), seguros, garantías o reestructuración. Soporte para tu RUC.",
      href: "/tasaciones/activos-fijos",
    },
    {
      iconPaths: [
        "M3 17V7h11v10M14 10h4l3 3v4h-7",
        "M5.5 17a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0M16.5 17a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0",
      ],
      tag: "Vehículos · Maquinaria",
      title: "Vehículos y maquinaria",
      body: "Valor comercial y de realización de autos, camiones, maquinaria pesada y activos para crédito con garantía, seguros o venta.",
      href: "/tasaciones/vehicular",
    },
    {
      iconPaths: ["M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9z", "M9 21v-7h6v7"],
      tag: "Arriendo · Renta",
      title: "Alquileres y renta",
      body: "Estudio de merced conductiva y valor de alquiler de mercado para arrendar al precio justo, renovar contrato o respaldar un proceso.",
      href: "/tasaciones/alquiler",
    },
    {
      iconPaths: ["M14 2H6v20h12V6z", "M14 2v4h4", "M9 14l2 2 4-4"],
      tag: "Regularización · SUNARP",
      title: "Saneamiento físico-legal",
      body: "Independización, prescripción adquisitiva, regularización de fábrica e inscripción en SUNARP para dejar tu predio con titularidad clara.",
      href: "/servicios/saneamiento-inmobiliario",
    },
  ] satisfies SegmentCard[],
  assets: {
    eyebrow: "Bienes que tasamos",
    heading: "Cualquier inmueble, en cualquier región",
    body: "Si tienes un bien con valor, lo tasamos. Cuéntanos qué necesitas y te orientamos el mismo día.",
    chips: [
      "Casa",
      "Departamento",
      "Terreno",
      "Local comercial",
      "Oficina",
      "Edificio",
      "Almacén / industrial",
      "Proyecto inmobiliario",
    ],
  },
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "La autoridad que tu decisión necesita",
    items: [
      {
        num: "01",
        title: "Validez legal",
        body: "Informes con sustento técnico reconocidos por bancos, juzgados, notarías e instituciones del Estado.",
      },
      {
        num: "02",
        title: "Peritos certificados",
        body: "Profesionales con especialización y experiencia, con doble visado conforme al Reglamento Nacional de Tasaciones.",
      },
      {
        num: "03",
        title: "Cobertura nacional",
        body: "Equipos descentralizados en Lima, Callao, provincias y proyectos en todo el Perú.",
      },
    ] satisfies Benefit[],
  },
  process: {
    eyebrow: "Proceso",
    heading: "Tasamos en cinco pasos precisos",
    body: "Un método ordenado y sin demoras, desde tu primer mensaje hasta el informe firmado con validez legal.",
    steps: [
      {
        num: "1",
        title: "Solicitud y orientación",
        body: "Nos cuentas el inmueble y el motivo. Te orientamos el mismo día por WhatsApp.",
      },
      {
        num: "2",
        title: "Revisión documental",
        body: "Validamos copia literal, PU, HR, planos y la titularidad del bien.",
      },
      {
        num: "3",
        title: "Inspección en sitio",
        body: "Un perito visita el inmueble, mide y registra su estado y características.",
      },
      {
        num: "4",
        title: "Análisis y valuación",
        body: "Calculamos el valor comercial y de realización conforme al Reglamento Nacional de Tasaciones.",
      },
      {
        num: "5",
        title: "Informe homologado",
        body: "Recibes tu informe firmado, con validez legal ante banca, juzgados y el Estado.",
      },
    ],
  },
  homologacion: {
    eyebrow: "Homologación",
    heading: "Tasaciones homologadas, útiles ante el Estado y la banca",
    body: "Nuestros peritos están inscritos en los registros oficiales: REPEV de la SBS y REPEJ del Poder Judicial. Por eso el informe no es una opinión más, sino un documento valuatorio reconocido para crédito, juicios, trámites y auditorías.",
  },
  form: {
    bullets: [
      "Respuesta el mismo día por WhatsApp",
      "Cotización personalizada según tu inmueble",
      "Atención en Lima, Callao y todo el Perú",
    ],
    fields: [
      { type: "text", name: "nombre", label: "Nombre", placeholder: "Tu nombre" },
      {
        type: "text",
        name: "distrito",
        label: "Distrito o ciudad del inmueble",
        placeholder: "Ej. Surco, San Isidro, Callao, Arequipa…",
      },
      {
        type: "select",
        name: "tipo",
        label: "Tipo de inmueble o bien",
        options: [
          "Casa",
          "Departamento",
          "Terreno",
          "Local comercial",
          "Oficina",
          "Edificio",
          "Otro",
        ],
      },
      {
        type: "select",
        name: "servicio",
        label: "¿Para qué necesitas la tasación?",
        options: [
          "Crédito / garantía hipotecaria",
          "Compraventa / valor de mercado",
          "Judicial / pericial (herencia, divorcio, juicio, notaría)",
          "Municipal / tributaria",
          "Empresarial / contable",
          "Saneamiento físico-legal",
          "Aún no lo sé / necesito orientación",
        ],
      },
      {
        type: "tel",
        name: "telefono",
        label: "Teléfono / WhatsApp",
        placeholder: "9XX XXX XXX",
      },
    ] satisfies FormField[],
  },
  faq: {
    items: [
      {
        q: "¿La tasación tiene validez legal?",
        a: "Sí. Nuestras tasaciones tienen validez legal y son reconocidas por instituciones financieras, judiciales y gubernamentales, con sustento conforme al Reglamento Nacional de Tasaciones del Perú.",
      },
      {
        q: "¿Qué tipos de tasación realizan?",
        a: "Atendemos tasaciones para crédito y garantía, compraventa, procesos judiciales y notariales (herencias y divorcios), trámites municipales y tributarios, valorización empresarial y saneamiento físico-legal. Elige tu caso en la sección de servicios y te llevamos a la atención especializada.",
      },
      {
        q: "¿Atienden en provincias o solo en Lima?",
        a: "Tenemos cobertura nacional. Atendemos Lima Metropolitana, Callao y proyectos en todo el Perú con equipos descentralizados.",
      },
      {
        q: "¿Qué documentos necesito?",
        a: "Generalmente copia literal o título de propiedad, PU y HR, planos y cualquier documento que acredite la titularidad. Te indicamos la lista exacta según tu caso por WhatsApp.",
      },
      {
        q: "¿Cuánto demora y cuánto cuesta?",
        a: "Depende del tipo de bien, la ubicación y la urgencia. Escríbenos con los datos del caso y te damos plazo y cotización personalizada.",
      },
      {
        q: "¿Por cuánto tiempo es válida?",
        a: "Las tasaciones tienen validez de 1 año; pasado ese plazo conviene actualizar el valor a las condiciones del mercado.",
      },
    ] satisfies FaqItem[],
  },
  finalCta: {
    title: "Dale respaldo técnico a tu decisión",
    body: "Cuéntanos el tipo de inmueble y el motivo por WhatsApp y te orientamos hoy.",
    button: "Solicita tu tasación",
  } satisfies FinalCTA,
  whatsapp: {
    baseMessage:
      "Hola VanguardiaMax, necesito una *Tasación Inmobiliaria* y quiero orientación.",
    segment: "home-tasaciones",
  },
};
