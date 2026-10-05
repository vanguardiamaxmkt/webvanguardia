import type { LandingContent } from "@/types/content";
import { DEFAULT_STATS } from "./_shared";

export const hoteles: LandingContent = {
  slug: "hoteles",
  meta: {
    title: "Tasación de hoteles y resorts de lujo | VanguardiaMax",
    description:
      "Tasación de hoteles y resorts de lujo en el Perú: valor del inmueble y del negocio. También proyección con flujos descontados para desarrollar hoteles.",
    canonical: "/tasaciones/hoteles",
  },
  hero: {
    eyebrow: "Tasación de hoteles y resorts de lujo",
    heading: "El valor real de tu hotel, ",
    headingAccent: "inmueble y negocio",
    sub: "Valorizamos hoteles, resorts y complejos turísticos como lo que son: un inmueble y un negocio en marcha. Valor comercial y de realización con sustento para bancos, inversionistas, auditores y aseguradoras.",
    primaryCta: { label: "Cotiza la tasación de tu hotel", whatsapp: true },
    secondaryCta: { label: "Cotiza por formulario", href: "#cotizar" },
    trust: [
      { icon: "shield", label: "Peritos inscritos SBS / REPEV" },
      { icon: "star", label: "+25 años de experiencia" },
      { icon: "check", label: "Doble visado" },
    ],
  },
  heroCard: {
    kind: "cert",
    title: "Informe de Tasación",
    subtitle: "Hotel o resort · Valor comercial y de realización",
    rows: [
      { k: "Valor comercial", v: "US$ ———" },
      { k: "Valor de realización", v: "US$ ———" },
    ],
    sealText: "TASACIÓN DE HOTELES · PERITO INSCRITO · REGLAMENTO NACIONAL · ",
    foot: "Conforme a R.M. Nº172-2016-VIVIENDA · SBS / REPEV",
  },
  stats: DEFAULT_STATS,
  pain: {
    eyebrow: "El problema",
    heading: "Un hotel no vale lo que costó construirlo: vale lo que es capaz de generar",
    body: "Tasar un hotel como si fuera un edificio cualquiera deja fuera lo que más pesa en su precio: la ocupación, la tarifa, la marca y la operación. Y una cifra sin sustento no la aceptan el banco, el comprador ni el auditor. Te entregamos un informe con doble visado que valoriza el inmueble, el equipamiento y el negocio.",
  },
  benefits: {
    eyebrow: "Por qué VanguardiaMax",
    heading: "Una tasación que entiende el negocio hotelero",
    items: [
      {
        num: "01",
        title: "Inmueble y negocio",
        body: "Valorizamos el terreno, la edificación, el mobiliario y equipamiento, y la capacidad del hotel de generar ingresos.",
      },
      {
        num: "02",
        title: "Peritos inscritos",
        body: "Informes firmados por peritos inscritos en la SBS (REPEV) y en el REPEJ, con tasadores acreditados por RICS y doble visado.",
      },
      {
        num: "03",
        title: "Estándares internacionales",
        body: "Trabajamos conforme al Reglamento Nacional de Tasaciones y a las Normas Internacionales de Valuación (IVS), el lenguaje de bancos, inversionistas y auditores.",
      },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    heading: "Tres pasos, sin vueltas",
    items: [
      {
        num: "1",
        title: "Cuéntanos del hotel",
        body: "Ubicación, categoría, número de habitaciones y para qué necesitas la tasación. Te damos el alcance y la cotización el mismo día.",
      },
      {
        num: "2",
        title: "Inspección y análisis",
        body: "Un perito inspecciona el hotel y analiza su operación: ocupación, tarifas, ingresos y gastos, además del mercado de la zona.",
      },
      {
        num: "3",
        title: "Informe de tasación",
        body: "Recibes el informe con el valor comercial y de realización, la metodología y los supuestos, listo para el banco, el comprador o tu auditor.",
      },
    ],
  },
  seoContent: [
    { type: "h2", text: "¿Qué es la tasación de hoteles y resorts de lujo?" },
    { type: "p", html: "La <b>tasación de hoteles y resorts de lujo</b> es la valorización técnica que determina cuánto vale un establecimiento hotelero considerando a la vez el <b>inmueble</b> (terreno y edificación), su <b>mobiliario y equipamiento</b> y el <b>negocio en marcha</b>: su capacidad de generar ingresos por ocupación y tarifa. A diferencia de la tasación de un edificio común, el valor de un hotel depende sobre todo de lo que produce su operación, y por eso el perito analiza tanto la propiedad como sus cifras." },
    { type: "h2", text: "¿Cómo se calcula el valor de un hotel?" },
    { type: "p", html: "Un hotel es una propiedad operativa: se compra y se vende por los ingresos que genera. Por eso la <b>valorización de un hotel</b> combina tres enfoques y contrasta sus resultados:" },
    { type: "ul", items: [
      "<b>Enfoque de ingresos</b> — es el principal. Proyecta los ingresos por habitaciones, alimentos y bebidas y otros servicios, descuenta los gastos de operación y trae el resultado a valor presente (flujo de caja descontado), o capitaliza el ingreso neto de un año estabilizado.",
      "<b>Enfoque de mercado</b> — compara con ventas de hoteles similares y expresa el valor por habitación.",
      "<b>Enfoque del costo</b> — suma el valor del terreno y el costo de reposición depreciado de la edificación, las instalaciones y el equipamiento. Sirve de contraste y es la base para los seguros.",
    ] },
    { type: "p", html: "Los indicadores que más pesan son la <b>ocupación</b>, la <b>tarifa promedio diaria</b> (ADR) y el <b>ingreso por habitación disponible</b> (RevPAR), junto con la utilidad operativa del hotel. Si quieres entender por qué un negocio en funcionamiento vale distinto que el local vacío, lee nuestra guía sobre la <a href='/articulos/tasacion-de-negocio-en-marcha'>tasación de negocio en marcha</a>." },
    { type: "h2", text: "¿Qué se analiza en un hotel o resort de lujo?" },
    { type: "ul", items: [
      "<b>Ubicación y destino</b> — demanda turística y corporativa de la zona, accesos, entorno y competencia.",
      "<b>Terreno y edificación</b> — área, zonificación, calidad constructiva, antigüedad y estado de conservación.",
      "<b>Categoría y servicios</b> — número de habitaciones y suites, restaurantes, spa, piscinas, salones de eventos y áreas comunes.",
      "<b>Mobiliario y equipamiento</b> — muebles, equipos de cocina, lavandería, climatización y tecnología, con su vida útil remanente.",
      "<b>Operación</b> — ocupación, tarifas, estacionalidad, ingresos y gastos de los últimos años.",
      "<b>Marca y contratos</b> — si opera con una marca o cadena, y los contratos de operación, franquicia o arrendamiento vigentes.",
      "<b>Situación legal</b> — partida registral, licencias y clasificación del establecimiento.",
    ] },
    { type: "p", html: "En el segmento de lujo, la marca, el nivel de servicio y la exclusividad de la ubicación explican buena parte del valor. El perito los sustenta con datos del mercado, no con apreciaciones." },
    { type: "h2", text: "¿Para qué sirve la tasación de un hotel?" },
    { type: "ul", items: [
      "<b>Compra o venta</b> — fija un precio defendible ante el comprador, el vendedor y sus asesores.",
      "<b>Financiamiento y garantías</b> — entrega el valor comercial y el valor de realización que piden los bancos, conforme al Reglamento Nacional de Tasaciones.",
      "<b>Estados financieros</b> — determina el valor razonable bajo NIIF. Un hotel operado por su propietario se registra como propiedades, planta y equipo (NIC 16); revisa nuestra <a href='/tasaciones/empresas'>tasación de activos fijos bajo NIIF</a>.",
      "<b>Seguros</b> — calcula el valor de reposición a nuevo para fijar la suma asegurada, con nuestra <a href='/tasaciones/para-seguros'>tasación para seguros</a>.",
      "<b>Remodelación, ampliación o reinversión</b> — establece el valor actual del hotel antes de invertir. El efecto de la inversión se evalúa con un <a href='/servicios/proyectos-estudio-viabilidad'>estudio de viabilidad</a>.",
      "<b>Fideicomisos, herencias y procesos judiciales</b> — con una <a href='/tasaciones/fiduciarias'>tasación fiduciaria</a> o una <a href='/tasaciones/judicial'>tasación judicial</a>, según el caso.",
    ] },
    { type: "h2", text: "¿Qué tipos de hoteles y resorts tasamos?" },
    { type: "p", html: "Nuestras <b>tasaciones de hoteles y resorts de lujo</b> abarcan hoteles de ciudad, resorts de playa y de campo, hoteles boutique, lodges y complejos turísticos en operación, en todo el Perú. Y si el hotel todavía es un proyecto, hacemos la proyección para desarrollarlo." },
    { type: "h2", text: "Proyección para desarrollar hoteles: ¿es viable tu proyecto?" },
    { type: "p", html: "Cuando el hotel todavía no existe, lo que se valoriza es el proyecto. La <b>proyección para desarrollar hoteles</b> estima cuánto costará construir y equipar el hotel, cuánto ingresará cuando opere y si ese resultado justifica la inversión. Es la base para decidir, buscar socios o pedir financiamiento." },
    { type: "h3", text: "Valuación con flujos descontados" },
    { type: "p", html: "La <b>valuación de un proyecto hotelero con flujos descontados</b> (flujo de caja descontado) sigue cinco pasos:" },
    { type: "ul", items: [
      "<b>Concepto y mercado</b> — categoría, número de habitaciones y servicios, según la demanda del destino y el <a href='/servicios/proyectos-proyeccion-inmobiliaria'>mejor y mayor uso</a> del terreno.",
      "<b>Proyección de ingresos</b> — ocupación y tarifa promedio año por año, desde la apertura hasta que el hotel se estabiliza, más alimentos y bebidas, eventos y otros servicios.",
      "<b>Costos e inversión</b> — gastos de operación, terreno, construcción, mobiliario y equipamiento, y gastos de preapertura.",
      "<b>Descuento de los flujos</b> — los flujos de cada año y el valor del hotel al final del periodo se traen a valor presente con una tasa que refleja el riesgo del proyecto.",
      "<b>Resultado</b> — valor actual neto (VAN), tasa interna de retorno (TIR) y escenarios optimista, base y pesimista.",
    ] },
    { type: "p", html: "El análisis completo —legal, técnico, de mercado y financiero— es nuestro <a href='/servicios/proyectos-estudio-viabilidad'>estudio de viabilidad</a>. El cálculo, paso a paso y con un ejemplo, está en nuestra guía de <a href='/articulos/valuacion-de-proyectos-hoteleros-con-flujos-descontados'>valuación de proyectos hoteleros con flujos descontados</a>." },
    { type: "h2", text: "¿Qué información se necesita para tasar un hotel?" },
    { type: "ul", items: [
      "<b>Documentos del inmueble</b> — partida registral o copia literal, planos y declaración del impuesto predial (PU y HR).",
      "<b>Licencias</b> — licencia de funcionamiento y clasificación o categorización del establecimiento.",
      "<b>Información de la operación</b> — estados financieros de los últimos tres años, y ocupación y tarifas por mes.",
      "<b>Inventario</b> — relación de mobiliario y equipos.",
      "<b>Contratos</b> — de operación, franquicia o arrendamiento, si los hay.",
    ] },
    { type: "p", html: "¿Necesitas valorizar un hotel o un resort? Cuéntanos la ubicación, la categoría y el número de habitaciones por <b>WhatsApp</b> y te damos el alcance y la cotización el mismo día, sin compromiso." },
  ],
  form: {
    bullets: [
      "Respuesta el mismo día por WhatsApp",
      "Cotización según el tamaño del hotel y la finalidad",
      "Atención en Lima y en todo el Perú",
    ],
    fields: [
      { type: "text", name: "nombre", label: "Nombre", placeholder: "Tu nombre" },
      {
        type: "text",
        name: "ubicacion",
        label: "Ubicación del hotel",
        placeholder: "Ej. Miraflores, Cusco, Paracas…",
      },
      {
        type: "select",
        name: "tipo",
        label: "Tipo de establecimiento",
        options: [
          "Hotel de ciudad",
          "Resort",
          "Hotel boutique",
          "Lodge",
          "Complejo turístico",
          "Hotel en proyecto",
          "Otro",
        ],
      },
      {
        type: "select",
        name: "finalidad",
        label: "Finalidad",
        options: [
          "Compra o venta",
          "Crédito / garantía bancaria",
          "Estados financieros (NIIF / IFRS)",
          "Seguros",
          "Remodelación, ampliación o reinversión",
          "Desarrollo de un hotel nuevo (proyección)",
          "Herencia / proceso judicial",
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
        q: "¿Cómo se calcula el valor de un hotel?",
        a: "Principalmente por los ingresos que genera: se proyectan la ocupación, las tarifas y los gastos, y ese flujo se trae a valor presente. El resultado se contrasta con ventas de hoteles comparables y con el costo de reposición del terreno, la edificación y el equipamiento.",
      },
      {
        q: "¿Se tasa solo el inmueble o también el negocio hotelero?",
        a: "Depende de la finalidad. Para una compraventa o una inversión se valoriza el hotel como negocio en marcha: inmueble, mobiliario y equipamiento, y su capacidad de generar ingresos. Para seguros, en cambio, se valoriza el costo de reposición de la edificación y el equipamiento.",
      },
      {
        q: "¿La tasación de un hotel sirve como garantía ante el banco?",
        a: "Sí. Elaboramos el informe conforme al Reglamento Nacional de Tasaciones del Perú (R.M. Nº172-2016-VIVIENDA), con valor comercial y de realización, firmado por peritos inscritos en el REPEV de la SBS.",
      },
      {
        q: "¿Sirve si voy a remodelar, ampliar o reinvertir en el hotel?",
        a: "Sí. La tasación establece el valor actual del hotel antes de la inversión, y un estudio de viabilidad evalúa si la remodelación o ampliación se paga con los ingresos adicionales.",
      },
      {
        q: "¿Hacen la proyección para desarrollar un hotel nuevo?",
        a: "Sí. Proyectamos la ocupación, las tarifas, los ingresos, los gastos y la inversión del proyecto, y lo valuamos con flujos descontados para obtener el VAN y la TIR en escenarios optimista, base y pesimista.",
      },
      {
        q: "¿Qué es la valuación con flujos descontados de un proyecto hotelero?",
        a: "Es el método que estima el valor de un hotel que aún no existe a partir del dinero que generará: se proyectan sus flujos año por año, se suma el valor del hotel al final del periodo y todo se trae a valor presente con una tasa que refleja el riesgo. Si ese valor supera la inversión, el proyecto crea valor.",
      },
      {
        q: "¿Qué información necesito para tasar un hotel?",
        a: "La partida registral, planos y PU/HR del inmueble; la licencia de funcionamiento y la clasificación del establecimiento; los estados financieros y las estadísticas de ocupación y tarifas de los últimos años; el inventario de mobiliario y equipos, y los contratos de operación o franquicia, si existen.",
      },
      {
        q: "¿Tasan hoteles y resorts fuera de Lima?",
        a: "Sí. Tenemos cobertura en todo el Perú y coordinamos la inspección donde esté el hotel, sea en Lima, Cusco, la costa o la selva.",
      },
      {
        q: "¿Cuánto cuesta la tasación de un hotel?",
        a: "Depende del tamaño del hotel, el número de habitaciones, su ubicación y la finalidad del informe. Escríbenos con esos datos por WhatsApp y te damos una cotización el mismo día.",
      },
    ],
  },
  finalCta: {
    title: "Conoce cuánto vale tu hotel hoy",
    body: "Cuéntanos la ubicación, la categoría y el número de habitaciones por WhatsApp y te damos el alcance hoy.",
    button: "Cotiza la tasación de tu hotel",
  },
  whatsapp: {
    baseMessage: "Hola VanguardiaMax, quiero cotizar una *Tasación de Hotel o Resort*.",
    segment: "tasacion-hoteles",
  },
};
