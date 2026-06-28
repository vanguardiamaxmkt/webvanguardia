import type { LandingContent } from "@/types/content";
import { DEFAULT_STATS } from "./_shared";

export const judicial: LandingContent = {
  slug: "judicial",
  meta: {
    title: "Tasación Judicial y Pericial con Validez Legal | VanguardiaMax",
    description:
      "Peritaje y tasación con validez legal para procesos judiciales, herencias, divorcios y gestión notarial. Peritos certificados, informes reconocidos por juzgados. Consulta por WhatsApp.",
    canonical: "/tasaciones/judicial",
  },
  hero: {
    eyebrow: "Tasación judicial y pericial",
    heading: "Un peritaje con validez legal ",
    headingAccent: "para tu proceso",
    sub: "Tasaciones periciales reconocidas por juzgados y notarías, con valor comercial y de realización conforme a norma. El respaldo técnico que tu proceso necesita.",
    primaryCta: { label: "Solicita tu peritaje", whatsapp: true },
    secondaryCta: { label: "Cotiza por formulario", href: "#cotizar" },
    trust: [
      { icon: "shield", label: "Autenticado por la SBS" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Doble visado" },
    ],
  },
  heroCard: {
    kind: "cert",
    title: "Informe Pericial",
    subtitle: "Valor comercial · Valor de realización",
    rows: [
      { k: "Valor comercial", v: "S/ ———" },
      { k: "Valor de realización", v: "S/ ———" },
    ],
    sealText: "PERITAJE CERTIFICADO · SBS · REGLAMENTO NACIONAL · ",
    foot: "Reconocido por juzgados y notarías · SBS",
  },
  stats: DEFAULT_STATS,
  pain: {
    eyebrow: "El problema",
    heading: "Tu proceso exige un peritaje que el juzgado acepte",
    body: "Una valoración sin respaldo técnico se cae en el expediente. Entregamos informes periciales con sustento normativo, reconocidos por instituciones judiciales y notariales.",
  },
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "El documento correcto, sin demoras",
    items: [
      {
        num: "01",
        title: "Validez legal",
        body: "Informes con sustento técnico reconocidos por juzgados, notarías e instituciones.",
      },
      {
        num: "02",
        title: "Peritos certificados",
        body: "Profesionales con especialización y experiencia en peritaje judicial y notarial.",
      },
      {
        num: "03",
        title: "Cobertura nacional",
        body: "Equipos descentralizados con doble visado en todo el Perú.",
      },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    heading: "Tres pasos, sin vueltas",
    items: [
      {
        num: "1",
        title: "Cuéntanos del caso",
        body: "Tipo de bien y de proceso (herencia, división, judicial o notarial). Te orientamos el mismo día.",
      },
      {
        num: "2",
        title: "Inspección pericial",
        body: "Un perito evalúa el bien y elabora el informe conforme al Reglamento Nacional de Tasaciones.",
      },
      {
        num: "3",
        title: "Informe con sustento",
        body: "Recibes el peritaje con valor comercial y de realización, listo para tu expediente.",
      },
    ],
  },
  seoContent: [
    { type: "h2", text: "¿Qué es una tasación judicial o peritaje?" },
    {
      type: "p",
      html: "Una <b>tasación judicial</b> es un peritaje técnico que determina el valor de un inmueble u otro bien con validez legal, para que el resultado pueda ser presentado y aceptado dentro de un expediente. A diferencia de una valuación referencial, este informe —también llamado <b>peritaje</b> o <b>tasación pericial</b>— se elabora con sustento normativo y lo firma un perito acreditado, de modo que el juzgado, la notaría o la institución correspondiente lo reconozca como prueba válida en tu proceso.",
    },
    {
      type: "p",
      html: "El informe expresa tanto el <b>valor comercial</b> como el <b>valor de realización</b> del bien, calculados conforme al Reglamento Nacional de Tasaciones del Perú. Esa doble valuación es la que permite sustentar acuerdos, particiones o remates con cifras defendibles ante cualquier parte del proceso.",
    },
    { type: "h3", text: "Casos en que se usa una tasación pericial" },
    {
      type: "ul",
      items: [
        "<b>Sucesión y herencia</b> — para repartir un inmueble entre herederos con un valor objetivo y evitar conflictos familiares.",
        "<b>Divorcio y división de bienes</b> — cuando hay que liquidar la sociedad de gananciales y asignar valores a cada propiedad.",
        "<b>Proceso judicial</b> — como medio probatorio del valor de un bien dentro del expediente que sigue el juzgado.",
        "<b>Remate</b> — para fijar el valor de tasación que sirve de base en la ejecución y subasta del inmueble.",
        "<b>Gestión notarial</b> — en trámites de sucesión intestada, adjudicaciones y otros actos que requieren un valor sustentado.",
      ],
    },
    { type: "h3", text: "Por qué debe tener validez legal" },
    {
      type: "p",
      html: "Una valuación sin respaldo técnico suele rechazarse en el expediente y obliga a repetir el trámite. Por eso trabajamos con <b>peritos certificados e inscritos</b> en los registros oficiales (REPEV / REPEJ), cuya firma y sustento normativo dan al informe el peso legal que el juzgado exige. Cada <b>valuación para juicio</b> se apoya en el Reglamento Nacional de Tasaciones, lo que la hace consistente y difícil de objetar. Si además tu predio requiere ordenar su situación registral antes del peritaje, podemos orientarte sobre <a href='/servicios/saneamiento-inmobiliario'>saneamiento inmobiliario</a> para que el bien llegue al proceso correctamente documentado.",
    },
    { type: "h3", text: "Documentos que suelen pedirse" },
    {
      type: "ul",
      items: [
        "<b>Copia literal o título de propiedad</b> — para acreditar la titularidad del bien.",
        "<b>PU y HR</b> — la Declaración Jurada de Autoavalúo y los recibos del impuesto predial del año en curso.",
        "<b>Planos</b> — de ubicación, perimétrico y de distribución, cuando estén disponibles.",
      ],
    },
    {
      type: "p",
      html: "Cada proceso es distinto, así que la lista exacta puede variar según el tipo de bien y de juicio. Cuéntanos los detalles de tu caso por <b>WhatsApp</b> y te indicamos qué documentos necesitas, el plazo de entrega y una cotización personalizada para tu tasación judicial.",
    },
  ],
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
        label: "Distrito del inmueble",
        placeholder: "Ej. Surco, San Isidro, Callao…",
      },
      {
        type: "select",
        name: "tipo",
        label: "Tipo de inmueble o bien",
        options: ["Casa", "Departamento", "Terreno", "Local comercial", "Oficina", "Otro"],
      },
      {
        type: "select",
        name: "finalidad",
        label: "Finalidad",
        options: [
          "Herencia / sucesión",
          "Divorcio / división de bienes",
          "Proceso judicial",
          "Gestión notarial",
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
        q: "¿El peritaje tiene validez legal?",
        a: "Sí. Nuestras tasaciones tienen validez legal y son reconocidas por instituciones financieras y gubernamentales, con sustento conforme al Reglamento Nacional de Tasaciones del Perú.",
      },
      {
        q: "¿Sirve para herencias y divorcios?",
        a: "Sí. Atendemos sucesiones, divisiones de bienes, procesos judiciales y gestión notarial, con informes preparados para presentarse en el expediente.",
      },
      {
        q: "¿Qué documentos necesito?",
        a: "Generalmente copia literal o título de propiedad, PU y HR, planos y cualquier documento que acredite la titularidad. Te indicamos la lista exacta según tu proceso por WhatsApp.",
      },
      {
        q: "¿Cuánto demora y cuánto cuesta?",
        a: "Depende del tipo de bien, la ubicación y la urgencia. Escríbenos con los datos del caso y te damos plazo y cotización personalizada.",
      },
      {
        q: "¿Por cuánto tiempo es válido?",
        a: "Las tasaciones tienen validez de 1 año; pasado ese plazo conviene actualizar el valor a las condiciones del mercado.",
      },
    ],
  },
  finalCta: {
    title: "Dale respaldo técnico a tu proceso",
    body: "Cuéntanos el tipo de bien y de proceso por WhatsApp y te orientamos hoy.",
    button: "Solicita tu peritaje",
  },
  whatsapp: {
    baseMessage:
      "Hola VanguardiaMax, necesito una *Tasación Judicial / Pericial* para un proceso.",
    segment: "judicial-pericial",
  },
};
