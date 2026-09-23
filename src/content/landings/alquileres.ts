import type { LandingContent } from "@/types/content";
import { DEFAULT_STATS } from "./_shared";

export const alquileres: LandingContent = {
  slug: "alquiler",
  meta: {
    title: "Merced conductiva y tasación de alquiler | VanguardiaMax",
    description:
      "Qué es la merced conductiva, cómo se calcula y un ejemplo en soles. Tasación de alquiler con sustento técnico para tu contrato. Cotiza por WhatsApp.",
    canonical: "/tasaciones/alquiler",
  },
  hero: {
    eyebrow: "Tasación de alquileres y renta",
    heading: "Cuánto renta de verdad ",
    headingAccent: "tu inmueble",
    sub: "Estudio de merced conductiva y valor de alquiler de mercado, con sustento técnico. Para arrendar al precio justo, renovar contratos o respaldar un proceso.",
    primaryCta: { label: "Cotiza tu estudio de renta", whatsapp: true },
    secondaryCta: { label: "Cotiza por formulario", href: "#cotizar" },
    trust: [
      { icon: "shield", label: "Autenticado por la SBS" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Doble visado" },
    ],
  },
  heroCard: {
    kind: "cert",
    title: "Estudio de Renta",
    subtitle: "Merced conductiva de mercado",
    rows: [
      { k: "Renta mensual", v: "S/ ———" },
      { k: "Valor del inmueble", v: "S/ ———" },
    ],
    sealText: "RENTA SUSTENTADA · SBS · REGLAMENTO NACIONAL · ",
    foot: "Valor de renta sustentado · R.M. Nº172-2016",
  },
  stats: DEFAULT_STATS,
  pain: {
    eyebrow: "El problema",
    heading: "Si no sabes la renta real, pierdes plata cada mes",
    body: "Poner un alquiler al tanteo significa dejar dinero sobre la mesa — o ahuyentar inquilinos. Te damos el valor de renta de mercado con sustento, para que negocies con datos, no con corazonadas.",
  },
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "El documento correcto, sin demoras",
    items: [
      {
        num: "01",
        title: "Renta de mercado",
        body: "Valor de alquiler real basado en datos de la zona y las características del inmueble.",
      },
      {
        num: "02",
        title: "Merced conductiva",
        body: "Estudio con sustento técnico, útil para contratos, renovaciones y procesos.",
      },
      {
        num: "03",
        title: "Decide con datos",
        body: "Negocia el alquiler con un respaldo profesional que el inquilino respeta.",
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
        body: "Distrito, tipo y características. Te damos el alcance el mismo día.",
      },
      {
        num: "2",
        title: "Análisis de la zona",
        body: "Evaluamos el inmueble y el mercado de renta de su ubicación.",
      },
      {
        num: "3",
        title: "Informe de renta",
        body: "Recibes el valor de renta sustentado, listo para tu contrato o trámite.",
      },
    ],
  },
  seoContent: [
    {
      type: "h2",
      text: "¿Qué es la merced conductiva?",
    },
    {
      type: "p",
      html: "La <b>merced conductiva</b> es el nombre legal de la renta: el pago periódico —normalmente mensual— que el inquilino se obliga a entregar al propietario a cambio de usar un inmueble. Es el mismo dinero que en el día a día llamamos <b>alquiler</b>, solo que expresado en el lenguaje de los contratos y de los juzgados. El Código Civil peruano (Decreto Legislativo 295) define el arrendamiento en su artículo 1666 como la obligación del arrendador de «ceder temporalmente al arrendatario el uso de un bien por cierta renta convenida», y en el artículo 1681, inciso 2, obliga al arrendatario a «pagar puntualmente la renta en el plazo y lugar convenidos y, a falta de convenio, cada mes, en su domicilio». La expresión «merced conductiva» aparece literalmente en el artículo 1585 del mismo código, referido al arrendamiento-venta. Si quieres profundizar, con ejemplos de cálculo y qué pasa cuando no se paga, lee nuestra <a href='/articulos/que-es-la-merced-conductiva'>guía sobre la merced conductiva</a>.",
    },
    {
      type: "p",
      html: "<b>Ejemplo ilustrativo</b> (cifras referenciales, no una cotización): un departamento de 90 m² en Surco, con dos dormitorios, ascensor y cochera. Si los departamentos comparables de la misma zona y en condiciones similares se arriendan entre S/ 2,400 y S/ 3,000 al mes, la <b>merced conductiva mensual</b> razonable se ubicaría alrededor de S/ 2,700, y esa es la cifra que iría en el contrato como renta pactada. Sobre un valor comercial de S/ 540,000, equivale a una rentabilidad bruta cercana al 6 % anual. El monto de cada caso depende del inmueble y de su zona: estas cifras solo muestran cómo se razona.",
    },
    {
      type: "p",
      html: "Una merced conductiva justa no se fija al tanteo ni copiando el aviso del vecino: se determina con una <b>tasación de alquiler</b>. El perito verifica el inmueble, reúne arrendamientos comparables de la misma zona, los ajusta por área, antigüedad, acabados, piso, estacionamiento y servicios, y contrasta el resultado con la relación entre la renta y el valor del inmueble. El informe entrega un valor de renta sustentado, con la metodología a la vista, que sirve para firmar un contrato nuevo, renegociar una renovación o discutir el monto frente a un tercero.",
    },
    {
      type: "p",
      html: "Cuando la merced conductiva se fija mal, el costo aparece con el tiempo. Si queda por debajo del mercado, el propietario deja de ganar cada mes y arrastra ese error durante todo el plazo del contrato. Si queda por encima, el inmueble tarda en colocarse, rota de inquilinos o termina en una renegociación forzada. Y si la renta pactada deja de pagarse, el conflicto pasa al terreno legal: el artículo 1697 del Código Civil permite resolver el contrato cuando el arrendatario no ha pagado la renta del mes anterior y se vence otro mes y además quince días, y la restitución del predio se tramita como <b>desalojo</b> en proceso sumarísimo (artículos 585 y siguientes del Código Procesal Civil). Un valor sustentado desde el inicio es la mejor forma de no llegar ahí; si ya estás en un proceso, revisa nuestra <a href='/tasaciones/judicial'>tasación judicial y pericial</a>.",
    },
    {
      type: "h2",
      text: "¿Qué es la tasación de alquiler o estudio de renta?",
    },
    {
      type: "p",
      html: "La <b>tasación de alquiler</b> es el estudio técnico que determina la <b>merced conductiva</b> de un inmueble, es decir, el valor de renta que corresponde a una propiedad según las condiciones reales del mercado. Más allá de un número estimado al tanteo, se trata de un análisis sustentado que define cuánto debería pagarse o cobrarse mensualmente por arrendar una casa, departamento, oficina o local comercial. Conocer el <b>valor de alquiler de mercado</b> te permite tomar decisiones con datos y no con suposiciones, tanto si eres propietario como si eres inquilino.",
    },
    {
      type: "h3",
      text: "Cómo se determina el valor de alquiler de mercado",
    },
    {
      type: "p",
      html: "La merced conductiva no se calcula de forma arbitraria: responde a varios factores que, en conjunto, reflejan el comportamiento del mercado en la zona del inmueble. Un estudio serio analiza cada uno de estos elementos para llegar a un valor justo y defendible.",
    },
    {
      type: "ul",
      items: [
        "<b>Ubicación</b> — distrito, accesos, seguridad y plusvalía de la zona influyen de forma directa en la renta.",
        "<b>Área y distribución</b> — los metros cuadrados, el número de ambientes y la funcionalidad del inmueble.",
        "<b>Características y estado</b> — antigüedad, acabados, mantenimiento y servicios disponibles.",
        "<b>Oferta y demanda</b> — el nivel de inmuebles similares disponibles en la zona y la presión de la demanda de alquiler.",
      ],
    },
    {
      type: "h3",
      text: "Para qué sirve la tasación de alquiler",
    },
    {
      type: "p",
      html: "Una <b>tasación de alquiler</b> con sustento técnico es una herramienta útil en varios escenarios. Para el propietario, permite arrendar al precio justo y dejar de perder dinero cada mes por cobrar de menos o ahuyentar inquilinos por cobrar de más. Para el inquilino, sirve como respaldo al momento de renegociar una renta que considera excesiva. Además, este estudio es clave para sustentar la <b>renovación de un contrato</b>, fijar las condiciones de un nuevo arrendamiento o respaldar un proceso judicial o arbitraje donde se discute el valor de la renta. Si tu necesidad es de venta o crédito, complementa bien con una <a href='/tasaciones/hipotecaria'>tasación hipotecaria</a>.",
    },
    {
      type: "h3",
      text: "Qué se necesita para el estudio",
    },
    {
      type: "p",
      html: "El estudio parte de los datos del inmueble: ubicación, área, distribución y características generales. De forma opcional, el título de propiedad o la copia literal ayudan a precisar el análisis, aunque no siempre son indispensables para iniciar. Una vez reunida esta información, nuestro equipo determina el valor de renta de mercado con sustento, listo para tu contrato, renovación o trámite. Revisa también nuestros <a href='/tasaciones'>servicios de tasación</a> para otros tipos de informe.",
    },
    {
      type: "p",
      html: "¿Quieres saber cuánto renta de verdad tu inmueble? <b>Cotiza tu estudio de merced conductiva por WhatsApp</b> y te damos el alcance el mismo día, con la atención de un equipo con más de 25 años de experiencia en valuaciones.",
    },
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
          "Voy a arrendar",
          "Renovar contrato",
          "Soy inquilino",
          "Proceso judicial / legal",
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
        q: "¿Qué es la merced conductiva?",
        a: "Es el término legal de la renta: el pago periódico que el inquilino entrega al propietario por usar un inmueble. El Código Civil peruano define el arrendamiento como ceder el uso de un bien «por cierta renta convenida» (art. 1666) y obliga al arrendatario a pagarla puntualmente (art. 1681). Su monto se determina con criterio técnico, según la ubicación, las características del inmueble y el mercado.",
      },
      {
        q: "¿Cómo se calcula la merced conductiva de un inmueble?",
        a: "Con una tasación de alquiler: se reúnen arrendamientos de inmuebles comparables en la misma zona y se ajustan por área, antigüedad, acabados, piso, estacionamiento y servicios. El resultado es un valor de renta sustentado, con metodología, y no una estimación al tanteo.",
      },
      {
        q: "¿La merced conductiva es lo mismo que el alquiler?",
        a: "Sí, es el mismo concepto. «Merced conductiva» es la expresión que usan los contratos, las demandas y la jurisprudencia; «alquiler» o «renta» es como lo llamamos todos los días. El Código Civil peruano habla de «renta» en el articulado del arrendamiento y usa «merced conductiva» en el artículo 1585.",
      },
      {
        q: "¿Sirve para un contrato o una renovación?",
        a: "Sí. El estudio te da un valor de renta sustentado que puedes usar para fijar o renegociar el alquiler con respaldo.",
      },
      {
        q: "¿Qué necesito para el estudio?",
        a: "Los datos del inmueble (ubicación, área, características) y, de ser posible, el título o copia literal. Te indicamos la lista exacta por WhatsApp.",
      },
      {
        q: "¿Cuánto demora y cuánto cuesta?",
        a: "Depende del tipo y la ubicación del inmueble. Escríbenos con los datos y te damos plazo y cotización.",
      },
      {
        q: "¿Por cuánto tiempo es válido?",
        a: "El valor refleja las condiciones del mercado al momento del estudio; conviene actualizarlo si pasa el tiempo.",
      },
    ],
  },
  finalCta: {
    title: "Cobra lo que tu inmueble vale",
    body: "Envíanos el distrito y el tipo de inmueble por WhatsApp y te damos el alcance hoy.",
    button: "Cotiza tu estudio de renta",
  },
  whatsapp: {
    baseMessage:
      "Hola VanguardiaMax, quiero un *Análisis de Renta / Tasación de Alquiler* de mi inmueble.",
    segment: "alquileres-renta",
  },
};
