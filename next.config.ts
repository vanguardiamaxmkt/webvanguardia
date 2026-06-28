import type { NextConfig } from "next";

// Imágenes: se guardan en Supabase Storage (bucket público) pero se sirven bajo
// el propio dominio vía rewrite, para que la URL sea del proyecto (/img/...) y
// no se vea que apunta a Supabase.
const supabaseUrl = (process.env.SUPABASE_URL ?? "").replace(/\/$/, "");
const bucket = process.env.SUPABASE_BUCKET ?? "articulos";

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
    ];
  },
};

export default nextConfig;
