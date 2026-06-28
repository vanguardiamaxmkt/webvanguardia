"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Article, ArticleInput } from "@/types/article";
import { slugify } from "@/lib/slug";
import { TipTapEditor } from "./TipTapEditor";
import { ImageField } from "./ImageField";
import { SeoPanel } from "./SeoPanel";

export function ArticleEditor({ article }: { article?: Article }) {
  const router = useRouter();
  const editing = !!article;

  const [f, setF] = useState({
    title: article?.title ?? "",
    slug: article?.slug ?? "",
    excerpt: article?.excerpt ?? "",
    content: article?.content ?? "",
    cover_image: article?.cover_image ?? "",
    category: article?.category ?? "",
    tags: article?.tags ?? "",
    author: article?.author ?? "",
    status: article?.status ?? ("borrador" as const),
    focus_keyword: article?.focus_keyword ?? "",
    meta_title: article?.meta_title ?? "",
    meta_description: article?.meta_description ?? "",
    og_image: article?.og_image ?? "",
    canonical_url: article?.canonical_url ?? "",
    noindex: (article?.noindex ?? 0) === 1,
  });
  const [slugEdited, setSlugEdited] = useState(editing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set<K extends keyof typeof f>(key: K, value: (typeof f)[K]) {
    setF((prev) => ({ ...prev, [key]: value }));
  }

  function onTitle(value: string) {
    setF((prev) => ({
      ...prev,
      title: value,
      slug: slugEdited ? prev.slug : slugify(value),
    }));
  }

  async function save(status: "borrador" | "publicado") {
    setSaving(true);
    setError("");
    const payload: ArticleInput = {
      ...f,
      status,
      published_at: article?.published_at ?? undefined,
    };
    const res = await fetch(
      editing ? `/api/admin/articles/${article!.id}` : "/api/admin/articles",
      {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );
    setSaving(false);
    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "No se pudo guardar.");
    }
  }

  return (
    <>
      <div className="adm-row">
        <div>
          <div className="adm-h1">{editing ? "Editar artículo" : "Nuevo artículo"}</div>
          <div className="adm-sub">
            <Link href="/admin">← Volver a la lista</Link>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {saving && <span className="adm-saving">Guardando…</span>}
          <button className="adm-btn" onClick={() => save("borrador")} disabled={saving}>
            Guardar borrador
          </button>
          <button className="adm-btn adm-btn-primary" onClick={() => save("publicado")} disabled={saving}>
            Publicar
          </button>
        </div>
      </div>

      {error && <div className="adm-error">{error}</div>}

      <div className="adm-grid">
        {/* ---- Columna principal ---- */}
        <div>
          <div className="adm-field">
            <label>Título</label>
            <input className="adm-input" value={f.title} onChange={(e) => onTitle(e.target.value)} placeholder="Título del artículo" />
          </div>

          <div className="adm-field">
            <label>
              Slug (URL) <span className="hint">/articulos/{f.slug || "…"}</span>
            </label>
            <input
              className="adm-input"
              value={f.slug}
              onChange={(e) => {
                setSlugEdited(true);
                set("slug", slugify(e.target.value));
              }}
              placeholder="mi-articulo"
            />
          </div>

          <div className="adm-field">
            <label>
              Resumen / bajada <span className="adm-counter">{f.excerpt.length}</span>
            </label>
            <textarea className="adm-textarea" value={f.excerpt} onChange={(e) => set("excerpt", e.target.value)} placeholder="Resumen corto que aparece en la lista y como respaldo de la meta descripción." />
          </div>

          <div className="adm-field">
            <label>Contenido</label>
            <TipTapEditor value={f.content} onChange={(html) => set("content", html)} />
          </div>
        </div>

        {/* ---- Columna lateral ---- */}
        <div>
          <div className="adm-panel">
            <h3>Publicación</h3>
            <div className="adm-field">
              <label>Estado</label>
              <select className="adm-select" value={f.status} onChange={(e) => set("status", e.target.value as "borrador" | "publicado")}>
                <option value="borrador">Borrador</option>
                <option value="publicado">Publicado</option>
              </select>
            </div>
            <div className="adm-field">
              <label>Categoría</label>
              <input className="adm-input" value={f.category} onChange={(e) => set("category", e.target.value)} placeholder="Ej. Tasaciones" />
            </div>
            <div className="adm-field">
              <label>Etiquetas <span className="hint">(separadas por coma)</span></label>
              <input className="adm-input" value={f.tags} onChange={(e) => set("tags", e.target.value)} placeholder="sbs, hipoteca, perú" />
            </div>
            <div className="adm-field">
              <label>Autor</label>
              <input className="adm-input" value={f.author} onChange={(e) => set("author", e.target.value)} placeholder="VanguardiaMax" />
            </div>
          </div>

          <div className="adm-panel">
            <h3>Imágenes</h3>
            <ImageField label="Imagen de portada" value={f.cover_image} folder="portadas" onChange={(url) => set("cover_image", url)} />
            <ImageField label="Imagen para redes (OG)" value={f.og_image} folder="og" onChange={(url) => set("og_image", url)} />
          </div>

          <div className="adm-panel">
            <h3>SEO</h3>
            <div className="adm-field">
              <label>Palabra clave objetivo</label>
              <input className="adm-input" value={f.focus_keyword} onChange={(e) => set("focus_keyword", e.target.value)} placeholder="tasación hipotecaria" />
            </div>
            <div className="adm-field">
              <label>Título SEO <span className="adm-counter">{f.meta_title.length}</span></label>
              <input className="adm-input" value={f.meta_title} onChange={(e) => set("meta_title", e.target.value)} placeholder="(si lo dejas vacío usa el título)" />
            </div>
            <div className="adm-field">
              <label>Meta descripción <span className="adm-counter">{f.meta_description.length}</span></label>
              <textarea className="adm-textarea" value={f.meta_description} onChange={(e) => set("meta_description", e.target.value)} />
            </div>
            <div className="adm-field">
              <label>URL canónica <span className="hint">(opcional)</span></label>
              <input className="adm-input" value={f.canonical_url} onChange={(e) => set("canonical_url", e.target.value)} placeholder="https://…" />
            </div>
            <label style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, fontWeight: 600, color: "var(--a-navy)" }}>
              <input type="checkbox" checked={f.noindex} onChange={(e) => set("noindex", e.target.checked)} />
              No indexar (noindex)
            </label>
          </div>

          <SeoPanel
            input={{
              title: f.title,
              slug: f.slug,
              metaTitle: f.meta_title,
              metaDescription: f.meta_description,
              focusKeyword: f.focus_keyword,
              contentHtml: f.content,
              excerpt: f.excerpt,
              hasImage: !!f.cover_image || /<img/i.test(f.content),
            }}
          />
        </div>
      </div>
    </>
  );
}
