import type { NextConfig } from "next";

// Imágenes: se guardan en Supabase Storage (bucket público) pero se sirven bajo
// el propio dominio vía rewrite, para que la URL sea del proyecto (/img/...) y
// no se vea que apunta a Supabase.
const supabaseUrl = (process.env.SUPABASE_URL ?? "").replace(/\/$/, "");
const bucket = process.env.SUPABASE_BUCKET ?? "articulos";

// Artículos migrados del WordPress antiguo: vivían en la raíz del dominio
// (vanguardiamax.com/<slug>/) y ahora están bajo /articulos/<slug>.
const legacyArticleSlugs = [
  "tasadores-de-terrenos-como-determinar-el-valor-del-terreno",
  "como-realizar-una-tasacion-inmobiliaria-en-tres-pasos-detallados",
  "tasaciones-de-inmuebles-guia-completa-para-valoraciones-precisas",
  "cuales-son-los-pasos-para-la-construccion-de-un-centro-comercial",
  "precio-de-una-tasacion-cuanto-cuesta-tasar-en-peru-lo-que-las-tasadoras-no-te-dicen",
  "que-es-la-tasacion-de-propiedades-con-ifrs",
  "tasacion-judicial-evaluacion-tecnica-para-procesos-legales-en-el-peru",
  "tasaciones-ifrs-en-peru-descubre-el-valor-real-de-tu-empresa",
];

// URLs antiguas que no tienen artículo publicado propio: los duplicados apuntan
// al artículo que sí se publicó y las notas breves, al índice del blog. Si más
// adelante se publica alguna desde /admin, basta con moverla a la lista de arriba.
const legacyArticleAliases: Record<string, string> = {
  "tasaciones-todo-lo-que-necesitas-saber":
    "/articulos/tasaciones-de-inmuebles-guia-completa-para-valoraciones-precisas",
  "tasacion-judicial-importancia-proceso-y-aplicaciones-en-el-sistema-legal-peruano":
    "/articulos/tasacion-judicial-evaluacion-tecnica-para-procesos-legales-en-el-peru",
  "la-vivienda-sube-un-37-al-inicio-de-2022-a-la-espera-de-la-estabilizacion-de-precios": "/articulos",
  "las-tasaciones-hipotecarias-de-vivienda-aumentaron-un-5-hasta-junio-a-maximos-desde-2014": "/articulos",
  "las-tasaciones-hipotecarias-de-viviendas-se-estancan-en-la-primera-mitad-del-ano": "/articulos",
  "que-hacer-para-no-perderse-en-la-compra-de-una-casa": "/articulos",
  "liberan-predios-e-interferencias-para-la-construccion-del-puente-huampani": "/articulos",
  "tasador-online-sepa-en-cuanto-esta-valorizado-su-inmueble": "/articulos",
};

// Páginas de servicio y URLs del WordPress antiguo que aún reciben impresiones
// en Search Console (export 1 jul – 19 sep 2026, ver seo/gsc/2026-09) y que
// devolvían 404. Cada una va a su página equivalente en la nueva estructura.
const legacyPageRedirects: Record<string, string> = {
  // Tasaciones
  "tasaciones-de-alquileres-y-renta": "/tasaciones/alquiler",
  "tasaciones-judiciales": "/tasaciones/judicial",
  "gestion-notarial": "/tasaciones/judicial",
  "peritaje-judicial-y-gestion-notarial": "/tasaciones/judicial",
  "tasaciones-para-cobertura-de-seguros": "/tasaciones/para-seguros",
  "tasaciones-para-toma-de-seguros": "/tasaciones/para-seguros",
  "tasaciones-de-vehiculos-y-maquinarias": "/tasaciones/vehicular",
  "tasacion-equipos-estado-de-obsolescencia": "/tasaciones/activos-fijos",
  "tasaciones-con-fines-contables": "/tasaciones/empresas",
  "tasaciones-con-fines-contables/tasaciones-overhaul-calculo-de-vidas-utiles-para-dar-baja-estados-financieros":
    "/tasaciones/empresas",
  "inventarios-y-tasaciones-de-activos-fijos-bajo-ifrs": "/tasaciones/empresas",
  "tasacion-gestion-e-inventarios": "/tasaciones/empresas",
  "tasaciones-de-todo-tipo-de-embarcaciones": "/tasaciones/embarcaciones",
  "tasaciones-inmobiliarias-analisis-y-calculo-impuesto-predial-municipal": "/tasaciones/impuesto-predial",
  "tasacion-de-inmuebles-old": "/tasaciones",
  "tasacion-de-inmuebles-2": "/tasaciones",
  "tasaciones-vanguardiamax": "/tasaciones",
  // Servicios
  "servicios-tasaciones-peru-vanguardiamax": "/servicios",
  "planos-y-topografia": "/servicios/auditoria-planos",
  "auditoria-de-planos-e-inmuebles": "/servicios/auditoria-planos",
  "supervision-de-obra-la-garantia-de-que-tu-inversion-no-se-devalue": "/servicios/proyectos-supervision-obras",
  "proyectos-y-supervision-de-obras": "/servicios/proyectos-supervision-obras",
  "saneamiento-independizaciones-y-tramites": "/servicios/saneamiento-inmobiliario",
  "consultoria-inmobiliaria-y-bi": "/servicios/proyectos-estudio-viabilidad",
  // Artículos con slug distinto en el sitio nuevo
  "valoraciones-ifrs-niif-la-clave-para-estados-financieros-precisos-y-auditable":
    "/articulos/valoraciones-ifrs-niif-peru",
  // Activo solo cuando se publique el artículo (hoy en borrador en /admin).
  "guia-completa-sobre-el-calculo-del-valor-de-reposicion": "/articulos/valor-de-reposicion",
  // Institucionales
  "nosotros": "/",
  "nosotros-2": "/",
  "contacto-tasaciones": "/",
  "cotizaciones-tasaciones": "/",
  "libro-reclamaciones": "/libro-de-reclamaciones",
};

