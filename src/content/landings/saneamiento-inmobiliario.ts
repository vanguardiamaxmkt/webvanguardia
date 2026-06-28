import type { LandingContent } from "@/types/content";

export const saneamientoInmobiliario: LandingContent = {
  slug: "saneamiento-inmobiliario",
  meta: {
    title: "Saneamiento Inmobiliario y Físico-Legal | VanguardiaMax",
    description:
      "Saneamiento físico-legal de predios: independización, prescripción adquisitiva, regularización de fábrica, rectificación de áreas e inscripción en SUNARP. Deja tu propiedad inscrita y con titularidad clara. Consulta por WhatsApp.",
    canonical: "/servicios/saneamiento-inmobiliario",
  },
  hero: {
    eyebrow: "Saneamiento inmobiliario",
    heading: "Deja tu propiedad saneada ",
    headingAccent: "e inscrita en SUNARP",
    sub: "Regularizamos la situación física y legal de tu predio: independización, prescripción adquisitiva, regularización de fábrica y rectificación de áreas. Titularidad clara y lista para vender, heredar o financiar.",
    primaryCta: { label: "Solicita tu saneamiento", whatsapp: true },
    secondaryCta: { label: "Cotiza por formulario", href: "#cotizar" },
    trust: [
      { icon: "shield", label: "Inscripción en SUNARP" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Equipo técnico-legal" },
    ],
  },
  heroCard: {
    kind: "cert",
    title: "Ficha Registral",
    subtitle: "Predio inscrito · Titularidad saneada",
    rows: [
      { k: "Estado registral", v: "Inscrito" },
      { k: "Cargas y gravámenes", v: "Levantados" },
    ],
    sealText: "SANEAMIENTO REGISTRAL · SUNARP · LEY 27157 · ",
    foot: "Inscrito en SUNARP · Titularidad clara",
  },
  stats: [
    { n: "+25", l: "años de experiencia" },
    { n: "+10 mil", l: "predios saneados" },
    { n: "SUNARP", l: "inscripción registral" },
    { n: "Nacional", l: "cobertura en todo el Perú" },
  ],
  pain: {
    eyebrow: "El problema",
    heading: "Sin saneamiento, tu predio no se puede vender, heredar ni financiar",
    body: "Un predio sin inscribir, con áreas que no coinciden o con fábrica no declarada queda bloqueado para cualquier operación. Regularizamos su situación física y legal hasta dejarlo inscrito en SUNARP con titularidad clara.",
  },
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "Tu predio en regla, sin trámites a medias",
    items: [
      {
        num: "01",
        title: "Titularidad clara",
        body: "Dejamos el predio inscrito a tu nombre en SUNARP, libre de observaciones y listo para operar.",
      },
      {
        num: "02",
        title: "Equipo técnico-legal",
        body: "Peritos y abogados que resuelven el trámite de principio a fin, sin que tengas que dar vueltas.",
      },
      {
        num: "03",
        title: "Cobertura nacional",
        body: "Saneamiento de predios urbanos y rústicos en Lima, Callao y todo el Perú.",
      },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    heading: "Tres pasos, sin vueltas",
    items: [
      {
        num: "1",
        title: "Cuéntanos del predio",
        body: "Tipo de predio y situación (sin inscribir, áreas que no coinciden, fábrica sin declarar). Te orientamos el mismo día.",
      },
      {
        num: "2",
        title: "Diagnóstico físico-legal",
        body: "Revisamos partida registral, planos y documentos, y definimos la ruta de saneamiento que corresponde.",
      },
      {
        num: "3",
        title: "Inscripción en SUNARP",
        body: "Gestionamos el trámite hasta dejar tu predio inscrito, con titularidad clara y libre de observaciones.",
      },
    ],
  },
  form: {
    bullets: [
      "Respuesta el mismo día por WhatsApp",
      "Diagnóstico inicial de tu caso",
      "Atención en Lima, Callao y todo el Perú",
    ],
    fields: [
      { type: "text", name: "nombre", label: "Nombre", placeholder: "Tu nombre" },
      {
        type: "text",
        name: "distrito",
        label: "Distrito del predio",
        placeholder: "Ej. Surco, San Isidro, Callao…",
      },
      {
        type: "select",
        name: "tipo",
        label: "Tipo de predio",
        options: [
          "Casa",
          "Departamento",
          "Terreno urbano",
          "Terreno rústico",
          "Local comercial",
          "Otro",
        ],
      },
      {
        type: "select",
        name: "situacion",
        label: "Situación / trámite",
        options: [
          "Predio sin inscribir",
          "Prescripción adquisitiva",
          "Regularización de fábrica",
          "Independización / subdivisión",
          "Rectificación de áreas",
          "Levantamiento de cargas",
          "No estoy seguro",
        ],
      },
      {
        type: "tel",
        name: "telefono",
        label: "Teléfono / WhatsApp",
        placeholder: "9XX XXX XXX",
      },
    ],
  },
  faq: {
    items: [
      {
        q: "¿Qué es el saneamiento físico-legal?",
        a: "Es el proceso de regularizar la situación física (áreas, linderos, fábrica) y legal (titularidad e inscripción) de un predio hasta dejarlo inscrito en SUNARP a nombre del propietario.",
      },
      {
        q: "¿Sirve si mi propiedad no está inscrita?",
        a: "Sí. Según el caso gestionamos prescripción adquisitiva, título supletorio o primera inscripción de dominio para que el predio acceda al registro.",
      },
      {
        q: "¿Pueden regularizar una construcción no declarada?",
        a: "Sí. Tramitamos la regularización y declaratoria de fábrica conforme a la Ley Nº 27157, para que tu edificación quede inscrita.",
      },
      {
        q: "¿Qué documentos necesito?",
        a: "Generalmente copia literal o documento de propiedad, planos, autovalúo (PU/HR) y DNI. Te indicamos la lista exacta según tu trámite por WhatsApp.",
      },
      {
        q: "¿Cuánto demora y cuánto cuesta?",
        a: "Depende del tipo de trámite, la situación del predio y la entidad que interviene. Escríbenos con el detalle del caso y te damos plazo y cotización personalizada.",
      },
      {
        q: "¿Para qué me sirve tener el predio saneado?",
        a: "Un predio saneado e inscrito puede venderse, heredarse, hipotecarse o usarse como garantía para financiamiento sin trabas.",
      },
    ],
  },
  finalCta: {
    title: "Deja tu predio listo para vender, heredar o financiar",
    body: "Cuéntanos la situación de tu predio por WhatsApp y te orientamos hoy.",
    button: "Solicita tu saneamiento",
  },
  whatsapp: {
    baseMessage:
      "Hola VanguardiaMax, necesito *Saneamiento Inmobiliario* para mi predio.",
    segment: "saneamiento-inmobiliario",
  },
};
