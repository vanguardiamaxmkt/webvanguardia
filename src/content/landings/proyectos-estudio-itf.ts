import type { LandingContent } from "@/types/content";
import { DEFAULT_STATS } from "./_shared";

export const estudioItf: LandingContent = {
  slug: "proyectos-estudio-itf",
  meta: {
    title: "Informe Técnico Favorable (ITF) | Revisor Urbano | VanguardiaMax",
    description:
      "Informe Técnico Favorable (ITF) emitido por Revisores Urbanos para acelerar tu licencia de edificación. Conforme al Reglamento Nacional de Edificaciones (RNE), sin las demoras de la comisión técnica. Cotiza por WhatsApp.",
    canonical: "/servicios/proyectos-estudio-itf",
  },
  hero: {
    eyebrow: "Informe Técnico Favorable · ITF",
    heading: "Obtén tu licencia de edificación ",
    headingAccent: "más rápido con el ITF",
    sub: "El Informe Técnico Favorable (ITF) que emite el Revisor Urbano valida tu proyecto frente al Reglamento Nacional de Edificaciones y obliga a la municipalidad a otorgar la licencia en plazos cortos.",
    primaryCta: { label: "Cotiza tu Informe Técnico Favorable", whatsapp: true },
    secondaryCta: { label: "Cotiza por formulario", href: "#cotizar" },
    trust: [
      { icon: "shield", label: "Revisores Urbanos registrados" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Conforme al RNE" },
    ],
  },
  heroCard: {
    kind: "cert",
    title: "Informe Técnico Favorable",
    subtitle: "ITF · Revisor Urbano",
    rows: [
      { k: "Conformidad con el RNE", v: "—" },
      { k: "Licencia acelerada", v: "—" },
    ],
    sealText: "INFORME TÉCNICO FAVORABLE · REVISOR URBANO · ",
    foot: "Conforme al RNE · Revisores Urbanos",
  },
  stats: DEFAULT_STATS,
  pain: {
    eyebrow: "El problema",
    heading: "La comisión técnica frena tu licencia con observaciones y demoras",
    body: "Esperar el dictamen de la comisión técnica municipal puede tomar meses entre observaciones y subsanaciones. Con el ITF de un Revisor Urbano validamos tu proyecto antes y aceleras la licencia de edificación.",
  },
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "Certeza normativa y licencia sin demoras",
    items: [
      {
        num: "01",
        title: "Licencia acelerada",
        body: "Con el ITF favorable la municipalidad está obligada a otorgar la licencia de edificación en plazos cortos, sin pasar por la comisión técnica tradicional.",
      },
      {
        num: "02",
        title: "Conforme al RNE",
        body: "Verificamos que tu proyecto cumpla el Reglamento Nacional de Edificaciones y la normativa urbanística antes de presentarlo.",
      },
      {
        num: "03",
        title: "Respaldo a tu inversión",
        body: "El ITF da certeza normativa al proyecto y respalda el financiamiento, complementando tus estudios de viabilidad y tasación.",
      },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    heading: "Tres pasos hacia tu licencia",
    items: [
      {
        num: "1",
        title: "Revisión del expediente",
        body: "Analizamos tu proyecto y expediente técnico: planos de arquitectura y especialidades, memoria y documentación del predio.",
      },
      {
        num: "2",
        title: "Verificación normativa",
        body: "El Revisor Urbano verifica el cumplimiento del Reglamento Nacional de Edificaciones y la normativa urbanística aplicable.",
      },
      {
        num: "3",
        title: "Emisión del ITF",
        body: "Emitimos el Informe Técnico Favorable para que lo presentes a la municipalidad y obtengas la licencia de edificación.",
      },
    ],
  },
  seoContent: [
    { type: "h2", text: "¿Qué es el Informe Técnico Favorable (ITF)?" },
    { type: "p", html: "El <b>Informe Técnico Favorable (ITF)</b> es un documento emitido por un <b>Revisor Urbano</b> que valida que un proyecto de construcción o edificación cumple con el <b>Reglamento Nacional de Edificaciones (RNE)</b> y con la normativa urbanística vigente. En lugar de someter tu proyecto al dictamen de la comisión técnica municipal, un profesional acreditado revisa el expediente y, si todo está conforme, emite el <b>ITF Revisor Urbano</b>. Es la pieza clave para tramitar una <b>licencia de edificación con ITF</b> de forma ágil y con certeza normativa." },
    { type: "h3", text: "Cómo acelera la licencia de edificación" },
    { type: "p", html: "La principal utilidad del ITF es <b>acelerar la obtención de la licencia de edificación</b>. Bajo la modalidad con Revisores Urbanos, una vez emitido el Informe Técnico Favorable la <b>municipalidad está obligada a otorgar la licencia</b> en plazos cortos, ya que el cumplimiento del RNE quedó verificado por el revisor. Así se evitan las observaciones reiteradas y las demoras propias de la comisión técnica tradicional, que suele extender el trámite durante meses. Para el desarrollador o propietario, esto significa empezar a construir antes y reducir la incertidumbre del proceso." },
    { type: "h3", text: "Para qué proyectos sirve" },
    { type: "p", html: "El ITF aplica a una amplia gama de proyectos: <b>edificaciones</b> nuevas (vivienda, multifamiliar, comercial o industrial), <b>habilitaciones urbanas</b> y <b>ampliaciones</b> o remodelaciones que requieren licencia. En el ámbito inmobiliario, además, el informe se relaciona con los estudios de viabilidad y factibilidad previos a una tasación o valorización de terrenos y proyectos: dar certeza normativa antes de construir respalda la inversión y el financiamiento. Si aún estás evaluando el potencial del terreno, conviene partir por un <a href='/servicios/proyectos-estudio-viabilidad'>estudio de viabilidad</a>." },
    { type: "h3", text: "Qué se necesita" },
    { type: "p", html: "Para emitir el Informe Técnico Favorable trabajamos sobre tu <b>proyecto o expediente técnico</b> completo. Por lo general se requiere:" },
    { type: "ul", items: [
      "<b>Planos de arquitectura</b> — distribución, cortes, elevaciones y plano de ubicación del proyecto.",
      "<b>Planos de especialidades</b> — estructuras, instalaciones sanitarias y eléctricas según el alcance de la obra.",
      "<b>Memoria descriptiva</b> — que detalle las características técnicas y los parámetros urbanísticos del proyecto.",
      "<b>Documentación del predio</b> — partida registral, certificado de parámetros urbanísticos y demás documentos del lote.",
    ] },
    { type: "p", html: "Si te falta algún documento, escríbenos igual: revisamos tu caso, te indicamos cómo completarlo y confirmamos la lista exacta según el tipo de proyecto. Puedes conocer todo lo que hacemos en nuestra página de <a href='/servicios'>servicios</a>." },
    { type: "p", html: "¿Quieres acelerar tu licencia de edificación con un ITF? Cuéntanos el distrito y el tipo de proyecto por <b>WhatsApp</b> y te damos el alcance y la cotización el mismo día, sin compromiso." },
  ],
  form: {
    bullets: [
      "Respuesta el mismo día por WhatsApp",
      "Revisores Urbanos registrados y conforme al RNE",
      "Atención en Lima, Callao y todo el Perú",
    ],
    fields: [
      { type: "text", name: "nombre", label: "Nombre", placeholder: "Tu nombre" },
      {
        type: "text",
        name: "ubicacion",
        label: "Distrito / ubicación del proyecto",
        placeholder: "Ej. Surco, San Isidro, Callao…",
      },
      {
        type: "select",
        name: "tipo",
        label: "Tipo de proyecto",
        options: [
          "Vivienda",
          "Multifamiliar",
          "Comercial",
          "Industrial",
          "Habilitación urbana",
          "Otro",
        ],
      },
      {
        type: "select",
        name: "finalidad",
        label: "Finalidad / etapa",
        options: [
          "Licencia de edificación",
          "Anteproyecto",
          "Regularización",
          "Conformidad de obra",
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
        q: "¿Qué es el Informe Técnico Favorable (ITF)?",
        a: "Es el documento que emite un Revisor Urbano validando que tu proyecto cumple con el Reglamento Nacional de Edificaciones (RNE) y la normativa urbanística. Con él se acelera la obtención de la licencia de edificación.",
      },
      {
        q: "¿Por qué el ITF agiliza mi licencia de edificación?",
        a: "Bajo la modalidad con Revisores Urbanos, una vez emitido el ITF favorable la municipalidad está obligada a otorgar la licencia en plazos cortos, evitando las observaciones y demoras de la comisión técnica tradicional.",
      },
      {
        q: "¿Para qué proyectos sirve el ITF?",
        a: "Para edificaciones nuevas (vivienda, multifamiliar, comercial o industrial), habilitaciones urbanas y ampliaciones o remodelaciones que requieran licencia de edificación.",
      },
      {
        q: "¿Qué documentos necesito?",
        a: "Por lo general: el proyecto o expediente técnico con planos de arquitectura y especialidades, memoria descriptiva y la documentación del predio. Te confirmamos la lista exacta según tu caso por WhatsApp.",
      },
      {
        q: "¿Cuánto cuesta el ITF?",
        a: "El costo depende del tipo, tamaño y complejidad del proyecto, así como de su ubicación. Escríbenos con esos datos y te damos una cotización personalizada al momento.",
      },
    ],
  },
  finalCta: {
    title: "Acelera tu licencia de edificación",
    body: "Envíanos el distrito y el tipo de proyecto por WhatsApp y te damos el alcance del ITF hoy.",
    button: "Cotiza tu Informe Técnico Favorable",
  },
  whatsapp: {
    baseMessage:
      "Hola VanguardiaMax, quiero cotizar un *Informe Técnico Favorable (ITF)* para mi proyecto.",
    segment: "estudio-itf",
  },
};
