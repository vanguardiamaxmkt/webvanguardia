import type { ServiceContent } from "@/types/content";
import { ORG_PROVIDER, breadcrumbJsonLd } from "./_shared";

export const impuestoPredial: ServiceContent = {
  slug: "impuesto-predial",
  meta: {
    title: "Impuesto Predial y Arbitrios Municipales: Asesoría y Revisión | VanguardiaMax",
    description:
      "Asesoría en impuesto predial y arbitrios municipales en el Perú: revisión y rectificación del autovalúo (PU/HR), reclamos por cobros indebidos y beneficios para pensionistas y adultos mayores. Paga lo justo.",
    canonical: "/tasaciones/impuesto-predial",
  },
  breadcrumbLabel: "Impuesto predial y municipal",
  hero: {
    eyebrow: "Impuesto predial y municipal",
    heading: "Impuesto predial y arbitrios: ",
    headingAccent: "paga lo justo",
    sub: "Revisamos tu autovalúo (PU y HR) y tus arbitrios para detectar errores de cálculo y cobros indebidos, y aplicar los beneficios que te corresponden por ley, como la deducción para pensionistas y adultos mayores.",
    primaryCta: { label: "Consultar por WhatsApp", whatsapp: true },
    secondaryCta: { label: "Ver servicios relacionados", href: "#servicios" },
    trust: [
      { icon: "shield", label: "Revisión técnica" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Beneficios legales" },
    ],
  },
  heroCard: {
    kind: "facts",
    title: "Ficha del servicio",
    rows: [
      {
        k: "Qué hacemos",
        v: "Revisión y rectificación del autovalúo, reclamos y aplicación de beneficios",
      },
      {
        k: "Aplica a",
        v: "Impuesto predial · Arbitrios municipales · Autovalúo (PU/HR)",
      },
      {
        k: "Beneficios",
        v: "Deducción para pensionistas y adultos mayores · Cobros indebidos",
      },
      { k: "Cobertura", v: "Lima, Callao y municipalidades del país" },
    ],
  },
  stats: [
    { n: "+25", l: "años de experiencia" },
    { n: "PU/HR", l: "revisión de autovalúo" },
    { n: "Legal", l: "beneficios que aplican" },
    { n: "Nacional", l: "cobertura en todo el Perú" },
  ],
  prose: [
    {
      type: "h2",
      text: "Impuesto predial y arbitrios municipales: paga lo que corresponde",
    },
    {
      type: "p",
      html: "El impuesto predial es un tributo anual que cobra la municipalidad sobre el valor de tu predio, calculado a partir del <b>autovalúo</b> que se sustenta en la Declaración Jurada (formularios PU y HR), los valores arancelarios y los valores unitarios oficiales. Los arbitrios municipales (limpieza pública, parques y jardines, y serenazgo) son cobros distintos, asociados a los servicios del distrito.",
    },
    {
      type: "p",
      html: "Muchas veces ese cálculo contiene errores: áreas o categorías de construcción mal registradas, un autovalúo desactualizado, o beneficios legales que el contribuyente nunca aplicó. Revisamos tu caso para que pagues lo justo, ni más ni menos.",
    },
    { type: "h3", text: "En qué te ayudamos" },
    {
      type: "ul",
      items: [
        "<b>Revisión del autovalúo</b> — verificamos áreas, categorías y datos de tu PU y HR frente a la realidad del predio.",
        "<b>Rectificación de la declaración</b> — corregimos errores que están inflando tu base imponible.",
        "<b>Cobros indebidos</b> — identificamos arbitrios o predial cobrados de más y sustentamos el reclamo.",
        "<b>Beneficios para pensionistas y adultos mayores</b> — tramitamos la deducción que la ley reconoce sobre la base del impuesto.",
        "<b>Regularización de deuda</b> — orientación sobre fraccionamiento y puesta al día ante la municipalidad.",
      ],
    },
    { type: "h3", text: "¿Por qué revisar tu impuesto predial?" },
    {
      type: "ul",
      items: [
        "<b>Pagar lo justo</b> — un autovalúo mal calculado puede costarte de más año tras año.",
        "<b>Aprovechar beneficios</b> — muchos pensionistas y adultos mayores no aplican la deducción a la que tienen derecho.",
        "<b>Vender o sanear sin sorpresas</b> — una deuda o un autovalúo erróneo complica una compraventa o un trámite registral.",
      ],
    },
    {
      type: "p",
      html: "El alcance y el resultado dependen de cada municipalidad y de la situación del predio. Nuestra asesoría es técnica e informativa; no garantizamos una reducción específica, sino una revisión rigurosa para que pagues lo que corresponde por ley.",
    },
  ],
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "Revisión técnica de tu carga tributaria predial",
    items: [
      {
        num: "01",
        title: "Mirada técnica",
        body: "Conocemos cómo se construye el autovalúo y dónde suelen estar los errores que lo inflan.",
      },
      {
        num: "02",
        title: "Beneficios aplicados",
        body: "Identificamos y tramitamos las deducciones legales que muchos contribuyentes no usan.",
      },
      {
        num: "03",
        title: "Sustento claro",
        body: "Preparamos el expediente con respaldo técnico para presentarlo ante la municipalidad.",
      },
    ],
  },
  faq: {
    heading: "Impuesto predial: dudas comunes",
    items: [
      {
        q: "¿Cómo se calcula el impuesto predial?",
        a: "Se calcula sobre el autovalúo del predio, que resulta de la Declaración Jurada (formularios PU y HR) aplicando los valores arancelarios del terreno y los valores unitarios oficiales de construcción. Sobre esa base imponible se aplica la escala progresiva del impuesto.",
      },
      {
        q: "¿Qué son el PU y el HR?",
        a: "Son los formularios de la Declaración Jurada del impuesto predial: el PU (Predio Urbano) registra los datos del terreno y la construcción, y el HR (Hoja de Resumen) consolida la información del contribuyente y sus predios. De ellos depende el autovalúo.",
      },
      {
        q: "¿Existe un beneficio para pensionistas o adultos mayores?",
        a: "Sí. La ley reconoce una deducción sobre la base imponible del impuesto predial para pensionistas y para personas adultas mayores no pensionistas que cumplan los requisitos, respecto del predio que constituye su única propiedad y vivienda. Te ayudamos a verificar si calificas y a tramitarlo.",
      },
      {
        q: "¿Puedo reclamar un cobro que considero indebido?",
        a: "Sí. Si el autovalúo tiene errores o se cobran arbitrios que no corresponden, se puede presentar la rectificación o el reclamo ante la municipalidad con el debido sustento técnico, que es justamente lo que preparamos.",
      },
      {
        q: "¿Garantizan que bajará mi impuesto?",
        a: "No prometemos una reducción fija. Hacemos una revisión rigurosa del autovalúo y de los beneficios aplicables; si hay errores o derechos no aplicados, los corregimos para que pagues lo justo. El resultado depende de cada caso y de cada municipalidad.",
      },
      {
        q: "¿Atienden en cualquier distrito?",
        a: "Trabajamos con municipalidades de Lima, Callao y otras regiones. Cuéntanos en qué distrito está tu predio y coordinamos la revisión.",
      },
    ],
  },
  related: {
    title: "Servicios que se conectan con tu predio",
    intro:
      "Revisar el impuesto suele ir de la mano con sanear, tasar o auditar el predio:",
    cards: [
      {
        tag: "Inmobiliario",
        title: "Saneamiento inmobiliario",
        body: "Regulariza áreas e inscribe tu predio en SUNARP con titularidad clara.",
        href: "/servicios/saneamiento-inmobiliario",
      },
      {
        tag: "Legal",
        title: "Tasación judicial y pericial",
        body: "Valor pericial para herencias, divisiones de bienes y procesos judiciales.",
        href: "/tasaciones/judicial",
      },
      {
        tag: "Técnico",
        title: "Auditoría de planos",
        body: "Verifica áreas y linderos cuando el autovalúo no coincide con la realidad.",
        href: "/servicios/auditoria-planos",
      },
    ],
    moreLinks: [
      { label: "Tasación de activos fijos", href: "/tasaciones/activos-fijos" },
      { label: "Tasación de embarcaciones", href: "/tasaciones/embarcaciones" },
      {
        label: "Proyectos y supervisión de obras",
        href: "/servicios/proyectos-supervision-obras",
      },
    ],
  },
  finalCta: {
    title: "¿Crees que pagas de más en tu predial?",
    body: "Cuéntanos en qué distrito está tu predio por WhatsApp y revisamos tu autovalúo y arbitrios.",
    button: "Solicita una revisión",
  },
  whatsapp: {
    baseMessage: "Hola VanguardiaMax, quiero una revisión de mi *Impuesto Predial / Arbitrios*.",
    segment: "impuesto-predial",
  },
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Asesoría en impuesto predial y arbitrios municipales",
      name: "Asesoría en impuesto predial y municipal",
      provider: ORG_PROVIDER,
      areaServed: { "@type": "Country", name: "Perú" },
      description:
        "Revisión y rectificación del autovalúo (PU/HR), reclamos por cobros indebidos y aplicación de beneficios legales como la deducción para pensionistas y adultos mayores en el impuesto predial y los arbitrios municipales.",
    },
    breadcrumbJsonLd("Impuesto predial y municipal", "/tasaciones/impuesto-predial", {
      name: "Tasaciones",
      href: "/tasaciones",
    }),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo se calcula el impuesto predial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se calcula sobre el autovalúo del predio, que resulta de la Declaración Jurada (formularios PU y HR) aplicando los valores arancelarios del terreno y los valores unitarios oficiales de construcción. Sobre esa base imponible se aplica la escala progresiva del impuesto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué son el PU y el HR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Son los formularios de la Declaración Jurada del impuesto predial: el PU registra los datos del terreno y la construcción, y el HR consolida la información del contribuyente y sus predios. De ellos depende el autovalúo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Existe un beneficio para pensionistas o adultos mayores?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La ley reconoce una deducción sobre la base imponible del impuesto predial para pensionistas y para adultos mayores no pensionistas que cumplan los requisitos, respecto del predio que constituye su única propiedad y vivienda.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo reclamar un cobro indebido?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Si el autovalúo tiene errores o se cobran arbitrios que no corresponden, se puede presentar la rectificación o el reclamo ante la municipalidad con el debido sustento técnico.",
          },
        },
        {
          "@type": "Question",
          name: "¿Garantizan que bajará mi impuesto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No se promete una reducción fija. Se realiza una revisión del autovalúo y de los beneficios aplicables; si hay errores o derechos no aplicados, se corrigen para pagar lo justo. El resultado depende de cada caso y municipalidad.",
          },
        },
      ],
    },
  ],
};
