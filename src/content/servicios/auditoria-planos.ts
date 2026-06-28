import type { ServiceContent } from "@/types/content";
import { ORG_PROVIDER, breadcrumbJsonLd } from "./_shared";

export const auditoriaPlanos: ServiceContent = {
  slug: "auditoria-planos",
  meta: {
    title: "Auditoría y Revisión Técnica de Planos en Perú | VanguardiaMax",
    description:
      "Auditoría y revisión técnica de planos de arquitectura, estructuras e instalaciones: verificación de áreas, linderos y conformidad normativa para licencias, saneamiento, compraventa y due diligence. Peritos certificados.",
    canonical: "/servicios/auditoria-planos",
  },
  breadcrumbLabel: "Auditoría de planos",
  hero: {
    eyebrow: "Auditoría de planos",
    heading: "Auditoría y revisión técnica de planos ",
    headingAccent: "con sustento",
    sub: "Verificamos que tus planos de arquitectura, estructuras e instalaciones coincidan con la realidad construida y la normativa vigente. Detectamos discrepancias de áreas y linderos antes de un trámite, una compra o un saneamiento.",
    primaryCta: { label: "Consultar por WhatsApp", whatsapp: true },
    secondaryCta: { label: "Ver servicios relacionados", href: "#servicios" },
    trust: [
      { icon: "shield", label: "Peritos e ingenieros" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Conforme al RNE" },
    ],
  },
  heroCard: {
    kind: "facts",
    title: "Ficha del servicio",
    rows: [
      {
        k: "Qué revisamos",
        v: "Planos de arquitectura, estructuras, instalaciones y medidas perimétricas",
      },
      {
        k: "Aplicaciones",
        v: "Licencias y conformidad de obra · Saneamiento · Compraventa · Due diligence",
      },
      {
        k: "Resultado",
        v: "Informe técnico con observaciones y recomendaciones",
      },
      {
        k: "Respaldo",
        v: "Reglamento Nacional de Edificaciones (RNE) · Peritos certificados",
      },
    ],
  },
  stats: [
    { n: "+25", l: "años de experiencia" },
    { n: "+10 mil", l: "informes técnicos" },
    { n: "RNE", l: "conforme a normativa" },
    { n: "Nacional", l: "cobertura en todo el Perú" },
  ],
  prose: [
    { type: "h2", text: "¿Qué es la auditoría de planos?" },
    {
      type: "p",
      html: "La auditoría de planos es la revisión técnica de los planos de un inmueble o proyecto para verificar que sean correctos, coherentes entre sí y que coincidan con la realidad construida y la normativa vigente. Permite detectar discrepancias de áreas, linderos o especificaciones antes de presentar un trámite, comprar una propiedad o iniciar un saneamiento.",
    },
    {
      type: "p",
      html: "Un plano con observaciones puede frenar una licencia, complicar una inscripción registral o esconder un riesgo en una compra. Nuestra auditoría anticipa esos problemas y entrega un informe técnico con las observaciones y las recomendaciones para corregirlas.",
    },
    { type: "h3", text: "Qué revisamos en una auditoría de planos" },
    {
      type: "ul",
      items: [
        "<b>Planos de arquitectura</b> — distribución, áreas y cumplimiento de parámetros.",
        "<b>Planos de estructuras</b> — coherencia estructural y de especificaciones.",
        "<b>Instalaciones</b> — sanitarias, eléctricas y de gas, según el alcance.",
        "<b>Medidas perimétricas y áreas</b> — contraste con la partida registral y los linderos.",
        "<b>Conformidad normativa</b> — verificación frente al Reglamento Nacional de Edificaciones (RNE) y parámetros municipales.",
      ],
    },
    { type: "h3", text: "¿Para qué sirve auditar tus planos?" },
    {
      type: "ul",
      items: [
        "<b>Trámites municipales</b> — licencia de edificación y conformidad de obra sin observaciones evitables.",
        "<b>Saneamiento e independización</b> — corregir discrepancias de áreas antes de inscribir en SUNARP.",
        "<b>Compraventa y due diligence</b> — confirmar que lo construido corresponde a lo documentado.",
        "<b>Sustento pericial</b> — respaldo técnico para procesos donde el plano es prueba.",
      ],
    },
  ],
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "Revisión técnica que evita observaciones",
    items: [
      {
        num: "01",
        title: "Equipo de ingeniería",
        body: "Peritos e ingenieros que revisan arquitectura, estructuras e instalaciones con criterio normativo.",
      },
      {
        num: "02",
        title: "Informe accionable",
        body: "Entregamos observaciones claras y recomendaciones para corregir antes del trámite.",
      },
      {
        num: "03",
        title: "Visión integral",
        body: "Conectamos la auditoría con saneamiento y tasación cuando el caso lo requiere.",
      },
    ],
  },
  faq: {
    heading: "Auditoría de planos: dudas comunes",
    items: [
      {
        q: "¿Qué incluye una auditoría de planos?",
        a: "Incluye la revisión de los planos de arquitectura, estructuras e instalaciones, el contraste de áreas y medidas perimétricas con la partida registral, y la verificación de conformidad frente al Reglamento Nacional de Edificaciones y los parámetros municipales, con un informe de observaciones.",
      },
      {
        q: "¿Sirve para tramitar una licencia o conformidad de obra?",
        a: "Sí. Auditar los planos antes de presentarlos ayuda a evitar observaciones que retrasan la licencia de edificación o la conformidad de obra, y reduce reprocesos ante la municipalidad.",
      },
      {
        q: "¿Detectan discrepancias de áreas?",
        a: "Sí. Una de las verificaciones centrales es contrastar el área y los linderos de los planos con lo inscrito en SUNARP y con la realidad construida, para identificar diferencias que conviene corregir antes de un saneamiento o una compraventa.",
      },
      {
        q: "¿Qué documentos necesito?",
        a: "Generalmente los planos disponibles (arquitectura y estructuras), la partida registral o copia literal y, si existe, la documentación municipal previa. Te indicamos la lista exacta según el caso por WhatsApp.",
      },
      {
        q: "¿Es lo mismo que una tasación?",
        a: "No. La tasación determina el valor del bien, mientras que la auditoría de planos verifica su correcta representación técnica y documental. Son servicios complementarios y a menudo se solicitan juntos.",
      },
    ],
  },
  related: {
    title: "Servicios que complementan tu auditoría",
    intro:
      "La auditoría de planos suele ir de la mano con el saneamiento, la tasación o un peritaje:",
    cards: [
      {
        tag: "Inmobiliario",
        title: "Saneamiento inmobiliario",
        body: "Corrige áreas y linderos e inscribe tu predio en SUNARP con titularidad clara.",
        href: "/servicios/saneamiento-inmobiliario",
      },
      {
        tag: "Legal",
        title: "Tasación judicial y pericial",
        body: "Peritaje con validez legal cuando el plano es prueba en un proceso.",
        href: "/tasaciones/judicial",
      },
      {
        tag: "Empresas",
        title: "Tasación de activos fijos",
        body: "Valorización de plantas, equipos y maquinaria para tu empresa.",
        href: "/tasaciones/activos-fijos",
      },
    ],
    moreLinks: [
      { label: "Tasación de embarcaciones", href: "/tasaciones/embarcaciones" },
      {
        label: "Proyectos y supervisión de obras",
        href: "/servicios/proyectos-supervision-obras",
      },
      { label: "Impuesto predial y municipal", href: "/tasaciones/impuesto-predial" },
    ],
  },
  finalCta: {
    title: "¿Necesitas auditar tus planos?",
    body: "Cuéntanos el tipo de inmueble y el trámite por WhatsApp y te indicamos el alcance y la cotización.",
    button: "Solicita tu cotización",
  },
  whatsapp: {
    baseMessage: "Hola VanguardiaMax, quiero consultar por una *Auditoría de Planos*.",
    segment: "auditoria-planos",
  },
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Auditoría de planos",
      name: "Auditoría y revisión técnica de planos",
      provider: ORG_PROVIDER,
      areaServed: { "@type": "Country", name: "Perú" },
      description:
        "Auditoría y revisión técnica de planos de arquitectura, estructuras e instalaciones, con verificación de áreas y conformidad normativa para licencias, saneamiento, compraventa y due diligence.",
    },
    breadcrumbJsonLd("Auditoría de planos", "/servicios/auditoria-planos"),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué incluye una auditoría de planos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Incluye la revisión de planos de arquitectura, estructuras e instalaciones, el contraste de áreas y medidas perimétricas con la partida registral, y la verificación de conformidad frente al Reglamento Nacional de Edificaciones y los parámetros municipales, con un informe de observaciones.",
          },
        },
        {
          "@type": "Question",
          name: "¿Sirve para tramitar una licencia o conformidad de obra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Auditar los planos antes de presentarlos ayuda a evitar observaciones que retrasan la licencia de edificación o la conformidad de obra y reduce reprocesos ante la municipalidad.",
          },
        },
        {
          "@type": "Question",
          name: "¿Detectan discrepancias de áreas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Se contrasta el área y los linderos de los planos con lo inscrito en SUNARP y con la realidad construida, para identificar diferencias que conviene corregir antes de un saneamiento o compraventa.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es lo mismo que una tasación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. La tasación determina el valor del bien, mientras que la auditoría de planos verifica su correcta representación técnica y documental. Son servicios complementarios.",
          },
        },
      ],
    },
  ],
};
