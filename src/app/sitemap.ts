import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { pages, pagePath } from "@/content/pages";
import { listPublished } from "@/lib/articles";

export const dynamic = "force-dynamic";

/** Sitemap derivado del registro unificado de páginas + artículos publicados. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["/", "/tasaciones", "/servicios", "/articulos"];
  const pageRoutes = pages.map(pagePath);

  const base = [...staticRoutes, ...pageRoutes].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  // Artículos (si la BD está disponible).
  let articleEntries: MetadataRoute.Sitemap = [];
  try {
    const articles = await listPublished(1000);
    articleEntries = articles
      .filter((a) => !a.noindex)
      .map((a) => ({
        url: `${site.url}/articulos/${a.slug}`,
        lastModified: a.updated_at ? new Date(a.updated_at) : undefined,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
  } catch {
    articleEntries = [];
  }

  return [...base, ...articleEntries];
}
