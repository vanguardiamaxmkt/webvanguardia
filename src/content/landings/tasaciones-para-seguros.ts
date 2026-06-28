import type { LandingContent } from "@/types/content";
import { DEFAULT_STATS } from "./_shared";

export const tasacionesParaSeguros: LandingContent = {
  slug: "para-seguros",
  meta: {
    title: "Tasación para Seguros: Valor Asegurable y Suma Asegurada | VanguardiaMax",
    description:
      "Tasación para seguros que define la suma asegurada correcta según el valor de reposición a nuevo. Evita el infraseguro y la regla proporcional, y sustenta tus siniestros. Cotiza por WhatsApp.",
    canonical: "/tasaciones/para-seguros",
  },
  hero: {
    eyebrow: "Tasación para seguros",
    heading: "La suma asegurada correcta, ",
    headingAccent: "sin infraseguro",
    sub: "Determinamos el valor asegurable de tu inmueble, maquinaria o activos según el valor de reposición a nuevo. Contrata tu póliza con la suma asegurada justa y evita la regla proporcional.",
    primaryCta: { label: "Cotiza tu tasación para seguros", whatsapp: true },
    secondaryCta: { label: "Cotiza por formulario", href: "#cotizar" },
    trust: [
      { icon: "shield", label: "Perito certificado" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Informe sustentado" },
    ],
  },
  heroCard: {
    kind: "cert",
    title: "Informe de Valor Asegurable",
    subtitle: "Valor de reposición · Suma asegurada",
    rows: [
      { k: "Valor de reposición", v: "S/ ———" },
      { k: "Suma asegurada", v: "S/ ———" },
    ],
    sealText: "VALOR ASEGURABLE · PERITO CERTIFICADO · ",
    foot: "Conforme al Reglamento Nacional de Tasaciones · SBS",
  },
  stats: DEFAULT_STATS,
  pain: {
    eyebrow: "El problema",
    heading: "Si aseguras por menos de lo que vale, la aseguradora te paga menos",
    body: "El infraseguro activa la regla proporcional: ante un siniestro, la indemnización se reduce en la misma proporción en que estabas subasegurado. Una tasación técnica fija la suma asegurada justa y protege tu bolsillo.",
  },
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "El valor correcto, antes y después del siniestro",
    items: [
      {
        num: "01",
        title: "Suma asegurada justa",
        body: "Calculamos el valor de reposición a nuevo y el valor real para que contrates ni más ni menos cobertura de la que necesitas.",
      },
      {
        num: "02",
        title: "Sin regla proporcional",
        body: "Al asegurar por el valor correcto evitas el infraseguro y que la aseguradora reduzca tu indemnización por subaseguro.",
      },
      {
        num: "03",
        title: "Sustento de siniestros",
        body: "Un informe pericial respalda tu reclamo ante la aseguradora y agiliza el pago de la indemnización.",
      },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    heading: "Tres pasos, sin vueltas",
    items: [
      {
        num: "1",
        title: "Cuéntanos qué aseguras",
        body: "Inmueble, edificación, maquinaria, contenido o activos. Te damos el alcance y la cotización el mismo día.",
      },
      {
        num: "2",
        title: "Inspección y análisis",
        body: "Un perito evalúa el bien y determina su valor de reposición a nuevo y su valor real o actual.",
      },
      {
        num: "3",
        title: "Informe de valor asegurable",
        body: "Recibes el informe con la suma asegurada recomendada, listo para contratar o renovar tu póliza.",
      },
    ],
  },
  seoContent: [
    { type: "h2", text: "¿Qué es una tasación para seguros?" },
    { type: "p", html: "La <b>tasación para seguros</b> es la determinación técnica del <b>valor asegurable</b> de un bien —un inmueble, una edificación, maquinaria, el contenido de un local o los activos de una empresa— con el fin de contratar o renovar una póliza con la <b>suma asegurada</b> correcta. En lugar de declarar una cifra al ojo, un perito valoriza el bien para que la cobertura que contratas refleje realmente lo que costaría reponerlo. Esa cifra es la que protege tu patrimonio el día que ocurre un siniestro." },
    { type: "p", html: "El error más común es asegurar por un monto que no corresponde al valor real del bien. Tanto quedarse corto como pasarse tiene consecuencias económicas, y por eso conviene partir de una <b>tasación de valor de reposición</b> elaborada por un profesional, conforme al Reglamento Nacional de Tasaciones del Perú." },
    { type: "h3", text: "Valor de reposición vs. valor real" },
    { type: "p", html: "El <b>valor de reposición a nuevo</b> es cuánto costaría volver a comprar o reconstruir el bien hoy, sin descontar el uso ni la antigüedad: es el monto que necesitarías para reemplazarlo por uno equivalente nuevo. El <b>valor real o actual</b>, en cambio, parte del valor de reposición y le descuenta la depreciación por uso, edad y estado de conservación. La póliza puede contratarse sobre una u otra base, y definir cuál corresponde a tu caso es justamente parte del trabajo de la tasación, porque de ello depende cuánto recibirás como indemnización." },
    { type: "h3", text: "Por qué evitar el infraseguro" },
    { type: "p", html: "Hay <b>infraseguro</b> cuando aseguras un bien por menos de lo que realmente vale. El problema aparece al momento del siniestro: las aseguradoras aplican la <b>regla proporcional</b>, según la cual la indemnización se reduce en la misma proporción en que el bien estaba subasegurado. En la práctica, si aseguraste por la mitad de su valor, ante una pérdida la compañía te paga aproximadamente la mitad de lo que te correspondería, aunque el daño haya sido total. En el otro extremo, el <b>sobreseguro</b> tampoco conviene: pagas una prima más alta por una cobertura que nunca recibirás, porque nadie te indemniza por encima del valor del bien. Una tasación técnica te ubica en el punto justo y elimina ambos riesgos." },
    { type: "h3", text: "Para qué sirve" },
    { type: "p", html: "Una tasación para seguros te sirve para <b>contratar o renovar tu póliza</b> con una suma asegurada justa, para <b>evitar el infraseguro</b> y la aplicación de la regla proporcional, y para <b>sustentar un siniestro</b> cuando necesitas demostrarle a la aseguradora cuánto valía el bien dañado o perdido. También es clave para que las empresas valoricen correctamente su contenido y sus activos antes de asegurarlos. Si necesitas un inventario valorizado de tu planta o equipos, complementa este servicio con nuestra <a href='/tasaciones/activos-fijos'>tasación de activos fijos</a>." },
    { type: "h3", text: "Qué bienes se tasan" },
    { type: "p", html: "Tasamos para fines de seguro <b>inmuebles y edificaciones</b> (viviendas, locales, plantas industriales), <b>maquinaria y equipos</b>, el <b>contenido</b> de oficinas, almacenes y comercios, así como los <b>activos</b> de una empresa en su conjunto. Para flotas y unidades de transporte también realizamos <a href='/tasaciones/vehicular'>tasación vehicular</a>, útil para definir el valor asegurado de cada vehículo." },
    { type: "p", html: "¿Vas a contratar o renovar una póliza y quieres asegurarte de no quedar subasegurado? Cuéntanos qué bien necesitas valorizar por <b>WhatsApp</b> y te damos el alcance y la cotización el mismo día, sin compromiso." },
  ],
  form: {
    bullets: [
      "Respuesta el mismo día por WhatsApp",
      "Cotización personalizada según tu bien",
      "Atención en Lima, Callao y todo el Perú",
    ],
    fields: [
      { type: "text", name: "nombre", label: "Nombre", placeholder: "Tu nombre" },
      {
        type: "text",
        name: "ubicacion",
        label: "Ubicación del bien",
        placeholder: "Ej. Surco, Callao, Arequipa…",
      },
      {
        type: "select",
        name: "tipo",
        label: "Tipo de bien a asegurar",
        options: [
          "Inmueble o edificación",
          "Maquinaria y equipos",
          "Contenido (oficina, local, almacén)",
          "Activos de empresa",
          "Vehículo o flota",
          "Otro",
        ],
      },
      {
        type: "select",
        name: "finalidad",
        label: "Finalidad",
        options: [
          "Contratar una nueva póliza",
          "Renovar póliza existente",
          "Sustentar un siniestro",
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
        q: "¿Qué es el valor asegurable?",
        a: "Es el valor que debe declararse como suma asegurada en la póliza. Se calcula a partir del valor de reposición a nuevo del bien y, según el caso, de su valor real o actual descontando la depreciación.",
      },
      {
        q: "¿Qué pasa si aseguro por menos de lo que vale?",
        a: "Estarías en infraseguro y la aseguradora aplicaría la regla proporcional: ante un siniestro, la indemnización se reduce en la misma proporción en que estabas subasegurado, así que recibirías menos de lo esperado.",
      },
      {
        q: "¿Qué bienes pueden tasarse para seguros?",
        a: "Inmuebles y edificaciones, maquinaria y equipos, el contenido de locales y almacenes, los activos de una empresa y también vehículos o flotas.",
      },
      {
        q: "¿La tasación sirve para sustentar un siniestro?",
        a: "Sí. Un informe pericial respalda tu reclamo ante la aseguradora al demostrar cuánto valía el bien dañado o perdido, lo que ayuda a agilizar el pago de la indemnización.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "El costo depende del tipo de bien, su tamaño, valor y ubicación. Escríbenos con esos datos por WhatsApp y te damos una cotización personalizada al momento.",
      },
    ],
  },
  finalCta: {
    title: "Asegura por el valor correcto",
    body: "Envíanos qué bien necesitas valorizar por WhatsApp y te damos el alcance y la cotización hoy.",
    button: "Cotiza tu tasación para seguros",
  },
  whatsapp: {
    baseMessage:
      "Hola VanguardiaMax, quiero cotizar una *Tasación para Seguros* y conocer el valor asegurable de mi bien.",
    segment: "tasacion-seguros",
  },
};
