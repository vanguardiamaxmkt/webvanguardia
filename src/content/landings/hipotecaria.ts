import type { LandingContent } from "@/types/content";
import { DEFAULT_STATS } from "./_shared";

export const hipotecaria: LandingContent = {
  slug: "hipotecaria",
  meta: {
    title: "Tasación Hipotecaria Express en 24 h | VanguardiaMax",
    description:
      "Tasación de tu inmueble lista para el banco en 24 horas. Valor comercial y de realización, homologada SBS y conforme al Reglamento Nacional de Tasaciones. Cotiza por WhatsApp.",
    canonical: "/tasaciones/hipotecaria",
  },
  hero: {
    eyebrow: "Tasación hipotecaria express",
    heading: "Tu tasación lista para el banco ",
    headingAccent: "en 24 horas",
    sub: "Valor comercial y de realización, homologada ante la SBS y conforme al Reglamento Nacional de Tasaciones. La que tu banco acepta para avanzar tu crédito.",
    primaryCta: { label: "Cotiza tu tasación hipotecaria", whatsapp: true },
    secondaryCta: { label: "Cotiza por formulario", href: "#cotizar" },
    trust: [
      { icon: "shield", label: "Autenticado por la SBS" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Doble visado" },
    ],
  },
  heroCard: {
    kind: "cert",
    title: "Informe de Tasación",
    subtitle: "Valor comercial · Valor de realización",
    rows: [
      { k: "Valor comercial", v: "S/ ———" },
      { k: "Valor de realización", v: "S/ ———" },
    ],
    sealText: "TASACIÓN HOMOLOGADA · SBS · REGLAMENTO NACIONAL · ",
    foot: "Conforme a R.M. Nº172-2016-VIVIENDA · SBS",
  },
  stats: DEFAULT_STATS,
  pain: {
    eyebrow: "El problema",
    heading: "El banco no avanza tu crédito sin una tasación homologada",
    body: "Una tasación mal hecha o que la entidad no reconoce frena tu desembolso semanas. Te entregamos un informe rápido, con doble visado, que tu banco acepta a la primera.",
  },
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "El documento correcto, sin demoras",
    items: [
      {
        num: "01",
        title: "Entrega en 24 horas",
        body: "Inspección ágil y entrega del informe en plazos express, sin trámites de más.",
      },
      {
        num: "02",
        title: "Aceptada por bancos",
        body: "Valor comercial y de realización homologado, reconocido por instituciones financieras.",
      },
      {
        num: "03",
        title: "Doble visado",
        body: "Cada informe pasa por doble revisión técnica: precisión y respaldo ante la SBS.",
      },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    heading: "Tres pasos, sin vueltas",
    items: [
      {
        num: "1",
        title: "Cuéntanos del inmueble",
        body: "Distrito, tipo de propiedad y para qué necesitas la tasación. Te damos el alcance el mismo día.",
      },
      {
        num: "2",
        title: "Inspección y análisis",
        body: "Un perito visita y evalúa el inmueble según el Reglamento Nacional de Tasaciones.",
      },
      {
        num: "3",
        title: "Informe en 24 h",
        body: "Recibes tu informe con valor comercial y de realización, listo para presentar al banco.",
      },
    ],
  },
  seoContent: [
    { type: "h2", text: "¿Qué es una tasación hipotecaria y por qué la pide el banco?" },
    { type: "p", html: "La <b>tasación hipotecaria</b> es la valorización profesional de un inmueble que el banco exige antes de aprobar y desembolsar un crédito con garantía hipotecaria. En la práctica, es la <b>tasación para el banco</b>: la entidad financiera necesita conocer cuánto vale realmente la propiedad que respaldará el préstamo, porque ese valor determina el monto que está dispuesta a financiar. Sin una <b>tasación para crédito hipotecario</b> debidamente elaborada y reconocida, el desembolso simplemente no avanza." },
    { type: "p", html: "Un informe completo entrega dos cifras clave: el <b>valor comercial</b>, que refleja cuánto vale el inmueble en condiciones normales de mercado, y el <b>valor de realización</b>, una estimación más conservadora de cuánto se obtendría en una venta forzada o rápida. El banco se apoya sobre todo en este segundo valor para calcular su nivel de cobertura. Por eso trabajamos siempre con tasaciones homologadas ante la SBS y elaboradas conforme al Reglamento Nacional de Tasaciones del Perú (R.M. Nº172-2016-VIVIENDA), que son las que las instituciones financieras aceptan a la primera." },
    { type: "h3", text: "Documentos que necesitas" },
    { type: "p", html: "Para agilizar la tasación conviene tener a la mano la documentación del inmueble. Por lo general te pediremos:" },
    { type: "ul", items: [
      "<b>Copia literal o título de propiedad</b> — acredita quién es el propietario y la situación registral del bien.",
      "<b>PU y HR</b> — la Declaración Jurada de Autovalúo (Predio Urbano y Hoja de Resumen) emitida por la municipalidad.",
      "<b>Planos del inmueble</b> — de ubicación, distribución o arquitectura, que permiten verificar áreas y características.",
      "<b>Recibo del impuesto predial</b> — para confirmar que los tributos del predio están al día.",
    ] },
    { type: "p", html: "Si te falta algún documento, escríbenos igual: te indicamos cómo obtenerlo y confirmamos la lista exacta según tu caso particular." },
    { type: "h3", text: "Cuánto demora y cuánto vale" },
    { type: "p", html: "El costo de una tasación hipotecaria depende del tipo de inmueble (casa, departamento, terreno, local), de su tamaño y de la ubicación, por lo que cada cotización es personalizada. En cuanto a plazos, trabajamos en modalidad <b>express</b>: la entrega del informe puede darse en aproximadamente <b>24 horas</b> desde la inspección, siempre que la documentación esté completa. Si además necesitas valorizar otros bienes, también realizamos <a href='/tasaciones/vehicular'>tasación vehicular</a> y otros servicios que puedes revisar en nuestro hub de <a href='/tasaciones'>tasaciones</a>." },
    { type: "h3", text: "Vigencia de la tasación" },
    { type: "p", html: "Una tasación hipotecaria tiene una validez aproximada de <b>1 año</b>. Pasado ese tiempo conviene una nueva evaluación para reflejar las condiciones actuales del mercado inmobiliario, ya que los valores comerciales pueden variar y el banco suele exigir un informe vigente al momento del desembolso." },
    { type: "p", html: "¿Necesitas tu tasación lista para el banco esta semana? Cuéntanos el distrito y el tipo de inmueble por <b>WhatsApp</b> y te damos el alcance y la cotización el mismo día, sin compromiso." },
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
          "Crédito hipotecario",
          "Compra o venta",
          "Garantía / préstamo con garantía",
          "Otro",
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
        q: "¿La tasación la acepta mi banco?",
        a: "Sí. Realizamos tasaciones con valor comercial y de realización conforme al Reglamento Nacional de Tasaciones del Perú (R.M. Nº172-2016-VIVIENDA) y la Resolución S.B.S. Nº11356-2008, reconocidas por las instituciones financieras.",
      },
      {
        q: "¿Qué documentos necesito?",
        a: "Por lo general: copia del título de propiedad o copia literal, PU y HR, planos del inmueble y recibo del impuesto predial. Te confirmamos la lista exacta según tu caso por WhatsApp.",
      },
      {
        q: "¿Cuánto demora?",
        a: "Para tasaciones hipotecarias trabajamos en modalidad express: la entrega puede darse en aproximadamente 24 horas desde la inspección, según disponibilidad de la documentación.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "El costo depende del tipo, tamaño y ubicación del inmueble. Escríbenos con esos datos y te damos una cotización personalizada al momento.",
      },
      {
        q: "¿Por cuánto tiempo es válida?",
        a: "Las tasaciones tienen validez de 1 año. Después conviene una nueva evaluación para reflejar las condiciones actuales del mercado.",
      },
    ],
  },
  finalCta: {
    title: "Avanza tu crédito esta semana",
    body: "Envíanos el distrito y el tipo de inmueble por WhatsApp y te damos el alcance hoy.",
    button: "Cotiza tu tasación hipotecaria",
  },
  whatsapp: {
    baseMessage:
      "Hola VanguardiaMax, quiero cotizar una *Tasación Hipotecaria Express* para mi inmueble.",
    segment: "hipotecaria-express",
  },
};
