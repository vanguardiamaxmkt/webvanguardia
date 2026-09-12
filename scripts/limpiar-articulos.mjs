/**
 * Limpia el export legacy de WordPress (db/legacy/articles.json) y genera
 * db/articulos-import.json con filas listas para la tabla `articulos`.
 *
 *   node scripts/limpiar-articulos.mjs [--keep-images]
 *
 * El JSON de salida es el artefacto revisable: se puede editar a mano antes de
 * ejecutar `node --env-file=.env.local scripts/importar-articulos.mjs`.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { OVERRIDES, STUB_CATEGORY } from "./articulos-overrides.mjs";

const IN = "db/legacy/articles.json";
const OUT = "db/articulos-import.json";
const KEEP_IMAGES = process.argv.includes("--keep-images");

const BLOCK = "h1|h2|h3|h4|h5|h6|ul|ol|table|blockquote|figure|div|pre";
const AUTHOR = "Equipo VanguardiaMax";

/* --------------------------------------------------------------------------
 * Mapa de URLs antiguas de WordPress -> rutas de la nueva estructura por silos
 * -------------------------------------------------------------------------- */
const LINK_MAP = {
  "": "/",
  "tasacion-de-inmuebles-2": "/tasaciones",
  "tasaciones-de-vehiculos-y-maquinarias": "/tasaciones/vehicular",
  "tasaciones-judiciales": "/tasaciones/judicial",
  "tasaciones-hipotecarias": "/tasaciones/hipotecaria",
  "cotizaciones-tasaciones": "/tasaciones",
  "servicios-tasaciones-peru-vanguardiamax": "/servicios",
};

/** Enlaces salientes a competencia directa: se quitan y queda solo el texto. */
const UNLINK_DOMAINS = ["puntodestino.com.mx"];

/** Fuentes oficiales: se enlazan sin nofollow. */
const DOFOLLOW_DOMAINS = ["gob.pe", ".edu.", "ifrs.org", "rics.org", "sunarp", "poderjudicial"];

/** Correcciones de erratas evidentes del contenido original. */
const TEXT_FIXES = [
  [/El\s+tasadores de terrenos\s+elabora/gi, "El tasador de terrenos elabora"],
  [/Contratar a un tasador o\s*tasadores de terrenos\s*profesionales/gi, "Contratar a tasadores de terrenos profesionales"],
  [/con los con los mejores/gi, "con los mejores"],
  [/garantiza una estudio/gi, "garantiza un estudio"],
  [/est[eé]n De forma correcta registradas/gi, "estén correctamente registradas"],
  [/Confirmar que todas las cambios/gi, "Confirmar que todos los cambios"],
  [/los cambios sean leg[ií]timas/gi, "los cambios sean legítimos"],
  [/Verificar de que la propiedad cumpla/gi, "Verificar que la propiedad cumpla"],
  [/llevar acabo/gi, "llevar a cabo"],
  [/la cu[aá]l te ayudar[aá]/gi, "la cual te ayudará"],
  [/con el cu[aá]l se conocer[aá]/gi, "con el cual se conocerá"],
  [/est[aá] en alza, esta estable o en baja/gi, "está en alza, estable o en baja"],
  [/s\/\.\s*(\d)/g, "S/ $1"],
  [/es fundamental ser competente y adaptar/gi, "es fundamental que sea competente y se adapte"],
  [/valuaciones de intangibles e intangibles/gi, "valuaciones de tangibles e intangibles"],
];

/* --------------------------------------------------------------------------
 * Utilidades de texto
 * -------------------------------------------------------------------------- */

/** Repara texto UTF-8 leído como latin-1 (por si el export viniera dañado). */
function fixMojibake(s) {
  if (!/Ã[-¿]|â|Â[ -¿]/.test(s)) return s;
  try {
    return Buffer.from(s, "latin1").toString("utf8");
  } catch {
    return s;
  }
}

