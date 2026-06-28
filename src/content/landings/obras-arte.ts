import type { LandingContent } from "@/types/content";
import { DEFAULT_STATS } from "./_shared";

export const obrasArte: LandingContent = {
  slug: "obras-arte",
  meta: {
    title: "Tasación de Obras de Arte y Antigüedades en Perú | VanguardiaMax",
    description:
      "Valuación de obras de arte por peritos especializados: pinturas, esculturas, antigüedades y colecciones. Evaluamos autoría, autenticidad y procedencia, con valor de mercado y de reposición. Cotiza por WhatsApp.",
    canonical: "/tasaciones/obras-arte",
  },
  hero: {
    eyebrow: "Tasación de obras de arte",
    heading: "Conoce el valor real de tus obras de arte ",
    headingAccent: "y antigüedades",
    sub: "Valuación de obras de arte y bienes de colección realizada por peritos especializados. Determinamos valor de mercado y valor de reposición para seguros, herencias, compraventa y subastas.",
    primaryCta: { label: "Cotiza tu tasación de arte", whatsapp: true },
    secondaryCta: { label: "Cotiza por formulario", href: "#cotizar" },
    trust: [
      { icon: "shield", label: "Autenticado por la SBS" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Perito especializado" },
    ],
  },
  heroCard: {
    kind: "cert",
    title: "Informe de Tasación",
    subtitle: "Valor de mercado · Valor de reposición",
    rows: [
      { k: "Valor de mercado", v: "S/ ———" },
      { k: "Valor de reposición", v: "S/ ———" },
    ],
    sealText: "TASACIÓN DE ARTE · PERITO ESPECIALIZADO · ",
    foot: "Autoría · Autenticidad · Procedencia · Estado de conservación",
  },
  stats: DEFAULT_STATS,
  pain: {
    eyebrow: "El problema",
    heading: "Sin una valuación profesional, no sabes cuánto valen realmente tus obras",
    body: "Asegurar, heredar o vender una colección sin un informe técnico te expone a sumas mal calculadas y disputas. Te entregamos una tasación de obras de arte hecha por peritos, con valor de mercado y de reposición claramente sustentados.",
  },
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "El valor correcto, con respaldo técnico",
    items: [
      {
        num: "01",
        title: "Peritos especializados",
        body: "Valuación de obras de arte y antigüedades a cargo de peritos que evalúan autoría, autenticidad y procedencia.",
      },
      {
        num: "02",
        title: "Doble criterio de valor",
        body: "Informe con valor de mercado y valor de reposición, útil tanto para venta como para suma asegurada.",
      },
      {
        num: "03",
        title: "Informe sustentado",
        body: "Cada tasación documenta antigüedad, estado de conservación y comparables de mercado para que tu cifra tenga respaldo.",
      },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    heading: "Tres pasos, sin vueltas",
    items: [
      {
        num: "1",
        title: "Cuéntanos de la obra",
        body: "Tipo de pieza, autor si lo conoces y para qué necesitas la tasación. Te damos el alcance el mismo día.",
      },
      {
        num: "2",
        title: "Evaluación del perito",
        body: "Un perito especializado examina autoría, autenticidad, procedencia, antigüedad y estado de conservación.",
      },
      {
        num: "3",
        title: "Informe de valor",
        body: "Recibes tu informe con valor de mercado y de reposición, listo para tu seguro, herencia o venta.",
      },
    ],
  },
  seoContent: [
    { type: "h2", text: "¿Qué es la tasación de obras de arte?" },
    { type: "p", html: "La <b>tasación de obras de arte</b> es la valorización profesional de pinturas, cuadros, esculturas, antigüedades, objetos de valor y colecciones completas, realizada por <b>peritos especializados</b>. A diferencia de un avalúo improvisado, esta <b>valuación de obras de arte</b> combina criterio técnico, histórico y de mercado para determinar cuánto vale realmente una pieza en un momento determinado. El resultado es un informe que entrega dos cifras clave: el <b>valor de mercado</b>, es decir, cuánto se obtendría por la obra en condiciones normales de venta, y el <b>valor de reposición</b>, que estima cuánto costaría adquirir una pieza equivalente y que suele usarse para definir la suma asegurada." },
    { type: "h3", text: "Qué evalúa el perito" },
    { type: "p", html: "La <b>tasación de arte y antigüedades</b> no se limita a observar la pieza: el perito analiza varios factores que en conjunto determinan su valor. Los principales son:" },
    { type: "ul", items: [
      "<b>Autoría y autenticidad</b> — quién creó la obra y si es genuina, atribuida o una reproducción.",
      "<b>Procedencia</b> — el historial de propiedad y exhibición, que respalda la legitimidad de la pieza.",
      "<b>Antigüedad</b> — la época y el período al que pertenece el bien, clave en antigüedades y objetos de colección.",
      "<b>Estado de conservación</b> — restauraciones, daños o intervenciones que suman o restan valor.",
      "<b>Mercado</b> — comparables, demanda y referencias de subastas y galerías para situar el precio.",
    ] },
    { type: "h3", text: "Para qué sirve" },
    { type: "p", html: "Una <b>valuación de obras de arte</b> profesional es necesaria en muchos escenarios. El más frecuente es la contratación de <b>seguros</b>, donde la tasación fija la suma asegurada de la pieza o de toda la colección. También es indispensable en <b>herencias y sucesiones</b>, para repartir bienes de forma justa, y en <b>compraventa y subastas</b>, donde compradores y vendedores necesitan una referencia de valor confiable. Además, se utiliza para constituir garantías, sustentar donaciones y resolver el reparto de bienes entre las partes. Si necesitas valorizar otros bienes, revisa también nuestras <a href='/tasaciones'>otras tasaciones</a>." },
    { type: "h3", text: "Qué se necesita para la tasación" },
    { type: "p", html: "Para avanzar con la tasación conviene reunir información de la pieza. Por lo general te pediremos <b>fotografías</b> nítidas del frente, el reverso y las firmas o marcas, además de los <b>certificados de autenticidad y de procedencia</b> si existen, facturas de compra, catálogos o cualquier documento que respalde la historia de la obra. Si no cuentas con algún documento, no hay problema: el perito evalúa la pieza igual y te indica cómo complementar la información cuando sea posible." },
    { type: "p", html: "¿Quieres saber cuánto valen tus obras o tu colección? Cuéntanos qué piezas tienes y para qué necesitas la tasación por <b>WhatsApp</b> y te damos el alcance y la cotización el mismo día, sin compromiso." },
  ],
  form: {
    bullets: [
      "Respuesta el mismo día por WhatsApp",
      "Cotización personalizada según tu obra o colección",
      "Atención en Lima, Callao y todo el Perú",
    ],
    fields: [
      { type: "text", name: "nombre", label: "Nombre", placeholder: "Tu nombre" },
      {
        type: "text",
        name: "obra",
        label: "Obra o colección",
        placeholder: "Ej. Óleo, escultura, antigüedad…",
      },
      {
        type: "select",
        name: "tipo",
        label: "Tipo de pieza",
        options: ["Pintura / cuadro", "Escultura", "Antigüedad", "Objeto de colección", "Colección completa", "Otro"],
      },
      {
        type: "select",
        name: "finalidad",
        label: "Finalidad",
        options: [
          "Seguro / suma asegurada",
          "Herencia o sucesión",
          "Compra o venta / subasta",
          "Garantía o donación",
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
        q: "¿Qué tipo de obras tasan?",
        a: "Tasamos pinturas y cuadros, esculturas, antigüedades, objetos de valor y colecciones completas. Si tienes una pieza particular, escríbenos y confirmamos si está dentro de nuestro alcance.",
      },
      {
        q: "¿Qué necesito para la tasación?",
        a: "Por lo general fotografías nítidas de la pieza (frente, reverso y firmas) y, si existen, certificados de autenticidad y de procedencia, facturas o catálogos. Te confirmamos la lista exacta según tu caso por WhatsApp.",
      },
      {
        q: "¿Qué valores entrega el informe?",
        a: "El informe incluye valor de mercado, que refleja cuánto se obtendría en una venta normal, y valor de reposición, que suele usarse para definir la suma asegurada.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "El costo depende del tipo de pieza, su complejidad y el tamaño de la colección. Escríbenos con esos datos y te damos una cotización personalizada al momento.",
      },
      {
        q: "¿La tasación sirve para mi seguro o herencia?",
        a: "Sí. Nuestras tasaciones de obras de arte se utilizan para contratar seguros, definir sumas aseguradas, herencias y sucesiones, compraventa, subastas, garantías y donaciones.",
      },
    ],
  },
  finalCta: {
    title: "Conoce el valor de tus obras esta semana",
    body: "Envíanos qué piezas tienes y para qué necesitas la tasación por WhatsApp y te damos el alcance hoy.",
    button: "Cotiza tu tasación de arte",
  },
  whatsapp: {
    baseMessage:
      "Hola VanguardiaMax, quiero cotizar una *Tasación de Obras de Arte* para mis piezas o colección.",
    segment: "tasacion-obras-arte",
  },
};
