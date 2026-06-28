import type { LandingContent } from "@/types/content";
import { DEFAULT_STATS } from "./_shared";

export const agricolas: LandingContent = {
  slug: "agricolas",
  meta: {
    title: "Tasación de Predios Agrícolas en Perú | VanguardiaMax",
    description:
      "Tasación de predios agrícolas, fundos y parcelas: valor comercial y de realización de la tierra, cultivos, riego e infraestructura, conforme al Reglamento Nacional de Tasaciones. Cotiza por WhatsApp.",
    canonical: "/tasaciones/agricolas",
  },
  hero: {
    eyebrow: "Tasación de predios agrícolas",
    heading: "Conoce el valor real de tu ",
    headingAccent: "fundo o parcela",
    sub: "Valorizamos terrenos agrícolas, cultivos, infraestructura de riego y construcciones rurales. Valor comercial y de realización conforme al Reglamento Nacional de Tasaciones, listo para tu banco o caja.",
    primaryCta: { label: "Cotiza tu tasación agrícola", whatsapp: true },
    secondaryCta: { label: "Cotiza por formulario", href: "#cotizar" },
    trust: [
      { icon: "shield", label: "Conforme al Reglamento Nacional" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Peritos en predios rurales" },
    ],
  },
  heroCard: {
    kind: "cert",
    title: "Informe de Tasación",
    subtitle: "Predio agrícola · Valor comercial y de realización",
    rows: [
      { k: "Valor de la tierra", v: "S/ ———" },
      { k: "Cultivos e infraestructura", v: "S/ ———" },
    ],
    sealText: "TASACIÓN DE PREDIOS AGRÍCOLAS · REGLAMENTO NACIONAL · ",
    foot: "Conforme a R.M. Nº172-2016-VIVIENDA",
  },
  stats: DEFAULT_STATS,
  pain: {
    eyebrow: "El problema",
    heading: "Tu fundo vale más de lo que crees, pero hay que sustentarlo",
    body: "Bancos, cajas y notarías exigen un valor técnico que considere la tierra, los cultivos permanentes y el riego. Una tasación incompleta subvalora tu predio y frena tu crédito o tu venta. Te entregamos un informe sólido que respalda cada hectárea.",
  },
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "Valorizamos todo lo que produce tu campo",
    items: [
      {
        num: "01",
        title: "Tierra y cultivos",
        body: "Valoramos el suelo agrícola y las plantaciones permanentes: frutales, palta, uva, espárrago y más, según su estado productivo.",
      },
      {
        num: "02",
        title: "Riego e infraestructura",
        body: "Pozos, reservorios, sistemas de riego tecnificado y construcciones rurales suman al valor final de tu predio.",
      },
      {
        num: "03",
        title: "Aceptada por entidades",
        body: "Valor comercial y de realización conforme al Reglamento Nacional de Tasaciones, reconocido por bancos y cajas para crédito agrícola.",
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
        body: "Ubicación, hectáreas, tipo de cultivo y para qué necesitas la tasación. Te damos el alcance el mismo día.",
      },
      {
        num: "2",
        title: "Inspección en campo",
        body: "Un perito visita el fundo y evalúa tierra, cultivos, riego e infraestructura según el Reglamento Nacional de Tasaciones.",
      },
      {
        num: "3",
        title: "Informe sustentado",
        body: "Recibes tu informe con valor comercial y de realización, listo para presentar al banco, notaría o juzgado.",
      },
    ],
  },
  seoContent: [
    { type: "h2", text: "¿Qué es la tasación de predios agrícolas?" },
    { type: "p", html: "La <b>tasación de predios agrícolas</b> es la valorización técnica de un terreno rural destinado a la actividad agropecuaria: fundos, parcelas, chacras y campos de cultivo. A diferencia de la valorización de un inmueble urbano, la <b>tasación agrícola</b> no solo mide la tierra, sino todo lo que la hace productiva. El informe entrega el <b>valor comercial</b>, que refleja cuánto vale el predio en condiciones normales de mercado, y el <b>valor de realización</b>, una estimación más conservadora para una venta rápida o forzada, ambos elaborados conforme al Reglamento Nacional de Tasaciones del Perú (R.M. Nº172-2016-VIVIENDA)." },
    { type: "h3", text: "Qué se valoriza en un predio agrícola" },
    { type: "p", html: "Una <b>tasación de terrenos agrícolas</b> bien hecha considera varios componentes que, sumados, determinan el valor del fundo:" },
    { type: "ul", items: [
      "<b>La tierra</b> — calidad y aptitud del suelo, clase de tierra, topografía y acceso a vías.",
      "<b>Los cultivos y plantaciones permanentes</b> — frutales, palta, uva, espárrago, cítricos u otros, valorados según su edad y estado productivo.",
      "<b>La infraestructura de riego</b> — pozos, reservorios, canales y sistemas de riego tecnificado por goteo o aspersión.",
      "<b>Las construcciones rurales</b> — almacenes, casetas, packing, cercos y demás instalaciones del predio.",
    ] },
    { type: "h3", text: "Para qué sirve la valorización de fundos" },
    { type: "p", html: "La <b>valorización de fundos</b> se solicita en muchos escenarios. El más común es el <b>crédito agrícola</b>: bancos y cajas piden una tasación para aceptar el predio como garantía de un préstamo de campaña o de capital de trabajo. También es necesaria en la compraventa de fundos, en herencias y sucesiones, en la división de bienes entre copropietarios, en procesos de expropiación o servidumbre, y para contratar seguros agrarios que cubran el valor real de la inversión." },
    { type: "h3", text: "Qué se necesita para tasar tu predio" },
    { type: "p", html: "Para agilizar la <b>tasación de terrenos agrícolas</b> conviene tener a la mano la partida o copia literal del predio, los planos disponibles y la ubicación con coordenadas o referencias claras del fundo. Si te falta algún documento, escríbenos igual: te indicamos cómo obtenerlo y confirmamos la lista exacta según tu caso. Si además tienes un inmueble urbano que respaldar, también realizamos <a href='/tasaciones/hipotecaria'>tasación hipotecaria</a> y otros servicios que puedes revisar en nuestro hub de <a href='/tasaciones'>tasaciones</a>." },
    { type: "p", html: "¿Quieres conocer cuánto vale tu fundo o parcela? Cuéntanos la ubicación, las hectáreas y el tipo de cultivo por <b>WhatsApp</b> y te damos el alcance y la cotización el mismo día, sin compromiso." },
  ],
  form: {
    bullets: [
      "Respuesta el mismo día por WhatsApp",
      "Cotización personalizada según tu predio",
      "Atención en todas las regiones del Perú",
    ],
    fields: [
      { type: "text", name: "nombre", label: "Nombre", placeholder: "Tu nombre" },
      {
        type: "text",
        name: "ubicacion",
        label: "Ubicación del predio",
        placeholder: "Ej. Ica, La Libertad, Piura…",
      },
      {
        type: "select",
        name: "tipo",
        label: "Tipo de predio o cultivo",
        options: ["Terreno agrícola sin cultivo", "Fundo con frutales", "Parcela / chacra", "Campo de cultivo (hortalizas)", "Plantación permanente", "Otro"],
      },
      {
        type: "select",
        name: "finalidad",
        label: "Finalidad",
        options: [
          "Crédito agrícola / garantía",
          "Compra o venta de fundo",
          "Herencia / sucesión",
          "Expropiación o servidumbre",
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
        q: "¿Qué se valoriza en la tasación de un predio agrícola?",
        a: "Se valoriza la tierra, los cultivos y plantaciones permanentes, la infraestructura de riego (pozos, reservorios, riego tecnificado) y las construcciones rurales, entregando valor comercial y de realización.",
      },
      {
        q: "¿La tasación sirve para un crédito agrícola en el banco?",
        a: "Sí. Elaboramos la tasación conforme al Reglamento Nacional de Tasaciones del Perú (R.M. Nº172-2016-VIVIENDA), con valor comercial y de realización reconocidos por bancos y cajas para crédito agrícola.",
      },
      {
        q: "¿Qué documentos necesito?",
        a: "Por lo general: partida registral o copia literal, planos disponibles del predio y la ubicación con coordenadas o referencias. Te confirmamos la lista exacta según tu caso por WhatsApp.",
      },
      {
        q: "¿Atienden fundos fuera de Lima?",
        a: "Sí. Tasamos predios agrícolas en todas las regiones del Perú: Ica, La Libertad, Piura, Lambayeque, Arequipa y más. Coordinamos la visita del perito al campo.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "El costo depende del tamaño del predio, el tipo de cultivo y la ubicación. Escríbenos con esos datos y te damos una cotización personalizada al momento.",
      },
    ],
  },
  finalCta: {
    title: "Conoce el valor real de tu fundo",
    body: "Envíanos la ubicación, las hectáreas y el tipo de cultivo por WhatsApp y te damos el alcance hoy.",
    button: "Cotiza tu tasación agrícola",
  },
  whatsapp: {
    baseMessage:
      "Hola VanguardiaMax, quiero cotizar una *Tasación de Predios Agrícolas* para mi fundo o parcela.",
    segment: "tasacion-agricola",
  },
};
