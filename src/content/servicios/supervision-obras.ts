import type { ServiceContent } from "@/types/content";
import { ORG_PROVIDER, breadcrumbJsonLd } from "./_shared";

export const supervisionObras: ServiceContent = {
  slug: "proyectos-supervision-obras",
  meta: {
    title: "Supervisión de Obras y Gestión de Proyectos en Perú | VanguardiaMax",
    description:
      "Supervisión técnica de obras y gestión de proyectos de construcción: control de avance, calidad, valorizaciones e informes técnicos. Respaldo para financiamiento y formalización. Cobertura nacional.",
    canonical: "/servicios/proyectos-supervision-obras",
  },
  breadcrumbLabel: "Proyectos y supervisión de obras",
  hero: {
    eyebrow: "Proyectos y supervisión de obras",
    heading: "Supervisión de obras y gestión de proyectos ",
    headingAccent: "con respaldo técnico",
    sub: "Controlamos que tu obra avance con la calidad, el plazo y las especificaciones acordadas. Supervisión técnica, valorizaciones de obra e informes que dan sustento ante propietarios, financistas y entidades.",
    primaryCta: { label: "Conversar por WhatsApp", whatsapp: true },
    secondaryCta: { label: "Ver servicios relacionados", href: "#servicios" },
    trust: [
      { icon: "shield", label: "Ingenieros supervisores" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Cobertura nacional" },
    ],
  },
  heroCard: {
    kind: "facts",
    title: "Ficha del servicio",
    rows: [
      {
        k: "Qué hacemos",
        v: "Supervisión técnica, control de avance y calidad, valorizaciones e informes de obra",
      },
      {
        k: "Para quién",
        v: "Propietarios, empresas, desarrolladores e inversionistas",
      },
      {
        k: "Aplicaciones",
        v: "Control de obra · Respaldo para financiamiento · Liquidación · Peritaje",
      },
      { k: "Cobertura", v: "Lima, Callao y todo el Perú" },
    ],
  },
  stats: [
    { n: "+25", l: "años de experiencia" },
    { n: "+10 mil", l: "informes técnicos" },
    { n: "SBS", l: "empresa autenticada" },
    { n: "Nacional", l: "cobertura en todo el Perú" },
  ],
  prose: [
    { type: "h2", text: "Supervisión de obras y gestión de proyectos" },
    {
      type: "p",
      html: "La supervisión de obras es el control técnico independiente de una construcción para asegurar que se ejecute conforme al proyecto, los plazos, el presupuesto y las normas de calidad. Un supervisor profesional protege la inversión del propietario y da sustento ante quienes financian o formalizan la obra.",
    },
    {
      type: "p",
      html: "En VanguardiaMax acompañamos el proyecto desde el control de avance hasta la liquidación, con informes técnicos que sirven de respaldo frente a propietarios, juntas de propietarios, entidades financieras y autoridades.",
    },
    { type: "h3", text: "Qué incluye nuestra supervisión" },
    {
      type: "ul",
      items: [
        "<b>Control de avance</b> — seguimiento del cronograma y del cumplimiento de hitos.",
        "<b>Control de calidad</b> — verificación de materiales, procesos y especificaciones técnicas.",
        "<b>Valorizaciones de obra</b> — sustento del avance ejecutado para pagos y financiamiento.",
        "<b>Informes técnicos</b> — reportes periódicos del estado de la obra y sus observaciones.",
        "<b>Liquidación de obra</b> — cierre técnico y económico al finalizar el proyecto.",
      ],
    },
    { type: "h3", text: "¿Por qué supervisar tu obra?" },
    {
      type: "ul",
      items: [
        "<b>Proteger la inversión</b> — evitar sobrecostos, demoras y trabajos mal ejecutados.",
        "<b>Respaldo para financiamiento</b> — valorizaciones e informes que sustentan desembolsos.",
        "<b>Transparencia</b> — un tercero independiente que verifica lo que se ejecuta.",
        "<b>Cierre ordenado</b> — liquidación clara para formalización y conformidad.",
      ],
    },
  ],
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "Un supervisor independiente que cuida tu inversión",
    items: [
      {
        num: "01",
        title: "Equipo técnico",
        body: "Ingenieros supervisores con experiencia en obras de distinta escala y complejidad.",
      },
      {
        num: "02",
        title: "Independencia",
        body: "Control objetivo del avance y la calidad, al servicio del propietario y del financista.",
      },
      {
        num: "03",
        title: "Respaldo documental",
        body: "Valorizaciones e informes que sustentan pagos, desembolsos y liquidación.",
      },
    ],
  },
  faq: {
    heading: "Supervisión de obras: dudas comunes",
    items: [
      {
        q: "¿Qué hace un supervisor de obra?",
        a: "Controla de forma independiente que la construcción se ejecute conforme al proyecto, el cronograma, el presupuesto y las normas de calidad, emitiendo valorizaciones e informes técnicos del avance.",
      },
      {
        q: "¿La supervisión sirve como respaldo para financiamiento?",
        a: "Sí. Las valorizaciones de obra y los informes de avance permiten sustentar el estado de la construcción ante una entidad financiera o un fondo, lo que respalda los desembolsos asociados al proyecto.",
      },
      {
        q: "¿Atienden obras fuera de Lima?",
        a: "Sí. Contamos con cobertura nacional y coordinamos la supervisión según la ubicación y la escala de la obra.",
      },
      {
        q: "¿Pueden hacer la liquidación de la obra?",
        a: "Sí. Realizamos el cierre técnico y económico de la obra, con la documentación necesaria para la formalización y la conformidad correspondiente.",
      },
      {
        q: "¿Cómo se cotiza este servicio?",
        a: "Depende del tipo y escala de la obra, su ubicación, el plazo y el alcance de la supervisión. Por ser un servicio de ciclo más largo, lo cotizamos por caso tras conocer el proyecto. Escríbenos para coordinar una evaluación.",
      },
    ],
  },
  related: {
    title: "Servicios que acompañan tu proyecto",
    intro:
      "La supervisión de obra se complementa con tasación, auditoría de planos y saneamiento:",
    cards: [
      {
        tag: "Empresas",
        title: "Tasación de activos fijos",
        body: "Valoriza maquinaria, equipos y planta para estados financieros y garantías.",
        href: "/tasaciones/activos-fijos",
      },
      {
        tag: "Técnico",
        title: "Auditoría de planos",
        body: "Verifica planos, áreas y conformidad normativa antes y durante la obra.",
        href: "/servicios/auditoria-planos",
      },
      {
        tag: "Inmobiliario",
        title: "Saneamiento inmobiliario",
        body: "Regulariza e inscribe el predio en SUNARP para formalizar el proyecto.",
        href: "/servicios/saneamiento-inmobiliario",
      },
    ],
    moreLinks: [
      { label: "Tasación judicial y pericial", href: "/tasaciones/judicial" },
      { label: "Tasación de embarcaciones", href: "/tasaciones/embarcaciones" },
      { label: "Impuesto predial y municipal", href: "/tasaciones/impuesto-predial" },
    ],
  },
  finalCta: {
    title: "¿Tienes una obra que supervisar?",
    body: "Cuéntanos del proyecto por WhatsApp y coordinamos una evaluación para definir el alcance.",
    button: "Conversemos tu proyecto",
  },
  whatsapp: {
    baseMessage: "Hola VanguardiaMax, quiero consultar por *Supervisión de Obras / Gestión de Proyectos*.",
    segment: "supervision-obras",
  },
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Supervisión de obras y gestión de proyectos",
      name: "Supervisión de obras y gestión de proyectos",
      provider: ORG_PROVIDER,
      areaServed: { "@type": "Country", name: "Perú" },
      description:
        "Supervisión técnica de obras y gestión de proyectos de construcción: control de avance y calidad, valorizaciones de obra, informes técnicos y liquidación.",
    },
    breadcrumbJsonLd(
      "Proyectos y supervisión de obras",
      "/servicios/proyectos-supervision-obras",
    ),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué hace un supervisor de obra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Controla de forma independiente que la construcción se ejecute conforme al proyecto, el cronograma, el presupuesto y las normas de calidad, emitiendo valorizaciones e informes técnicos del avance.",
          },
        },
        {
          "@type": "Question",
          name: "¿La supervisión sirve como respaldo para financiamiento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Las valorizaciones de obra y los informes de avance permiten sustentar el estado de la construcción ante una entidad financiera o un fondo, lo que respalda los desembolsos del proyecto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Atienden obras fuera de Lima?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Contamos con cobertura nacional y coordinamos la supervisión según la ubicación y la escala de la obra.",
          },
        },
        {
          "@type": "Question",
          name: "¿Pueden hacer la liquidación de la obra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Realizamos el cierre técnico y económico de la obra, con la documentación necesaria para la formalización y la conformidad.",
          },
        },
      ],
    },
  ],
};
