"use client";

import { site } from "@/content/site";

type Status = "ok" | "warn" | "bad";
interface Check {
  label: string;
  status: Status;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function has(haystack: string, needle: string): boolean {
  if (!needle) return false;
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

export interface SeoInput {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  contentHtml: string;
  hasImage: boolean;
}

export function computeSeo(input: SeoInput): { score: number; checks: Check[] } {
  const text = stripHtml(input.contentHtml);
  const words = text ? text.split(/\s+/).length : 0;
  const kw = input.focusKeyword.trim();
  const seoTitle = input.metaTitle || input.title;
  const firstChunk = text.slice(0, 160);
  const headings = (input.contentHtml.match(/<h[23][^>]*>(.*?)<\/h[23]>/gi) || []).join(" ");

  const checks: Check[] = [];

  checks.push({ label: kw ? `Palabra clave: “${kw}”` : "Define una palabra clave objetivo", status: kw ? "ok" : "bad" });
  if (kw) {
    checks.push({ label: "La palabra clave está en el título SEO", status: has(seoTitle, kw) ? "ok" : "bad" });
    checks.push({ label: "La palabra clave está en el slug (URL)", status: has(input.slug, kw.replace(/\s+/g, "-")) || has(input.slug, kw) ? "ok" : "warn" });
    checks.push({ label: "La palabra clave está en la meta descripción", status: has(input.metaDescription, kw) ? "ok" : "warn" });
    checks.push({ label: "La palabra clave aparece al inicio del contenido", status: has(firstChunk, kw) ? "ok" : "warn" });
    checks.push({ label: "La palabra clave está en un subtítulo (H2/H3)", status: has(headings, kw) ? "ok" : "warn" });
  }

  const tLen = seoTitle.length;
  checks.push({
    label: `Largo del título SEO: ${tLen} (ideal 30–60)`,
    status: tLen === 0 ? "bad" : tLen >= 30 && tLen <= 60 ? "ok" : "warn",
  });

  const dLen = input.metaDescription.length;
  checks.push({
    label: `Largo de la meta descripción: ${dLen} (ideal 120–160)`,
    status: dLen === 0 ? "bad" : dLen >= 120 && dLen <= 160 ? "ok" : "warn",
  });

  checks.push({
    label: `Longitud del contenido: ${words} palabras (mín. 300)`,
    status: words >= 600 ? "ok" : words >= 300 ? "warn" : "bad",
  });

  checks.push({ label: "Tiene al menos una imagen", status: input.hasImage ? "ok" : "warn" });

  const passed = checks.filter((c) => c.status === "ok").length;
  const score = Math.round((passed / checks.length) * 100);
  return { score, checks };
}

function scoreColor(score: number): string {
  if (score >= 80) return "var(--a-green)";
  if (score >= 50) return "#e0a82e";
  return "var(--a-red)";
}

export function SeoPanel({
  input,
}: {
  input: SeoInput & { excerpt: string };
}) {
  const { score, checks } = computeSeo(input);
  const seoTitle = input.metaTitle || input.title || "Título del artículo";
  const desc = input.metaDescription || input.excerpt || "La meta descripción aparecerá aquí…";
  const url = `${site.url.replace(/^https?:\/\//, "")}/articulos/${input.slug || "slug"}`;

  return (
    <div className="adm-panel">
      <h3>Análisis SEO</h3>

      <div className="adm-snippet">
        <div className="s-url">{url}</div>
        <div className="s-title">{seoTitle}</div>
        <div className="s-desc">{desc}</div>
      </div>

      <div className="adm-score">
        <span className="adm-dot" style={{ background: scoreColor(score) }} />
        Puntaje SEO: {score}/100
      </div>

      <ul className="adm-checks">
        {checks.map((c, i) => (
          <li key={i}>
            <span className={`ico ${c.status === "ok" ? "adm-ok" : c.status === "warn" ? "adm-warn" : "adm-bad"}`}>
              {c.status === "ok" ? "✓" : c.status === "warn" ? "!" : "×"}
            </span>
            {c.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
