import type { LandingContent } from "@/types/content";
import { DEFAULT_STATS } from "./_shared";

/**
 * Landing B2B para fintech y prestamistas. Datos confirmados por el negocio el
 * 08-11-2026: clientes fintech a nivel nacional; tasaciones para Mibanco de
 * negocios en marcha de mypes en base a la mercadería; staff experto asignado a
 * cada cuenta; todo tipo de bienes; inspección virtual, personalizada (según la
 * regulación de la fintech) y de adjudicados; plazos según el tipo de bien y la
 * solicitud; valores comercial, de realización y de reconstrucción.
 */
export const fintech: LandingContent = {
  slug: "fintech",
  meta: {
    title: "Tasaciones para fintech y prestamistas | VanguardiaMax",
    description:
      "Tasaciones para fintech: valor comercial, de realización y de reconstrucción de garantías, inspección virtual o presencial y staff dedicado en todo el Perú.",
    canonical: "/tasaciones/fintech",
  },
  hero: {
    eyebrow: "Tasaciones para fintech",
    heading: "Garantías bien valorizadas, ",
    headingAccent: "créditos más seguros",
    sub: "Tasamos los bienes que respaldan los créditos de tu fintech —inmuebles, vehículos, maquinaria, mercadería y negocios— con un staff experto asignado a tu cuenta, inspección virtual o presencial según tu política de crédito y cobertura en todo el Perú.",
    primaryCta: { label: "Conversemos sobre tu cartera", whatsapp: true },
    secondaryCta: { label: "Cotiza por formulario", href: "#cotizar" },
    trust: [
      { icon: "shield", label: "Peritos inscritos en la SBS" },
      { icon: "star", label: "Staff dedicado por cuenta" },
      { icon: "check", label: "Cobertura nacional" },
    ],
  },
  heroCard: {
    kind: "cert",
    title: "Informe de Tasación",
    subtitle: "Garantía · Crédito fintech",
    rows: [
      { k: "Valor comercial", v: "S/ ———" },
      { k: "Valor de realización", v: "S/ ———" },
      { k: "Valor de reconstrucción", v: "S/ ———" },
    ],
    sealText: "GARANTÍA SUSTENTADA · DOBLE VISADO · ",
    foot: "Conforme al Reglamento Nacional de Tasaciones · SBS",
  },
  stats: DEFAULT_STATS,
  pain: {
    eyebrow: "El problema",
    heading: "Una garantía mal valorizada es riesgo que no se ve en el scoring",
    body: "Si el valor de la garantía está inflado, el préstamo queda descubierto; si está subvalorado, pierdes clientes buenos. Y cuando toca recuperar, lo que importa no es cuánto vale el bien, sino cuánto se puede obtener vendiéndolo rápido. Una tasación técnica te da las tres cifras que necesitas para decidir.",
  },
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "Un proveedor de tasaciones pensado para el ritmo de una fintech",
    items: [
      {
        num: "01",
        title: "Staff experto por cuenta",
        body: "Asignamos un equipo de profesionales altamente calificados a cada fintech, que conoce tu política de crédito y tus formatos.",
      },
      {
        num: "02",
        title: "Inspección a tu medida",
        body: "Inspección virtual, inspección presencial personalizada según la regulación de tu fintech e inspección de bienes adjudicados.",
      },
      {
        num: "03",
        title: "Todo tipo de bienes",
        body: "Inmuebles, vehículos, maquinaria, mercadería y negocios en marcha de mypes, en todo el Perú.",
      },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    heading: "Tres pasos para integrar las tasaciones a tu operación",
    items: [
      {
        num: "1",
        title: "Definimos el alcance",
        body: "Revisamos tu política de crédito, los tipos de bien, la modalidad de inspección y el formato de informe que necesitas.",
      },
      {
        num: "2",
        title: "Asignamos tu staff",
        body: "Un equipo experto recibe tus solicitudes, coordina la inspección y te mantiene al tanto de cada caso.",
      },
      {
        num: "3",
        title: "Recibes el informe",
        body: "Con valor comercial, de realización y de reconstrucción, en plazos acordes al tipo de bien y a la solicitud.",
      },
    ],
  },
  seoContent: [
    { type: "h2", text: "¿Qué son las tasaciones para fintech?" },
    { type: "p", html: "Las <b>tasaciones para fintech</b> son los informes técnicos que valorizan los bienes que respaldan los créditos de una fintech o de una empresa de préstamos —inmuebles, vehículos, maquinaria, mercadería o negocios— para decidir cuánto prestar, controlar el riesgo de la cartera y saber cuánto se podría recuperar si el bien debe venderse. Las elabora un perito tasador independiente conforme al Reglamento Nacional de Tasaciones, con los valores que cada etapa del crédito necesita." },
    { type: "h2", text: "¿Qué valores entrega el informe?" },
    { type: "ul", items: [
      "<b>Valor comercial</b> — el precio que el bien alcanzaría en el mercado en condiciones normales de venta. Es la referencia para evaluar la garantía.",
      "<b>Valor de realización</b> — también llamado valor de venta rápida o valor de oportunidad: lo que se obtendría vendiendo el bien en poco tiempo. Es la cifra que mide cuánto cubre realmente la garantía si el crédito entra en mora.",
      "<b>Valor de reconstrucción</b> — lo que costaría volver a construir la edificación. Sirve para fijar la suma asegurada de la garantía y proteger la cartera ante un siniestro.",
    ] },
    { type: "p", html: "Con las tres cifras, el área de riesgos puede fijar el monto máximo del préstamo, exigir el seguro correcto y estimar la recuperación esperada. Explicamos estos conceptos en <a href='/articulos/tipos-de-tasaciones-en-el-peru'>tipos de tasaciones en el Perú</a> y en <a href='/articulos/valor-de-reposicion'>valor de reposición</a>." },
    { type: "h2", text: "¿Qué bienes tasamos para fintech?" },
    { type: "ul", items: [
      "<b>Inmuebles</b> — casas, departamentos, terrenos, locales y almacenes que garantizan préstamos, con el mismo rigor de una <a href='/tasaciones/hipotecaria'>tasación hipotecaria</a>.",
      "<b>Vehículos y maquinaria</b> — autos, camiones, flotas y maquinaria pesada en garantía, como en nuestra <a href='/tasaciones/vehicular'>tasación de vehículos y maquinarias</a>.",
      "<b>Mercadería y negocios en marcha de mypes</b> — valorizamos el negocio a partir de su mercadería, como lo hacemos para Mibanco en todo el Perú. Lo explicamos en <a href='/articulos/tasacion-de-negocio-en-marcha'>tasación de negocio en marcha</a>.",
      "<b>Equipos y activos de empresas</b> — para créditos a pymes con <a href='/tasaciones/activos-fijos'>activos fijos</a> en garantía.",
      "<b>Bienes adjudicados</b> — inspección y tasación de los bienes recuperados, para definir el precio de salida y el registro contable.",
    ] },
    { type: "h2", text: "Modalidades de inspección" },
    { type: "ul", items: [
      "<b>Inspección virtual</b> — el perito revisa el bien a distancia, con el cliente guiando el recorrido. Útil para créditos de menor monto o zonas alejadas, cuando la política de la fintech lo admite.",
      "<b>Inspección personalizada</b> — visita presencial con el alcance y los controles que exige la regulación o la política de crédito de cada fintech.",
      "<b>Inspección para adjudicados</b> — verificación del estado real del bien recuperado antes de venderlo o provisionarlo.",
    ] },
    { type: "h2", text: "¿En cuánto tiempo se entrega la tasación?" },
    { type: "p", html: "Los plazos son acordes al tipo de bien y a la solicitud: no toma lo mismo valorizar un vehículo que un local con mercadería o un inmueble en provincia. Al definir el alcance con tu equipo acordamos los tiempos para cada tipo de operación." },
    { type: "h2", text: "Un equipo dedicado a tu cuenta" },
    { type: "p", html: "Trabajamos con fintech a nivel nacional. A cada cuenta le asignamos un <b>staff de profesionales altamente calificados</b> que conoce tu política de crédito, tus formatos y tus plazos. Nuestros peritos están inscritos en la <b>SBS (REPEV)</b> y en el <b>REPEJ</b> del Poder Judicial, contamos con tasadores acreditados por <b>RICS</b>, cada informe lleva <b>doble visado</b> y suman más de <b>10 mil tasaciones</b> realizadas. Si tu cartera incluye bienes en fideicomiso, revisa también nuestra <a href='/tasaciones/fiduciarias'>tasación fiduciaria</a>." },
    { type: "p", html: "¿Tu fintech necesita un proveedor de tasaciones? Escríbenos por <b>WhatsApp</b> con el tipo de bienes y el volumen aproximado de solicitudes, y te proponemos el alcance del servicio." },
  ],
  form: {
    bullets: [
      "Respuesta el mismo día por WhatsApp",
      "Propuesta según tu cartera y tu política de crédito",
      "Atención en Lima, Callao y todo el Perú",
    ],
    fields: [
      { type: "text", name: "nombre", label: "Nombre", placeholder: "Tu nombre" },
      { type: "text", name: "empresa", label: "Empresa", placeholder: "Nombre de tu fintech o empresa" },
      {
        type: "select",
        name: "tipo",
        label: "Bienes a tasar",
        options: [
          "Inmuebles",
          "Vehículos y maquinaria",
          "Mercadería / negocio en marcha",
          "Bienes adjudicados",
          "Varios tipos de bien",
          "Otro",
        ],
      },
      {
        type: "select",
        name: "finalidad",
        label: "Volumen mensual aproximado",
        options: ["Menos de 10 tasaciones", "10 a 50 tasaciones", "Más de 50 tasaciones", "Aún no lo sé"],
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
        q: "¿Qué es una tasación para fintech?",
        a: "Es el informe técnico que valoriza el bien que respalda un crédito de una fintech o empresa de préstamos —inmueble, vehículo, maquinaria, mercadería o negocio— para decidir cuánto prestar, controlar el riesgo y estimar la recuperación si el bien debe venderse.",
      },
      {
        q: "¿Qué valores incluye el informe?",
        a: "El valor comercial, el valor de realización (también llamado valor de venta rápida o de oportunidad) y el valor de reconstrucción de la edificación.",
      },
      {
        q: "¿Qué tipos de bienes tasan para fintech?",
        a: "Todo tipo de bienes: inmuebles, vehículos, maquinaria, equipos, mercadería y negocios en marcha de mypes, además de los bienes adjudicados.",
      },
      {
        q: "¿Hacen inspecciones virtuales?",
        a: "Sí. Ofrecemos inspección virtual, inspección presencial personalizada según la regulación o la política de crédito de cada fintech, e inspección de bienes adjudicados.",
      },
      {
        q: "¿En cuánto tiempo entregan las tasaciones?",
        a: "Los plazos dependen del tipo de bien y de la solicitud. Al definir el servicio con tu equipo acordamos los tiempos para cada tipo de operación.",
      },
      {
        q: "¿Tasan negocios de mypes en base a su mercadería?",
        a: "Sí. Realizamos tasaciones de negocios en marcha de mypes a partir de su mercadería, como las que hacemos para Mibanco en todo el Perú.",
      },
      {
        q: "¿Atienden fintech fuera de Lima?",
        a: "Sí. Trabajamos con fintech a nivel nacional y asignamos un staff experto a cada cuenta.",
      },
    ],
  },
  finalCta: {
    title: "Valoriza las garantías de tu cartera con respaldo técnico",
    body: "Cuéntanos por WhatsApp qué bienes respaldan tus créditos y el volumen aproximado, y te proponemos el servicio.",
    button: "Conversemos sobre tu cartera",
  },
  whatsapp: {
    baseMessage:
      "Hola VanguardiaMax, trabajo en una *fintech* y quiero información sobre sus tasaciones para garantías de créditos.",
    segment: "tasacion-fintech",
  },
};
