import type { LandingContent } from "@/types/content";
import { DEFAULT_STATS } from "./_shared";

export const empresas: LandingContent = {
  slug: "empresas",
  meta: {
    title: "Tasación de Activos Fijos para Empresas bajo NIIF/IFRS | VanguardiaMax",
    description:
      "Inventario y tasación de activos fijos bajo NIIF/IFRS para estados financieros, contabilidad, auditoría y toma de seguros. Equipos descentralizados con doble visado a nivel nacional. Agenda por WhatsApp.",
    canonical: "/tasaciones/empresas",
  },
  hero: {
    eyebrow: "Inventario · activos fijos",
    heading: "Tasación de activos fijos para tu empresa ",
    headingAccent: "bajo NIIF / IFRS",
    sub: "Inventario y valorización de activos fijos para contabilidad, auditoría y seguros. Informes con sustento técnico y doble visado, reconocidos por auditores y la SBS.",
    primaryCta: { label: "Agenda con un especialista", whatsapp: true },
    secondaryCta: { label: "Cotiza por formulario", href: "#cotizar" },
    trust: [
      { icon: "shield", label: "Autenticado por la SBS" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Doble visado" },
    ],
  },
  heroCard: {
    kind: "cert",
    title: "Informe de Activos Fijos",
    subtitle: "Valor razonable · NIIF / IFRS",
    rows: [
      { k: "Valor razonable", v: "S/ ———" },
      { k: "Valor de realización", v: "S/ ———" },
    ],
    sealText: "VALOR HOMOLOGADO · SBS · REGLAMENTO NACIONAL · ",
    foot: "Conforme a NIIF/IFRS · doble visado · SBS",
  },
  stats: DEFAULT_STATS,
  pain: {
    eyebrow: "El problema",
    heading: "Tu balance necesita activos valorizados con sustento",
    body: "Auditoría te observa los activos sin valorizar, el seguro te paga menos de lo que valen y tu balance no refleja la realidad. Te entregamos inventario y valor razonable bajo NIIF/IFRS, listos para tu cierre.",
  },
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "El documento correcto, sin demoras",
    items: [
      {
        num: "01",
        title: "NIIF / IFRS",
        body: "Valor razonable y de realización de tus activos, conforme a las normas contables vigentes.",
      },
      {
        num: "02",
        title: "Inventario físico",
        body: "Levantamiento, etiquetado y conciliación de activos fijos contra tu contabilidad.",
      },
      {
        num: "03",
        title: "Seguros y auditoría",
        body: "Valorizaciones para toma de seguros, peritaje de obsolescencia y respaldo ante auditores.",
      },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    heading: "Tres pasos, sin vueltas",
    items: [
      {
        num: "1",
        title: "Cuéntanos de tu empresa",
        body: "Rubro, tipo y cantidad aproximada de activos. Coordinamos una llamada el mismo día.",
      },
      {
        num: "2",
        title: "Inventario y tasación",
        body: "Nuestros equipos levantan y valorizan los activos en tus sedes, a nivel nacional.",
      },
      {
        num: "3",
        title: "Informe NIIF listo",
        body: "Recibes el inventario y la valorización con sustento, listos para contabilidad o seguros.",
      },
    ],
  },
  seoContent: [
    { type: "h2", text: "Tasación de activos fijos para empresas bajo NIIF/IFRS" },
    { type: "p", html: "La <b>tasación de activos fijos para empresas</b> es un requisito clave para que tus estados financieros reflejen la realidad económica de tu compañía conforme a las <b>NIIF / IFRS</b>. A diferencia de una valorización referencial, una tasación con enfoque contable determina el <b>valor razonable</b> de tu maquinaria, equipos, inmuebles, mobiliario y vehículos siguiendo los criterios de la NIIF 13 y la NIC 16, de modo que tu cierre contable y tu auditoría cuenten con un sustento técnico verificable y defendible ante auditores, la SUNAT y tu directorio." },
    { type: "p", html: "Nuestro equipo realiza el levantamiento, el peritaje y la documentación que tu área contable necesita: desde el <b>inventario físico de activos</b> hasta el informe final con metodología, vidas útiles y deterioro. Si en cambio necesitas valorizar un bien como garantía de un crédito o para un seguro, revisa la <a href='/tasaciones/activos-fijos'>tasación de activos fijos</a> general." },
    { type: "h3", text: "Valor razonable (NIIF 13 / NIC 16) para estados financieros y auditoría" },
    { type: "p", html: "Bajo el modelo de revaluación de la <b>NIC 16</b>, las propiedades, planta y equipo deben mostrarse a su valor revaluado, que corresponde a su valor razonable a la fecha de la revaluación. La <b>NIIF 13</b> establece cómo medir ese valor razonable y qué jerarquía de datos usar, ya sea por enfoque de mercado, de costo de reposición o de ingresos. Nuestros informes de <b>tasación de activos fijos para empresas</b> aplican estos lineamientos para que tu auditoría externa acepte las cifras sin observaciones y para que tu depreciación contable y tributaria queden correctamente sustentadas." },
    { type: "ul", items: [
      "<b>Valor razonable NIIF 13</b> — determinación con la metodología y jerarquía de datos que exige la norma.",
      "<b>Revaluación NIC 16</b> — sustento para ajustar el valor en libros de propiedades, planta y equipo.",
      "<b>Soporte de auditoría</b> — informe con supuestos, vidas útiles y depreciación trazables y verificables.",
      "<b>Cierre contable</b> — cifras listas para tus estados financieros y para la toma de decisiones.",
    ] },
    { type: "h3", text: "Inventario y conciliación de activos fijos" },
    { type: "p", html: "Muchas empresas descubren diferencias importantes entre lo que figura en su contabilidad y lo que realmente existe en planta. Por eso ejecutamos un <b>inventario físico de activos</b> completo: identificación en campo, <b>etiquetado</b> con codificación única, registro de estado y ubicación, y la <b>conciliación contra la contabilidad</b> para detectar activos no registrados, bienes inexistentes o duplicados. El resultado es un registro depurado que ordena tu maestro de activos fijos y reduce el riesgo de observaciones en auditoría." },
    { type: "h3", text: "Obsolescencia y baja de activos" },
    { type: "p", html: "El peritaje también identifica los bienes que ya no generan beneficios económicos o que presentan <b>obsolescencia</b> técnica o funcional. Con ese diagnóstico podemos sustentar el <b>deterioro de valor</b>, la corrección de las vidas útiles y la <b>baja de activos</b> en libros, evitando que tu balance cargue con bienes que no aportan valor. Así tu información financiera se mantiene limpia y tus decisiones de inversión y renovación se basan en datos reales." },
    { type: "p", html: "Si necesitas valorizar tus activos para el cierre contable, una auditoría o una revaluación bajo NIIF, agenda una conversación con un especialista por WhatsApp y te orientamos según el caso de tu empresa." },
  ],
  form: {
    bullets: [
      "Respuesta el mismo día por WhatsApp",
      "Cotización personalizada según tu caso",
      "Atención en Lima, Callao y todo el Perú",
    ],
    fields: [
      { type: "text", name: "nombre", label: "Nombre", placeholder: "Tu nombre" },
      {
        type: "text",
        name: "distrito",
        label: "Ciudad / sede principal",
        placeholder: "Ej. Lima, Arequipa, Trujillo…",
      },
      {
        type: "select",
        name: "tipo",
        label: "Tipo de activos",
        options: [
          "Maquinaria y equipos",
          "Vehículos / flota",
          "Inmuebles",
          "Equipos de cómputo",
          "Mobiliario",
          "Activos mixtos",
        ],
      },
      {
        type: "select",
        name: "finalidad",
        label: "Finalidad",
        options: [
          "Cierre contable / NIIF",
          "Toma de seguro",
          "Auditoría",
          "Obsolescencia / baja de activos",
          "Leasing / financiamiento",
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
        q: "¿Hacen tasaciones bajo NIIF / IFRS?",
        a: "Sí. Determinamos el valor razonable y de realización de los activos fijos conforme a las normas internacionales de información financiera, con sustento para auditoría.",
      },
      {
        q: "¿Incluye inventario físico de activos?",
        a: "Sí. Realizamos el levantamiento, etiquetado y conciliación del inventario de activos fijos contra tus registros contables.",
      },
      {
        q: "¿Sirve para seguros y obsolescencia?",
        a: "Sí. Valorizamos para toma de seguros y emitimos peritajes de estado y obsolescencia para la baja de activos en los estados financieros.",
      },
      {
        q: "¿Atienden a nivel nacional?",
        a: "Sí. Contamos con equipos descentralizados con doble visado y cobertura en todo el Perú, además de presencia en Chile y México.",
      },
      {
        q: "¿Cuánto demora y cuánto cuesta?",
        a: "Depende del volumen de activos y la cantidad de sedes. Cuéntanos el alcance y te preparamos una propuesta a medida.",
      },
    ],
  },
  finalCta: {
    title: "Pon tus activos en orden antes del cierre",
    body: "Cuéntanos el rubro y el volumen de activos por WhatsApp y coordinamos una llamada.",
    button: "Agenda con un especialista",
  },
  whatsapp: {
    baseMessage:
      "Hola VanguardiaMax, necesito una *Tasación de Activos Fijos / NIIF* para mi empresa.",
    segment: "empresas-activos-fijos",
  },
};