// Archivos de WordPress (autor, categorías, etiquetas, noticias) → índice del blog.
const legacyBlogArchives = ["noticias", "author", "category", "tag"];

const legacyArticleRedirects = [
  ...legacyArticleSlugs.map((slug) => ({
    source: `/${slug}`,
    destination: `/articulos/${slug}`,
    statusCode: 301,
  })),
  ...Object.entries(legacyArticleAliases).map(([slug, destination]) => ({
    source: `/${slug}`,
    destination,
    statusCode: 301,
  })),
  ...Object.entries(legacyPageRedirects).map(([slug, destination]) => ({
    source: `/${slug}`,
    destination,
    statusCode: 301,
  })),
  ...legacyBlogArchives.flatMap((base) => [
    { source: `/${base}`, destination: "/articulos", statusCode: 301 },
    { source: `/${base}/:path*`, destination: "/articulos", statusCode: 301 },
  ]),
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    if (!supabaseUrl) return [];
    return [
      {
        source: "/img/:path*",
        destination: `${supabaseUrl}/storage/v1/object/public/${bucket}/:path*`,
      },
    ];
  },
  // 301 de las URLs antiguas a la nueva estructura por silos (/tasaciones, /servicios).
  async redirects() {
    return [
      // www → dominio principal (Search Console contaba www como página aparte).
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.vanguardiamax.com" }],
        destination: "https://vanguardiamax.com/:path*",
        statusCode: 301,
      },
      { source: "/hipotecaria", destination: "/tasaciones/hipotecaria", statusCode: 301 },
      { source: "/judicial", destination: "/tasaciones/judicial", statusCode: 301 },
      { source: "/activos-fijos", destination: "/tasaciones/activos-fijos", statusCode: 301 },
      { source: "/empresas", destination: "/tasaciones/empresas", statusCode: 301 },
      { source: "/alquileres", destination: "/tasaciones/alquiler", statusCode: 301 },
      { source: "/vehiculos", destination: "/tasaciones/vehicular", statusCode: 301 },
      {
        source: "/saneamiento-inmobiliario",
        destination: "/servicios/saneamiento-inmobiliario",
        statusCode: 301,
      },
      {
        source: "/servicios/embarcaciones",
        destination: "/tasaciones/embarcaciones",
        statusCode: 301,
      },
      {
        source: "/servicios/impuesto-predial",
        destination: "/tasaciones/impuesto-predial",
        statusCode: 301,
      },
      {
        source: "/servicios/supervision-obras",
        destination: "/servicios/proyectos-supervision-obras",
        statusCode: 301,
      },
      {
        source: "/tasaciones-para-seguros",
        destination: "/tasaciones/para-seguros",
        statusCode: 301,
      },
      // Blog migrado desde WordPress (/<slug> -> /articulos/<slug>).
      ...legacyArticleRedirects,
    ];
  },
};

export default nextConfig;
