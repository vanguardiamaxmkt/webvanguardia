import type { FaqItem, ProseBlock } from "@/types/content";

/**
 * Índice /tasaciones. Página de destino para la búsqueda de cabecera
 * "tasaciones" (decisión del 10-10-2026, ver seo/competencia-tasaciones-2026-10.md)
 * y para el grupo "tasación de inmuebles / tasador de inmuebles" (paso 2 SEO,
 * sept. 2026), que conserva su sección y sus preguntas.
 *
 * Solo se afirma lo que ya está verificado en el sitio (seo/brief.md):
 * rango de precio, entrega express en 24 h, documentos, registros y cobertura.
 * Las definiciones de tasación, reglamentaria y comercial siguen el art. 3 del
 * Reglamento Nacional de Tasaciones (R.M. N.° 172-2016-VIVIENDA).
 */
export const tasacionesIndex = {
  meta: {
    title: "Tasaciones en Lima y todo el Perú | VanguardiaMax",
    description:
      "Tasaciones de inmuebles, vehículos, maquinaria y activos en Lima y todo el Perú. Peritos inscritos en la SBS (REPEV) y el REPEJ, con validez legal.",
  },
  eyebrow: "Tasadores certificados · inmuebles, vehículos y activos",
  heading: "Tasaciones en Lima y todo el Perú",
  // Corto a propósito: las tarjetas deben quedar a la vista sin hacer scroll.
  intro:
    "Inmuebles, vehículos, maquinaria, embarcaciones, obras de arte y activos de empresas, con validez ante bancos, juzgados, notarías y la SBS. Elige para qué necesitas tu tasación:",

  seoContent: [
    { type: "h2", text: "¿Qué es una tasación?" },
    {
      type: "p",
      html: "Una <b>tasación</b> es el procedimiento por el cual un perito tasador inspecciona, estudia y analiza las cualidades y características de un bien en una fecha determinada para fijar su valor. Así la define el <b>Reglamento Nacional de Tasaciones</b> del Perú (R.M. N.° 172-2016-VIVIENDA), que también fija qué debe contener el <b>informe técnico de tasación</b>: memoria descriptiva, cálculo del valor y anexos, firmados por el perito. Se tasan inmuebles, vehículos, maquinaria, embarcaciones, obras de arte y empresas completas.",
    },
    { type: "h2", text: "Tipos de tasaciones en el Perú" },
    {
      type: "p",
      html: "Las tasaciones se clasifican de tres maneras: por el tipo de valor que calculan, por el bien que se tasa y por la finalidad del informe. Las tres se combinan; por ejemplo, una tasación comercial de un departamento para un crédito hipotecario.",
    },
    { type: "h3", text: "Por el valor que se calcula: reglamentaria o comercial" },
    {
      type: "ul",
      items: [
        "<b>Tasación reglamentaria:</b> usa los valores arancelarios de terrenos y los valores unitarios oficiales de edificación que aprueba el Ministerio de Vivienda. Es la base del autovalúo y la piden entidades del Estado y trámites municipales.",
        "<b>Tasación comercial:</b> usa valores del libre mercado, con métodos directos (comparación de ventas) e indirectos (costo de reposición, capitalización de la renta, flujos descontados). Es la que exigen bancos, aseguradoras, juzgados, auditores y compradores.",
      ],
    },
    { type: "h3", text: "Por el bien que se tasa" },
    {
      type: "ul",
      items: [
        "<b>Inmuebles:</b> casas, departamentos, terrenos, locales, edificios y <a href='/tasaciones/agricolas'>predios agrícolas</a>.",
        "<b>Vehículos y maquinaria:</b> autos, camiones, maquinaria pesada, equipos y líneas de producción, con nuestra <a href='/tasaciones/vehicular'>tasación de vehículos y maquinarias</a>.",
        "<b>Embarcaciones:</b> naves de pesca, carga y recreo, con la <a href='/tasaciones/embarcaciones'>tasación de embarcaciones</a>.",
        "<b>Activos de empresas:</b> inventario y valorización de <a href='/tasaciones/activos-fijos'>activos fijos</a>, incluidos los intangibles y el negocio en marcha.",
        "<b>Obras de arte y bienes especiales:</b> pinturas, esculturas y colecciones, con la <a href='/tasaciones/obras-arte'>tasación de obras de arte</a>.",
      ],
    },
    { type: "h3", text: "Por la finalidad del informe" },
    {
      type: "ul",
      items: [
        "<a href='/tasaciones/hipotecaria'>Tasación hipotecaria</a>: garantía de un crédito; el perito debe estar inscrito en el REPEV de la SBS.",
        "<a href='/tasaciones/judicial'>Tasación judicial y pericial</a>: herencias, divorcios, remates y litigios; perito del REPEJ del Poder Judicial.",
        "<a href='/tasaciones/para-seguros'>Tasación para seguros</a>: valor asegurable para pólizas y siniestros.",
        "<a href='/tasaciones/empresas'>Tasación NIIF de activos fijos</a>: valor razonable para estados financieros y auditoría.",
        "<a href='/tasaciones/fiduciarias'>Tasación fiduciaria</a>: patrimonios en fideicomiso.",
        "<a href='/tasaciones/alquiler'>Tasación de alquileres y renta</a>: fijar o revisar la merced conductiva.",
        "<a href='/tasaciones/impuesto-predial'>Impuesto predial y municipal</a>: revisión del autovalúo y de la base imponible.",
        "<a href='/tasaciones/hoteles'>Tasación de hoteles y resorts</a>: inmueble, equipamiento y negocio en marcha.",
      ],
    },
    { type: "h2", text: "Tasación de inmuebles en Lima y todo el Perú" },
    {
      type: "p",
      html: "La <b>tasación de inmuebles</b> es el informe técnico que determina cuánto vale una propiedad. La elabora un perito tasador luego de inspeccionar el inmueble y analizar el mercado, conforme al Reglamento Nacional de Tasaciones. El informe expresa el <b>valor comercial</b> (lo que pagaría el mercado), el <b>valor de realización</b> (el que usa el banco para una venta rápida) y, cuando se requiere, el <b>valor asegurable</b>.",
    },
    {
      type: "p",
      html: "La finalidad define el tipo de informe: no es lo mismo tasar una vivienda para un <a href='/tasaciones/hipotecaria'>crédito hipotecario</a> que para una herencia o un proceso judicial. Por eso te orientamos primero sobre el documento correcto para tu caso.",
    },
    { type: "h2", text: "Tasadores certificados en Lima y todo el Perú" },
    {
      type: "p",
      html: "Nuestros <b>tasadores</b> son ingenieros y arquitectos colegiados, inscritos en los registros que exige cada trámite: el <b>REPEV</b> de la SBS para créditos y garantías, y el <b>REPEJ</b> del Poder Judicial para peritajes. Con más de 25 años de experiencia, atendemos en <b>Lima, Callao y provincias</b>, con equipos descentralizados en todo el Perú.",
    },
    { type: "h2", text: "Qué inmuebles tasamos" },
    {
      type: "ul",
      items: [
        "<b>Casas y departamentos (vivienda):</b> para <a href='/tasaciones/hipotecaria'>crédito hipotecario</a>, compraventa, herencias o divorcios con <a href='/tasaciones/judicial'>tasación judicial</a>.",
        "<b>Terrenos urbanos y agrícolas:</b> lotes, predios rústicos y <a href='/tasaciones/agricolas'>fundos agrícolas</a>.",
        "<b>Locales comerciales, oficinas y almacenes:</b> para garantías, compraventa o para fijar la renta con una <a href='/tasaciones/alquiler'>tasación de alquiler</a>.",
        "<b>Edificios, plantas industriales y proyectos inmobiliarios:</b> incluidos los <a href='/tasaciones/activos-fijos'>activos fijos</a> de empresas.",
        "<b>Hoteles y resorts:</b> valorizados como inmueble y como negocio en marcha, con nuestra <a href='/tasaciones/hoteles'>tasación de hoteles y resorts de lujo</a>.",
      ],
    },
    { type: "h2", text: "¿Cuánto cuesta una tasación en el Perú?" },
    {
      type: "p",
      html: "Una tasación de inmuebles cuesta aproximadamente entre <b>S/ 300 y S/ 1 500</b>, según el tipo de inmueble, su ubicación y la finalidad del informe. Para vehículos, maquinaria, embarcaciones y activos de empresas, la cotización depende del número de bienes y del lugar de la inspección. En todos los casos te damos el precio exacto el mismo día; si quieres entender qué mueve el precio, lee <a href='/articulos/precio-de-una-tasacion-cuanto-cuesta-tasar-en-peru-lo-que-las-tasadoras-no-te-dicen'>cuánto cuesta tasar en el Perú</a>.",
    },
    { type: "h2", text: "Documentos para tasar un inmueble" },
    {
      type: "ul",
      items: [
        "Copia literal de la partida registral o título de propiedad.",
        "PU y HR (declaración del impuesto predial).",
        "Planos del inmueble, si los tienes.",
        "Documentos que acrediten la titularidad.",
      ],
    },
    {
      type: "p",
      html: "Para vehículos basta la tarjeta de propiedad y para maquinaria la ficha técnica del equipo. Te confirmamos la lista exacta según tu caso por WhatsApp antes de la inspección.",
    },
  ] satisfies ProseBlock[],

  faq: {
    heading: "Preguntas frecuentes sobre las tasaciones",
    items: [
      {
        q: "¿Qué tipos de tasaciones existen en el Perú?",
        a: "Por el valor que calculan: reglamentarias (valores arancelarios oficiales) o comerciales (valores de mercado). Por el bien: inmuebles, vehículos y maquinaria, embarcaciones, activos de empresas y obras de arte. Por la finalidad: hipotecaria, judicial, para seguros, NIIF, fiduciaria, de alquiler y tributaria.",
      },
      {
        q: "¿Qué es una tasación de inmuebles?",
        a: "Es el informe técnico que determina el valor de una propiedad —valor comercial, de realización y, si se requiere, asegurable—, elaborado por un perito tasador conforme al Reglamento Nacional de Tasaciones del Perú.",
      },
      {
        q: "¿Quién puede ser perito tasador en el Perú?",
        a: "Según el Reglamento Nacional de Tasaciones, un profesional colegiado con experiencia acreditada en tasaciones, normalmente ingeniero o arquitecto. Según la finalidad se exige además estar inscrito en registros como el REPEV de la SBS (créditos y garantías) o el REPEJ del Poder Judicial (peritajes judiciales).",
      },
      {
        q: "¿Cómo verifico que un tasador está inscrito en la SBS?",
        a: "Pide su número de registro REPEV y compáralo con la relación de peritos valuadores (personas naturales y jurídicas) que la SBS publica en su portal, en Supervisados y registros → Registros → Otros registros → Peritos valuadores. Las tasaciones para bancos y otras entidades supervisadas deben consignar ese número.",
      },
      {
        q: "¿Cuánto cuesta una tasación?",
        a: "Una tasación de inmuebles cuesta aproximadamente entre S/ 300 y S/ 1 500, según el tipo de inmueble, su ubicación y la finalidad del informe. Vehículos, maquinaria y activos de empresas se cotizan según el número de bienes y su ubicación. Te damos la cotización exacta el mismo día.",
      },
      {
        q: "¿Cuánto demora una tasación?",
        a: "La tasación hipotecaria express se entrega en 24 horas. En otros informes el plazo depende del tipo de bien y la finalidad; te lo confirmamos al cotizar.",
      },
      {
        q: "¿Qué documentos necesito para tasar mi inmueble?",
        a: "Generalmente copia literal o título de propiedad, PU y HR, planos y cualquier documento que acredite la titularidad. Te indicamos la lista exacta según tu caso.",
      },
      {
        q: "¿Hacen tasaciones fuera de Lima?",
        a: "Sí. Tenemos cobertura nacional: Lima, Callao y provincias de todo el Perú.",
      },
    ] satisfies FaqItem[],
  },
};
