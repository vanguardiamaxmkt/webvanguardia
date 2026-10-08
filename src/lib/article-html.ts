/**
 * Utilidades para el HTML de los artículos (vienen del editor de /admin):
 * anclas en los H2, índice de contenidos y tiempo de lectura.
 */

export interface TocItem {
  id: string;
  text: string;
}

const stripTags = (html: string) =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/**
 * Añade un `id` a cada H2 (respeta el que ya tenga) y devuelve el índice.
 * Los id repetidos llevan sufijo (-2, -3…).
 */
export function withHeadingAnchors(html: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const used = new Set<string>();
  const out = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (match, attrs: string, inner: string) => {
    const text = stripTags(inner);
    if (!text) return match;
    const existing = attrs.match(/\sid=["']([^"']+)["']/i)?.[1];
    let id = existing || slugify(text) || "seccion";
    if (!existing) {
      const base = id;
      for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
    }
    used.add(id);
    toc.push({ id, text });
    return existing ? match : `<h2${attrs} id="${id}">${inner}</h2>`;
  });
  return { html: out, toc };
}

/** Palabras del artículo y minutos de lectura (200 palabras por minuto, mínimo 1). */
export function readingStats(html: string): { words: number; minutes: number } {
  const words = stripTags(html).split(" ").filter(Boolean).length;
  return { words, minutes: Math.max(1, Math.round(words / 200)) };
}
