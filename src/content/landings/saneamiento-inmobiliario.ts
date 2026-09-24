import type { LandingContent } from "@/types/content";

export const saneamientoInmobiliario: LandingContent = {
  slug: "saneamiento-inmobiliario",
  meta: {
    title: "Saneamiento Inmobiliario y Físico-Legal | VanguardiaMax",
    description:
      "Saneamiento físico-legal de predios: independización, prescripción adquisitiva, regularización de fábrica y rectificación de áreas e inscripción en SUNARP.",
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
  seoContent: [
    { type: "h2", text: "¿Qué es el saneamiento inmobiliario o físico-legal?" },
    {
      type: "p",
      html: "El <b>saneamiento inmobiliario</b> —también llamado <b>saneamiento físico-legal</b>— es el conjunto de trámites que pone de acuerdo la realidad de un predio con lo que figura en SUNARP y en la municipalidad: sus áreas, linderos y construcciones (parte física) y la titularidad de su propietario (parte legal). Termina cuando el predio queda <b>inscrito en SUNARP a nombre de su dueño</b>, sin observaciones, y puede venderse, heredarse, hipotecarse u ofrecerse en garantía.",
    },
    {
      type: "p",
      html: "La parte física corrige lo material: áreas que no coinciden con la partida, linderos mal descritos o una edificación que nunca se declaró. La parte legal ordena el derecho: que quien posee o compró el predio figure como propietario en el registro y que no queden cargas pendientes. En la práctica ambas se trabajan juntas, porque una observación en cualquiera de las dos bloquea la inscripción.",
    },
    { type: "h3", text: "Trámites de saneamiento más frecuentes" },
    {
      type: "ul",
      items: [
        "<b>Primera inscripción de dominio</b> — para predios que nunca accedieron al registro.",
        "<b>Prescripción adquisitiva y título supletorio</b> — cuando el poseedor no tiene un título inscribible a su nombre.",
        "<b>Regularización de fábrica</b> — declaratoria de la edificación construida sin licencia, conforme a la Ley Nº 27157.",
        "<b>Independización y subdivisión</b> — para inscribir por separado departamentos, lotes o secciones de un mismo inmueble.",
        "<b>Rectificación de áreas y linderos</b> — cuando la medida real del predio no coincide con la inscrita.",
        "<b>Levantamiento de cargas y gravámenes</b> — hipotecas, embargos u otras anotaciones que ya no deberían figurar.",
      ],
    },
    { type: "h3", text: "Cuándo conviene sanear tu predio" },
    {
      type: "ul",
      items: [
        "<b>Antes de vender</b> — el comprador y su banco exigen un predio inscrito y sin observaciones.",
        "<b>En una herencia</b> — para que los herederos puedan inscribir y repartir el bien; si hay que asignarle un valor, lo complementa una <a href='/tasaciones/judicial'>tasación judicial</a>.",
        "<b>Para obtener financiamiento</b> — un inmueble saneado puede ofrecerse en garantía hipotecaria.",
        "<b>Si el autovalúo no coincide con la realidad</b> — áreas y construcciones mal declaradas también afectan tu <a href='/tasaciones/impuesto-predial'>impuesto predial</a>.",
      ],
    },
    {
      type: "p",
      html: "Todo saneamiento empieza por un diagnóstico: revisamos la partida registral, los planos y los documentos del predio para definir la ruta que corresponde a tu caso. Cuando las áreas o linderos están en duda, la <a href='/servicios/auditoria-planos'>auditoría de planos</a> aporta el sustento técnico que pide el registro. Cuéntanos la situación de tu predio por <b>WhatsApp</b> y te orientamos el mismo día.",
    },
  ],
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
        q: "¿En qué se diferencia el saneamiento físico del legal?",
        a: "El saneamiento físico corrige la realidad material del predio frente al registro (áreas, linderos y fábrica); el legal ordena la titularidad para que el propietario figure inscrito en SUNARP sin cargas pendientes. Normalmente se trabajan juntos.",
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
