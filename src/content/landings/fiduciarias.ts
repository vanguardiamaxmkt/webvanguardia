import type { LandingContent } from "@/types/content";
import { DEFAULT_STATS } from "./_shared";

export const fiduciarias: LandingContent = {
  slug: "fiduciarias",
  meta: {
    title: "Tasación Fiduciaria para Fideicomiso | VanguardiaMax",
    description:
      "Tasación fiduciaria independiente del patrimonio fideicometido: inmuebles, terrenos y activos para fideicomiso de garantía, titulización y financiamiento estructurado. Peritos inscritos, conforme al Reglamento Nacional de Tasaciones. Cotiza por WhatsApp.",
    canonical: "/tasaciones/fiduciarias",
  },
  hero: {
    eyebrow: "Tasación fiduciaria",
    heading: "Valoriza el patrimonio que respalda tu ",
    headingAccent: "fideicomiso",
    sub: "Tasación independiente de los bienes que integran el patrimonio fideicometido: valor comercial y de realización conforme al Reglamento Nacional de Tasaciones. La que dan por válida fiduciario, fideicomitente y fideicomisario.",
    primaryCta: { label: "Cotiza tu tasación fiduciaria", whatsapp: true },
    secondaryCta: { label: "Cotiza por formulario", href: "#cotizar" },
    trust: [
      { icon: "shield", label: "Peritos inscritos SBS / REPEV" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Doble visado" },
    ],
  },
  heroCard: {
    kind: "cert",
    title: "Informe de Tasación",
    subtitle: "Patrimonio fideicometido · Valor comercial y de realización",
    rows: [
      { k: "Valor comercial", v: "S/ ———" },
      { k: "Valor de realización", v: "S/ ———" },
    ],
    sealText: "TASACIÓN FIDUCIARIA · PERITO INSCRITO · REGLAMENTO NACIONAL · ",
    foot: "Conforme a R.M. Nº172-2016-VIVIENDA · SBS / REPEV",
  },
  stats: DEFAULT_STATS,
  pain: {
    eyebrow: "El problema",
    heading: "Sin una valorización independiente, el fideicomiso no se constituye con respaldo",
    body: "Para constituir o supervisar un patrimonio fideicometido, las partes necesitan una cifra técnica e imparcial del valor de los bienes aportados. Una tasación débil o sin perito inscrito frena la estructuración del financiamiento. Te entregamos un informe con doble visado que fiduciario y financistas aceptan.",
  },
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "Valor imparcial para todas las partes",
    items: [
      {
        num: "01",
        title: "Independencia técnica",
        body: "Valorización imparcial que da transparencia a fideicomitente, fiduciario y fideicomisario por igual.",
      },
      {
        num: "02",
        title: "Peritos inscritos",
        body: "Informes firmados por peritos inscritos (SBS / REPEV), conforme al Reglamento Nacional de Tasaciones.",
      },
      {
        num: "03",
        title: "Lista para estructurar",
        body: "Valor comercial y de realización del patrimonio fideicometido, listo para garantía, titulización o supervisión.",
      },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    heading: "Tres pasos, sin vueltas",
    items: [
      {
        num: "1",
        title: "Cuéntanos del fideicomiso",
        body: "Tipo de fideicomiso (garantía, administración o titulización) y los bienes a aportar. Te damos el alcance el mismo día.",
      },
      {
        num: "2",
        title: "Inspección y análisis",
        body: "Un perito inscrito inspecciona cada bien del patrimonio y lo evalúa según el Reglamento Nacional de Tasaciones.",
      },
      {
        num: "3",
        title: "Informe de valorización",
        body: "Recibes el informe con valor comercial y de realización del patrimonio fideicometido, listo para las partes.",
      },
    ],
  },
  seoContent: [
    { type: "h2", text: "¿Qué es una tasación fiduciaria?" },
    { type: "p", html: "La <b>tasación fiduciaria</b> es la valorización independiente de los bienes que integran un fideicomiso —inmuebles, terrenos, activos y demás patrimonio— realizada para constituir, respaldar y supervisar el <b>patrimonio fideicometido</b>. También se le conoce como <b>tasación para fideicomiso</b> o <b>valorización de patrimonio fideicometido</b>, y su objetivo es entregar una cifra técnica e imparcial sobre la que puedan apoyarse las tres partes del contrato: el fideicomitente (quien aporta los bienes), el fiduciario (quien los administra) y el fideicomisario (el beneficiario). Trabajamos siempre con peritos inscritos (SBS / REPEV) y conforme al Reglamento Nacional de Tasaciones del Perú (R.M. Nº172-2016-VIVIENDA), entregando tanto el <b>valor comercial</b> como el <b>valor de realización</b> de cada bien." },
    { type: "h3", text: "Cómo se usa en un fideicomiso de garantía" },
    { type: "p", html: "En un <b>fideicomiso de garantía</b>, los bienes se transfieren a un patrimonio autónomo que respalda un crédito o una obligación. La tasación es la pieza que define cuánto vale ese respaldo: con ella, la entidad financista determina el nivel de cobertura y el monto que está dispuesta a desembolsar. Por eso una valorización imparcial y bien sustentada acelera la constitución del fideicomiso y evita discusiones entre las partes. El mismo principio aplica a los fideicomisos de administración y de titulización, donde el valor del patrimonio fideicometido debe quedar claramente establecido desde el inicio." },
    { type: "h3", text: "Para qué sirve" },
    { type: "p", html: "Una valorización fiduciaria bien hecha habilita varios usos en el financiamiento estructurado:" },
    { type: "ul", items: [
      "<b>Fideicomiso de garantía para créditos</b> — sustenta cuánto respaldan los bienes aportados y define la cobertura del préstamo.",
      "<b>Titulización de activos</b> — valoriza los activos que sirven de respaldo a la emisión de valores sobre un patrimonio autónomo.",
      "<b>Aportes a patrimonios autónomos</b> — fija el valor de ingreso de cada bien que el fideicomitente transfiere al patrimonio fideicometido.",
      "<b>Supervisión periódica</b> — actualiza el valor del patrimonio en el tiempo, para que fiduciario y financistas mantengan el control de la garantía.",
      "<b>Due diligence</b> — aporta una cifra independiente para evaluar la operación antes de cerrarla.",
    ] },
    { type: "h3", text: "Qué se necesita" },
    { type: "p", html: "Para valorizar el patrimonio conviene tener a la mano la documentación de cada bien. Por lo general te pediremos:" },
    { type: "ul", items: [
      "<b>Partida o copia literal registral</b> — acredita la titularidad y la situación registral del bien que ingresará al fideicomiso.",
      "<b>Documentación del bien</b> — planos, autovalúo (PU y HR), recibo del impuesto predial o, para activos, facturas y fichas técnicas.",
      "<b>Datos del fideicomiso</b> — tipo de fideicomiso y la relación de bienes a aportar al patrimonio fideicometido.",
    ] },
    { type: "p", html: "Si el fideicomiso incluye maquinaria, equipos u otros bienes de tu negocio, complementamos la valorización con nuestra <a href='/tasaciones/empresas'>tasación de activos fijos para empresas</a>, y puedes revisar el resto de servicios en nuestro hub de <a href='/tasaciones'>tasaciones</a>." },
    { type: "p", html: "¿Vas a constituir o supervisar un fideicomiso y necesitas valorizar el patrimonio? Cuéntanos el tipo de fideicomiso y los bienes por <b>WhatsApp</b> y coordinamos el alcance y la cotización el mismo día, sin compromiso." },
  ],
  form: {
    bullets: [
      "Respuesta el mismo día por WhatsApp",
      "Cotización personalizada según los bienes del fideicomiso",
      "Atención en Lima, Callao y todo el Perú",
    ],
    fields: [
      { type: "text", name: "nombre", label: "Nombre", placeholder: "Tu nombre" },
      {
        type: "text",
        name: "distrito",
        label: "Distrito o ubicación de los bienes",
        placeholder: "Ej. Surco, San Isidro, Callao…",
      },
      {
        type: "select",
        name: "tipo",
        label: "Tipo de fideicomiso",
        options: [
          "Fideicomiso de garantía",
          "Fideicomiso de administración",
          "Fideicomiso de titulización",
          "Otro",
        ],
      },
      {
        type: "select",
        name: "finalidad",
        label: "Bienes a valorizar",
        options: [
          "Inmuebles",
          "Terrenos",
          "Activos / maquinaria",
          "Patrimonio mixto",
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
        q: "¿Qué bienes se valorizan en una tasación fiduciaria?",
        a: "Todos los que integran el patrimonio fideicometido: inmuebles, terrenos, maquinaria, equipos y otros activos que el fideicomitente aporta al fideicomiso de garantía, administración o titulización.",
      },
      {
        q: "¿Los peritos están inscritos?",
        a: "Sí. Nuestros informes los firman peritos inscritos (SBS / REPEV) y se elaboran conforme al Reglamento Nacional de Tasaciones del Perú (R.M. Nº172-2016-VIVIENDA), con valor comercial y de realización.",
      },
      {
        q: "¿Qué documentos necesito?",
        a: "Por lo general: partida o copia literal registral, documentación del bien (planos, PU y HR, predial, o facturas y fichas técnicas para activos) y los datos del fideicomiso. Te confirmamos la lista exacta por WhatsApp.",
      },
      {
        q: "¿Sirve para fideicomiso de garantía y titulización?",
        a: "Sí. La valorización respalda fideicomisos de garantía para créditos, titulización de activos, aportes a patrimonios autónomos y la supervisión periódica del valor del patrimonio.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "El costo depende del tipo y número de bienes, su tamaño y ubicación. Escríbenos con esos datos y te damos una cotización personalizada al momento.",
      },
    ],
  },
  finalCta: {
    title: "Valoriza tu patrimonio fideicometido",
    body: "Envíanos el tipo de fideicomiso y los bienes por WhatsApp y te damos el alcance hoy.",
    button: "Cotiza tu tasación fiduciaria",
  },
  whatsapp: {
    baseMessage:
      "Hola VanguardiaMax, quiero cotizar una *Tasación Fiduciaria* para el patrimonio de un fideicomiso.",
    segment: "tasacion-fiduciaria",
  },
};