function normalizeSpaces(s) {
  return s
    .replace(/&nbsp;/gi, " ")
    .replace(/[ ​⁠﻿]/g, " ")
    .replace(/[ \t]{2,}/g, " ");
}

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;|&apos;/gi, "'")
    .replace(/&hellip;/gi, "…")
    .replace(/&laquo;/gi, "«")
    .replace(/&raquo;/gi, "»");
}

function toText(html) {
  return normalizeSpaces(decodeEntities(String(html).replace(/<[^>]+>/g, " ")))
    .replace(/\s+/g, " ")
    .trim();
}

/** Corta en el límite de palabra sin pasarse de `max`. */
function clamp(text, max, ellipsis = true) {
  const t = String(text).trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const at = Math.max(cut.lastIndexOf(" "), cut.lastIndexOf(","));
  const base = (at > max * 0.5 ? cut.slice(0, at) : cut).replace(/[\s,;:.\-–—]+$/, "");
  return ellipsis ? base + "…" : base;
}

function applyTextFixes(s) {
  return TEXT_FIXES.reduce((acc, [re, to]) => acc.replace(re, to), s);
}

/* --------------------------------------------------------------------------
 * Limpieza del HTML
 * -------------------------------------------------------------------------- */

/** Quita atributos de presentación heredados de WordPress. */
function stripAttributes(html) {
  return html
    .replace(/\s(?:style|class|id|dir|lang|data-[\w-]+)\s*=\s*"[^"]*"/gi, "")
    .replace(/\s(?:style|class|id|dir|lang|data-[\w-]+)\s*=\s*'[^']*'/gi, "")
    .replace(/<img([^>]*?)\stitle\s*=\s*"[^"]*"/gi, "<img$1");
}

/** Saca de dentro de <p> los bloques que WordPress anidó mal (h2, ul, ol...). */
function unwrapBlocksInParagraphs(html) {
  const blockRe = new RegExp("<(" + BLOCK + ")\\b[^>]*>[\\s\\S]*?</\\1>|<img\\b[^>]*/?>", "gi");
  const hasBlock = new RegExp("<(?:" + BLOCK + ")\\b|<img\\b", "i");
  let prev;
  do {
    prev = html;
    html = html.replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, (full, inner) => {
      if (!hasBlock.test(inner)) return full;
      const out = [];
      let last = 0;
      inner.replace(blockRe, (m, _tag, off) => {
        const before = inner.slice(last, off);
        if (toText(before)) out.push("<p>" + before.trim() + "</p>");
        out.push(m);
        last = off + m.length;
        return m;
      });
      const tail = inner.slice(last);
      if (toText(tail)) out.push("<p>" + tail.trim() + "</p>");
      return out.join("\n");
    });
  } while (html !== prev);
  return html;
}

