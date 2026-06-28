import Image, { type ImageProps } from "next/image";

/**
 * Imagen con lazy loading por defecto, lista para usar cuando se agreguen fotos
 * (peritos, inmuebles, proyectos, etc.).
 *
 * Envuelve `next/image`, que de fábrica: difiere la carga hasta que la imagen se
 * acerca al viewport (`loading="lazy"`), sirve `srcset` responsivo + AVIF/WebP y
 * decodifica de forma asíncrona. Solo la primera imagen visible (LCP) debería
 * pasar `priority`.
 *
 * Uso:
 *   <LazyImage src="/peritos.jpg" alt="Equipo de peritos" width={800} height={600} />
 *   <LazyImage src="/hero.jpg" alt="…" fill priority sizes="100vw" />
 */
export function LazyImage({ alt, ...props }: ImageProps) {
  return <Image alt={alt} decoding="async" {...props} />;
}
