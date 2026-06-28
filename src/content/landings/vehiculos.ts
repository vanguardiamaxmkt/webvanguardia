import type { LandingContent } from "@/types/content";
import { DEFAULT_STATS } from "./_shared";

export const vehiculos: LandingContent = {
  slug: "vehicular",
  meta: {
    title: "Tasación de Vehículos y Maquinarias | VanguardiaMax",
    description:
      "Valor comercial real de vehículos, maquinaria y activos fijos. Para crédito con garantía, compra-venta, seguros, contabilidad (NIIF/IFRS) y procesos judiciales. Cotiza por WhatsApp.",
    canonical: "/tasaciones/vehicular",
  },
  hero: {
    eyebrow: "Tasación de vehículos y maquinarias",
    heading: "El valor comercial real de tu vehículo ",
    headingAccent: "o maquinaria",
    sub: "Tasaciones de vehículos, maquinaria y activos fijos con valor comercial y de realización. Para crédito con garantía, compra-venta, seguros, contabilidad o procesos legales.",
    primaryCta: { label: "Cotiza tu tasación vehicular", whatsapp: true },
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
    sealText: "VALOR HOMOLOGADO · SBS · REGLAMENTO NACIONAL · ",
    foot: "Conforme a R.M. Nº172-2016-VIVIENDA · SBS",
  },
  stats: DEFAULT_STATS,
  pain: {
    eyebrow: "El problema",
    heading: "Un valor mal calculado te cuesta caro al vender, asegurar o pedir un crédito",
    body: "Sin una tasación con respaldo técnico terminas malvendiendo, sub-asegurando o sin acceso al crédito que tu activo puede respaldar. Te entregamos el valor comercial y de realización real, con doble visado.",
  },
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "El documento correcto, sin demoras",
    items: [
      {
        num: "01",
        title: "Valor comercial real",
        body: "Tasación de vehículos, maquinaria y activos fijos con sustento técnico, no estimados de internet.",
      },
      {
        num: "02",
        title: "Para crédito y garantía",
        body: "Valor de realización reconocido por entidades financieras para préstamos con garantía vehicular o de maquinaria.",
      },
      {
        num: "03",
        title: "Seguros y contabilidad",
        body: "Informes válidos para toma de seguros, inventarios y activos fijos bajo NIIF / IFRS.",
      },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    heading: "Tres pasos, sin vueltas",
    items: [
      {
        num: "1",
        title: "Cuéntanos del activo",
        body: "Tipo de vehículo o maquinaria, año y para qué necesitas la tasación. Te damos el alcance el mismo día.",
      },
      {
        num: "2",
        title: "Inspección técnica",
        body: "Un perito evalúa el estado y las características del bien conforme al Reglamento Nacional de Tasaciones.",
      },
      {
        num: "3",
        title: "Informe con valor real",
        body: "Recibes el informe con valor comercial y de realización, listo para tu trámite.",
      },
    ],
  },
  seoContent: [
    { type: "h2", text: "¿Qué es la tasación vehicular?" },
    { type: "p", html: "La <b>tasación vehicular</b> es la determinación técnica y documentada del valor de un vehículo, basada en una metodología profesional y no en estimados de internet. A diferencia de los precios referenciales que circulan en avisos o comparadores, una <b>tasación de vehículos</b> entrega el valor comercial y el valor de realización con sustento técnico, de modo que sirva como respaldo formal ante bancos, financieras, aseguradoras, contadores y autoridades judiciales. El mismo principio aplica a la <b>tasación de maquinaria</b> pesada e industrial, donde el valor depende de variables específicas del activo." },
    { type: "h3", text: "Qué se evalúa en una tasación de vehículos" },
    { type: "p", html: "Para llegar a un valor confiable, el perito analiza un conjunto de factores que, en conjunto, reflejan la condición real del bien:" },
    { type: "ul", items: [
      "<b>Marca y modelo</b> — definen el posicionamiento del vehículo y su demanda en el mercado peruano.",
      "<b>Año de fabricación</b> — incide directamente en la depreciación y la vida útil restante.",
      "<b>Kilometraje</b> — indicador clave del desgaste y del uso acumulado.",
      "<b>Estado mecánico</b> — revisión del motor, transmisión, sistemas y componentes principales.",
      "<b>Equipamiento</b> — accesorios, tecnología y mejoras que suman o restan valor.",
      "<b>Mercado</b> — oferta y demanda vigentes que determinan el valor comercial y de realización.",
    ] },
    { type: "h3", text: "Para qué sirve la tasación vehicular" },
    { type: "p", html: "Una tasación profesional respalda decisiones importantes en distintos ámbitos. Entre los usos más frecuentes están la <b>garantía vehicular</b> para acceder a un crédito, donde el banco exige un valor sustentado; la <b>compraventa</b>, para negociar con información objetiva; la <b>toma de seguros</b>, fijando la suma asegurada de manera justa; el uso <b>contable</b> bajo normas NIIF/IFRS, para reflejar el valor razonable de los activos en los estados financieros; y los <b>procesos judiciales</b>, donde se requiere un informe pericial imparcial. Si tu empresa necesita valorizar flota o equipos, también ofrecemos <a href='/tasaciones/activos-fijos'>tasación de activos fijos</a> para maquinaria y bienes del negocio." },
    { type: "h3", text: "Qué necesitas para tu tasación" },
    { type: "p", html: "El requisito principal es contar con la documentación que acredite el bien. Para un vehículo, basta con la <b>tarjeta de propiedad</b>; para <b>maquinaria pesada o industrial</b>, conviene tener a la mano la <b>ficha técnica</b> del equipo, que detalla marca, modelo, capacidad y especificaciones. Con esa información, el perito programa la inspección y elabora el informe con valor comercial y de realización." },
    { type: "p", html: "¿Necesitas una <b>tasación vehicular</b> con respaldo técnico para tu crédito, compraventa, seguro o trámite contable? Escríbenos por WhatsApp y cotiza tu caso hoy mismo; te respondemos el mismo día con una propuesta personalizada." },
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
        label: "Ubicación del bien",
        placeholder: "Ciudad o distrito donde está el activo",
      },
      {
        type: "select",
        name: "tipo",
        label: "Tipo de vehículo o maquinaria",
        options: [
          "Auto / camioneta",
          "Camión / bus",
          "Maquinaria pesada",
          "Maquinaria industrial",
          "Equipo / activo fijo",
          "Otro",
        ],
      },
      {
        type: "select",
        name: "finalidad",
        label: "Finalidad",
        options: [
          "Crédito / garantía vehicular",
          "Compra o venta",
          "Toma de seguro",
          "Contable (NIIF / IFRS)",
          "Proceso judicial",
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
        q: "¿Sirve para un crédito con garantía vehicular?",
        a: "Sí. Entregamos el valor comercial y de realización del vehículo o maquinaria, reconocido por entidades financieras para préstamos con garantía.",
      },
      {
        q: "¿Tasan maquinaria y activos fijos de empresa?",
        a: "Sí. Realizamos tasaciones de maquinaria, equipos y activos fijos, incluyendo inventarios y valorizaciones bajo NIIF / IFRS y para toma de seguros.",
      },
      {
        q: "¿Qué necesito para la tasación?",
        a: "Para vehículos, la tarjeta de propiedad y los datos del bien; para maquinaria, la ficha técnica o documentación del equipo. Te indicamos la lista exacta por WhatsApp.",
      },
      {
        q: "¿Cuánto demora y cuánto cuesta?",
        a: "Depende del tipo de bien, su ubicación y la urgencia. Escríbenos con los datos y te damos plazo y cotización personalizada.",
      },
      {
        q: "¿Por cuánto tiempo es válida?",
        a: "Las tasaciones tienen validez de 1 año; pasado ese plazo conviene actualizar el valor a las condiciones del mercado.",
      },
    ],
  },
  finalCta: {
    title: "Conoce cuánto vale tu activo hoy",
    body: "Envíanos el tipo de vehículo o maquinaria por WhatsApp y te damos el alcance hoy.",
    button: "Cotiza tu tasación vehicular",
  },
  whatsapp: {
    baseMessage:
      "Hola VanguardiaMax, quiero cotizar una *Tasación de Vehículo / Maquinaria*.",
    segment: "vehiculos-maquinaria",
  },
};