/** Reescribe enlaces internos al nuevo esquema de URLs y sanea los externos. */
function rewriteLinks(html, slugSet, stats) {
  return html.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (full, attrs, text) => {
    const href = (attrs.match(/href\s*=\s*"([^"]*)"/i) || [])[1] || "";
    const internal = /^\/(?!\/)/.test(href) || /^https?:\/\/(www\.)?vanguardiamax\.com/i.test(href);

    if (internal) {
      const path = href
        .replace(/^https?:\/\/(www\.)?vanguardiamax\.com/i, "")
        .replace(/[?#].*$/, "")
        .replace(/^\/+|\/+$/g, "");
      const seg = path.split("/")[0] || "";
      const target = slugSet.has(seg) ? "/articulos/" + seg : (LINK_MAP[seg] ?? "/tasaciones");
      stats.internal.push(("/" + path).replace(/^\/$/, "/") + " -> " + target);
      return '<a href="' + target + '">' + text + "</a>";
    }

    if (!href || /^#/.test(href)) return text;
    if (UNLINK_DOMAINS.some((d) => href.includes(d))) {
      stats.unlinked.push(href);
      return text;
    }
    const official = DOFOLLOW_DOMAINS.some((d) => href.includes(d));
    stats.external.push(href + (official ? "  (dofollow)" : ""));
    const rel = official ? "noopener noreferrer" : "nofollow noopener noreferrer";
    return '<a href="' + href + '" target="_blank" rel="' + rel + '">' + text + "</a>";
  });
}

/** Envuelve en <p> el texto suelto que WordPress dejó fuera de todo bloque. */
function wrapLooseText(html) {
  const blockRe = new RegExp("<(" + BLOCK + "|p)\\b[^>]*>[\\s\\S]*?</\\1>", "gi");
  const out = [];
  let last = 0;
  html.replace(blockRe, (m, _tag, off) => {
    const gap = html.slice(last, off);
    if (toText(gap)) out.push("<p>" + gap.trim() + "</p>");
    out.push(m);
    last = off + m.length;
    return m;
  });
  const tail = html.slice(last);
  if (toText(tail)) out.push("<p>" + tail.trim() + "</p>");
  return out.join("\n");
}

/** Un párrafo que es solo una pregunta corta funciona como subtítulo. */
function promoteQuestionHeadings(html) {
  return html.replace(/<p>([\s\S]*?)<\/p>/gi, (full, inner) => {
    const text = toText(inner);
    if (!/\?$/.test(text) || text.length > 100 || /<(?:a|ul|ol|img)\b/i.test(inner)) return full;
    return "<h2>" + inner.trim() + "</h2>";
  });
}

/** Convierte <p><strong>Título corto</strong></p> en un <h2> real. */
function promoteFakeHeadings(html) {
  return html.replace(/<p>\s*<strong>([\s\S]*?)<\/strong>\s*<\/p>/gi, (full, inner) => {
    const text = toText(inner);
    if (!text || text.length > 110 || /[:;]$/.test(text) || /<\w/.test(inner)) return full;
    return "<h2>" + inner.trim() + "</h2>";
  });
}

function cleanHtml(raw, ctx) {
  let html = fixMojibake(String(raw || ""));

  // 1. Espacios y saltos artificiales de WordPress (<br /> dentro de listas...).
  html = normalizeSpaces(html).replace(/<br\s*\/?>/gi, "\n");

  // 2. Atributos de presentación y etiquetas obsoletas.
  html = stripAttributes(html);
  html = html
    .replace(/<\/?(?:span|font|center)\b[^>]*>/gi, "")
    .replace(/<b\b[^>]*>/gi, "<strong>")
    .replace(/<\/b>/gi, "</strong>")
    .replace(/<i\b[^>]*>/gi, "<em>")
    .replace(/<\/i>/gi, "</em>");

  // 3. Imágenes: los archivos originales ya no existen en el servidor.
  html = html.replace(/<img\b[^>]*>/gi, (tag) => {
    const src = (tag.match(/src\s*=\s*"([^"]*)"/i) || [])[1] || "";
    if (src) ctx.images.add(src);
    if (!KEEP_IMAGES) return "";
    const alt = (tag.match(/alt\s*=\s*"([^"]*)"/i) || [])[1] || "";
    return '<img src="' + src.replace(/^\/images\//, "/img/") + '" alt="' + alt + '" loading="lazy" />';
  });

  // 4. Estructura: sacar bloques anidados dentro de <p> y normalizar títulos.
  html = unwrapBlocksInParagraphs(html);
  html = wrapLooseText(html);
  html = html.replace(/<h([1-6])\b[^>]*>\s*<strong>([\s\S]*?)<\/strong>\s*<\/h\1>/gi, "<h$1>$2</h$1>");
  html = html.replace(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi, "<h2>$1</h2>"); // el H1 lo pone la página
  html = html.replace(/<h[456]\b[^>]*>([\s\S]*?)<\/h[456]>/gi, (full, inner) =>
    toText(inner).length > 70 ? "<p>" + inner + "</p>" : "<h3>" + inner + "</h3>",
  );
  // Un "título" de más de 110 caracteres es en realidad un párrafo.
  html = html.replace(/<h([23])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (full, _lvl, inner) =>
    toText(inner).length > 110 ? "<p>" + inner + "</p>" : full,
  );
  html = promoteFakeHeadings(html);
  html = promoteQuestionHeadings(html);
  // Signo de apertura que faltaba en los títulos interrogativos.
  html = html.replace(/<(h[23])>(?!\s*¿)([^<]*\?)<\/\1>/gi, "<$1>¿$2</$1>");

  // 5. Enlaces.
  html = rewriteLinks(html, ctx.slugSet, ctx.links);

  // 6. Vaciados: elementos que quedaron sin contenido.
  let prev;
  do {
    prev = html;
    html = html
      .replace(/<(p|li|h[1-6]|strong|em|a)\b[^>]*>\s*<\/\1>/gi, "")
      .replace(/<(ul|ol)\b[^>]*>\s*<\/\1>/gi, "");
  } while (html !== prev);

  // 7. Puntuación que quedó suelta al eliminar fragmentos (", ,", " .").
  html = applyTextFixes(html).replace(/>([^<]+)</g, (m, text) =>
    ">" + text.replace(/,(\s*,)+/g, ",").replace(/[ \t]+([,.;:])/g, "$1") + "<",
  );

  // 8. Formato final: un bloque por línea.
  html = html
    .replace(/[ \t]*\n[ \t\n]*/g, "\n")
    .replace(new RegExp("(</(?:p|" + BLOCK + ")>)\\s*", "gi"), "$1\n")
    .replace(new RegExp("\\s*(<(?:p|" + BLOCK + ")\\b)", "gi"), "\n$1")
    .replace(/\n{2,}/g, "\n")
    .replace(/[ \t]+</g, " <")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/<(p|li|h[1-6])>[ \t]+/g, "<$1>")
    .replace(/[ \t]+<\/(p|li|h[1-6])>/g, "</$1>")
    .trim();

  return html;
}

/* --------------------------------------------------------------------------
 * Metadatos
 * -------------------------------------------------------------------------- */

/** UTC (post_date_gmt de WP) -> hora de Lima, formato DATETIME de MySQL. */
function toLimaDatetime(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return new Date(d.getTime() - 5 * 3600 * 1000).toISOString().slice(0, 19).replace("T", " ");
}

function cleanTitle(t) {
  return applyTextFixes(decodeEntities(fixMojibake(String(t || ""))))
    .replace(/\s+/g, " ")
    .replace(/\btasaci[oó]n\s+Tasaci[oó]n\b/gi, "tasación")
    .trim()
    .replace(/\.$/, "");
}

/** Primer párrafo útil del contenido, para el resumen. */
function firstParagraph(html) {
  const paragraphs = [...html.matchAll(/<p>([\s\S]*?)<\/p>/gi)].map((m) => toText(m[1]));
  return paragraphs.find((p) => p.length > 80) || paragraphs[0] || toText(html);
}

/** Comprueba que las etiquetas de bloque quedaron balanceadas. */
function checkBalance(html) {
  const bad = [];
  for (const tag of ["p", "ul", "ol", "li", "h2", "h3", "strong", "em", "a"]) {
    const open = (html.match(new RegExp("<" + tag + "\\b", "gi")) || []).length;
    const close = (html.match(new RegExp("</" + tag + ">", "gi")) || []).length;
    if (open !== close) bad.push(tag + " " + open + "/" + close);
  }
  return bad;
}

function headingOutline(html) {
  return [...html.matchAll(/<(h[23])>([\s\S]*?)<\/\1>/gi)].map(
    (m) => (m[1] === "h3" ? "   - " : " # ") + toText(m[2]),
  );
}

/* --------------------------------------------------------------------------
 * Proceso principal
 * -------------------------------------------------------------------------- */

const source = JSON.parse(readFileSync(IN, "utf8"));
const slugSet = new Set(source.map((a) => a.slug));
const images = new Set();
const report = [];

const rows = source.map((raw) => {
  const ov = OVERRIDES[raw.legacyId] || {};
  const links = { internal: [], external: [], unlinked: [] };
  const ctx = { slugSet, images, links };

  const content = cleanHtml(raw.contentHtml, ctx);
  const title = ov.title || cleanTitle(raw.title);
  const plain = toText(content);
  const words = plain ? plain.split(/\s+/).length : 0;

  // Los "stubs" (una frase suelta) y los duplicados entran como borrador.
  const notes = [];
  let status = "publicado";
  if (raw.isStub || words < 60) {
    status = "borrador";
    notes.push("contenido mínimo (" + words + " palabras) importado del sitio antiguo");
  }
  if (ov.draftReason) {
    status = "borrador";
    notes.push(ov.draftReason);
  }

  const excerpt = clamp(ov.excerpt || firstParagraph(content) || toText(raw.excerpt), 220);
  // El seoDescription del export viene cortado a mitad de palabra: se prefiere
  // derivarla del resumen ya limpio.
  const metaDescription = clamp(ov.meta_description || excerpt, 155);
  const cover = KEEP_IMAGES && raw.coverImage ? raw.coverImage.replace(/^\/images\//, "/img/") : null;
  if (raw.coverImage) images.add(raw.coverImage);

  report.push({
    legacyId: raw.legacyId,
    slug: raw.slug,
    status,
    palabras: words,
    balance: checkBalance(content),
    outline: headingOutline(content),
    links,
    notes,
  });

  return {
    slug: raw.slug,
    title,
    excerpt,
    content,
    cover_image: cover,
    category: ov.category || STUB_CATEGORY[raw.legacyId] || "Tasaciones",
    tags: ov.tags || null,
    author: AUTHOR,
    status,
    focus_keyword: ov.focus_keyword || null,
    meta_title: ov.meta_title || null,
    meta_description: metaDescription,
    og_image: null,
    canonical_url: null,
    noindex: status === "borrador" ? 1 : 0,
    published_at: toLimaDatetime(raw.publishedAt),
    created_at: toLimaDatetime(raw.publishedAt),
    updated_at: toLimaDatetime(raw.updatedAt) || toLimaDatetime(raw.publishedAt),
    _legacyId: raw.legacyId,
    _sourceUrl: raw.sourceUrl,
    _notes: notes.join(" | ") || null,
  };
});

writeFileSync(OUT, JSON.stringify(rows, null, 2) + "\n", "utf8");

/* ------------------------------- Informe --------------------------------- */
const pub = rows.filter((r) => r.status === "publicado").length;
console.log("Artículos procesados: " + rows.length + "  (publicado: " + pub + ", borrador: " + (rows.length - pub) + ")");
console.log("Salida: " + OUT + "\n");

for (const r of report) {
  console.log(
    "[" + r.status.padEnd(10) + "] " + r.slug + "  (" + r.palabras + " palabras)" +
      (r.balance.length ? "  ETIQUETAS DESBALANCEADAS: " + r.balance.join(", ") : ""),
  );
  if (r.notes.length) console.log("    nota: " + r.notes.join(" | "));
  if (process.argv.includes("--verbose")) {
    r.outline.forEach((h) => console.log("    " + h));
    r.links.internal.forEach((l) => console.log("    enlace interno: " + l));
    r.links.external.forEach((l) => console.log("    enlace externo: " + l));
    r.links.unlinked.forEach((l) => console.log("    enlace eliminado: " + l));
  }
}

if (images.size) {
  console.log("\nImágenes referenciadas en el contenido original (" + images.size + "):");
  for (const i of images) console.log("  " + i);
  console.log(
    KEEP_IMAGES
      ? "  -> conservadas como /img/... (deben existir en el bucket de Supabase)"
      : "  -> ELIMINADAS del contenido: los archivos ya no existen en el servidor antiguo.",
  );
}
