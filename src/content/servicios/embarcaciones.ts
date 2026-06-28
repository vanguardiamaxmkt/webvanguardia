import type { ServiceContent } from "@/types/content";
import { SERVICE_STATS_DEFAULT, ORG_PROVIDER, breadcrumbJsonLd } from "./_shared";

export const embarcaciones: ServiceContent = {
  slug: "embarcaciones",
  meta: {
    title: "Tasación de Embarcaciones y Naves en Perú | VanguardiaMax",
    description:
      "Tasación y peritaje de embarcaciones, naves y artefactos navales en el Perú: pesqueras, yates, lanchas y remolcadores. Valorización para compraventa, garantía, seguros y procesos judiciales. Peritos certificados, cobertura nacional.",
    canonical: "/tasaciones/embarcaciones",
  },
  breadcrumbLabel: "Tasación de embarcaciones",
  hero: {
    eyebrow: "Tasación de embarcaciones",
    heading: "Tasación de embarcaciones y naves ",
    headingAccent: "en todo el Perú",
    sub: "Valorización y peritaje de embarcaciones pesqueras, yates, lanchas, remolcadores y artefactos navales. Informes con sustento técnico para compraventa, garantía, seguros y procesos judiciales.",
    primaryCta: { label: "Consultar por WhatsApp", whatsapp: true },
    secondaryCta: { label: "Ver servicios relacionados", href: "#servicios" },
    trust: [
      { icon: "shield", label: "Autenticado por la SBS" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Cobertura nacional" },
    ],
  },
  heroCard: {
    kind: "facts",
    title: "Ficha del servicio",
    rows: [
      {
        k: "Qué tasamos",
        v: "Embarcaciones pesqueras, yates, lanchas, remolcadores y artefactos navales",
      },
      {
        k: "Aplicaciones",
        v: "Compraventa · Garantía · Seguros · Procesos judiciales · Sucesiones",
      },
      {
        k: "Respaldo",
        v: "Reglamento Nacional de Tasaciones · Peritos certificados · SBS",
      },
      { k: "Cobertura", v: "Lima, Callao y principales puertos del Perú" },
    ],
  },
  stats: SERVICE_STATS_DEFAULT,
  prose: [
    { type: "h2", text: "¿Qué es la tasación de embarcaciones?" },
    {
      type: "p",
      html: "La tasación de embarcaciones es la valorización técnica de una nave o artefacto naval realizada por un perito, con el fin de determinar su valor de mercado y de realización a partir de su estado, antigüedad, equipamiento y características de navegación. A diferencia de una tasación inmobiliaria o vehicular, requiere criterio especializado sobre casco, motorización, sistemas de a bordo y documentación marítima.",
    },
    {
      type: "p",
      html: "En VanguardiaMax emitimos informes con sustento conforme al Reglamento Nacional de Tasaciones del Perú, reconocidos por entidades financieras, aseguradoras e instancias judiciales y notariales.",
    },
    { type: "h3", text: "Tipos de embarcaciones que tasamos" },
    {
      type: "ul",
      items: [
        "<b>Embarcaciones pesqueras</b> — artesanales e industriales, con o sin permiso de pesca.",
        "<b>Yates y embarcaciones de recreo</b> — para compraventa, seguros o sucesiones.",
        "<b>Lanchas y botes</b> — de transporte, turismo o uso particular.",
        "<b>Remolcadores y embarcaciones de servicio</b> — uso portuario e industrial.",
        "<b>Artefactos navales</b> — plataformas, pontones y unidades flotantes sin propulsión propia.",
      ],
    },
    { type: "h3", text: "¿Para qué sirve una tasación de embarcaciones?" },
    {
      type: "ul",
      items: [
        "<b>Compraventa</b> — conocer el valor real antes de comprar o vender.",
        "<b>Garantía para financiamiento</b> — respaldar una operación de crédito con la nave como garantía.",
        "<b>Seguros</b> — fijar la suma asegurada o sustentar un siniestro.",
        "<b>Procesos judiciales y sucesiones</b> — valor pericial para herencias, divisiones de bienes o expedientes.",
      ],
    },
  ],
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "Peritaje naval con respaldo técnico",
    items: [
      {
        num: "01",
        title: "Peritos especializados",
        body: "Profesionales con criterio técnico sobre casco, motorización y documentación marítima.",
      },
      {
        num: "02",
        title: "Validez ante terceros",
        body: "Informes reconocidos por bancos, aseguradoras y autoridades judiciales y notariales.",
      },
      {
        num: "03",
        title: "Cobertura nacional",
        body: "Atención en los principales puertos del país, en costa, sierra y selva.",
      },
    ],
  },
  faq: {
    heading: "Tasación de embarcaciones: dudas comunes",
    items: [
      {
        q: "¿Qué tipo de embarcaciones pueden tasar?",
        a: "Tasamos embarcaciones pesqueras artesanales e industriales, yates y embarcaciones de recreo, lanchas, botes, remolcadores y artefactos navales como pontones y plataformas flotantes.",
      },
      {
        q: "¿La tasación sirve para un seguro o una garantía?",
        a: "Sí. Nuestros informes sirven para fijar la suma asegurada de una póliza y para respaldar la embarcación como garantía en operaciones de financiamiento, ya que son reconocidos por aseguradoras y entidades financieras.",
      },
      {
        q: "¿Cómo se determina el valor de una embarcación?",
        a: "Se evalúan la antigüedad, el estado del casco y la motorización, el equipamiento, el tipo de uso y las condiciones del mercado, para concluir un valor comercial y un valor de realización conforme al Reglamento Nacional de Tasaciones.",
      },
      {
        q: "¿Qué documentos necesito?",
        a: "Generalmente el certificado de matrícula, el certificado de arqueo, documentos de propiedad y, si corresponde, el permiso de pesca. Te indicamos la lista exacta según el tipo de embarcación por WhatsApp.",
      },
      {
        q: "¿Atienden en todo el Perú?",
        a: "Sí. Contamos con cobertura nacional y atendemos en los principales puertos del país. Coordinamos la inspección según la ubicación de la embarcación.",
      },
      {
        q: "¿Por cuánto tiempo es válida la tasación?",
        a: "Las tasaciones tienen una validez referencial de 1 año; pasado ese plazo conviene actualizar el valor a las condiciones del mercado.",
      },
    ],
  },
  related: {
    title: "Otras tasaciones y servicios de VanguardiaMax",
    intro:
      "Si necesitas valorizar otros bienes o regularizar tu patrimonio, también podemos ayudarte:",
    cards: [
      {
        tag: "Empresas",
        title: "Tasación de activos fijos",
        body: "Maquinaria, equipos y plantas para estados financieros, garantías y seguros.",
        href: "/tasaciones/activos-fijos",
      },
      {
        tag: "Legal",
        title: "Tasación judicial y pericial",
        body: "Peritaje con validez legal para herencias, divorcios y procesos judiciales.",
        href: "/tasaciones/judicial",
      },
      {
        tag: "Inmobiliario",
        title: "Saneamiento inmobiliario",
        body: "Independización, prescripción e inscripción en SUNARP de tu predio.",
        href: "/servicios/saneamiento-inmobiliario",
      },
    ],
    moreLinks: [
      { label: "Auditoría de planos", href: "/servicios/auditoria-planos" },
      {
        label: "Proyectos y supervisión de obras",
        href: "/servicios/proyectos-supervision-obras",
      },
      { label: "Impuesto predial y municipal", href: "/tasaciones/impuesto-predial" },
    ],
  },
  finalCta: {
    title: "¿Necesitas tasar una embarcación?",
    body: "Cuéntanos el tipo de nave y la finalidad por WhatsApp y te damos plazo y cotización personalizada.",
    button: "Solicita tu cotización",
  },
  whatsapp: {
    baseMessage: "Hola VanguardiaMax, quiero consultar por una *Tasación de Embarcaciones*.",
    segment: "embarcaciones",
  },
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Tasación de embarcaciones",
      name: "Tasación de embarcaciones y naves",
      provider: ORG_PROVIDER,
      areaServed: { "@type": "Country", name: "Perú" },
      description:
        "Tasación y peritaje de embarcaciones pesqueras, yates, lanchas, remolcadores y artefactos navales para compraventa, garantía, seguros y procesos judiciales.",
    },
    breadcrumbJsonLd("Tasación de embarcaciones", "/tasaciones/embarcaciones", {
      name: "Tasaciones",
      href: "/tasaciones",
    }),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué tipo de embarcaciones pueden tasar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tasamos embarcaciones pesqueras artesanales e industriales, yates y embarcaciones de recreo, lanchas, botes, remolcadores y artefactos navales como pontones y plataformas flotantes.",
          },
        },
        {
          "@type": "Question",
          name: "¿La tasación sirve para un seguro o una garantía?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Los informes sirven para fijar la suma asegurada de una póliza y para respaldar la embarcación como garantía en operaciones de financiamiento, ya que son reconocidos por aseguradoras y entidades financieras.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo se determina el valor de una embarcación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se evalúan la antigüedad, el estado del casco y la motorización, el equipamiento, el tipo de uso y las condiciones del mercado, concluyendo un valor comercial y de realización conforme al Reglamento Nacional de Tasaciones.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué documentos necesito?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generalmente el certificado de matrícula, el certificado de arqueo, documentos de propiedad y, si corresponde, el permiso de pesca.",
          },
        },
        {
          "@type": "Question",
          name: "¿Por cuánto tiempo es válida la tasación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las tasaciones tienen una validez referencial de 1 año; pasado ese plazo conviene actualizar el valor a las condiciones del mercado.",
          },
        },
      ],
    },
  ],
};
