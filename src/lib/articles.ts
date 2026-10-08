import "server-only";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import { getPool } from "./db";
import type { Article, ArticleInput } from "@/types/article";

type ArticleRow = Article & RowDataPacket;

/** Convierte el payload del formulario a columnas de la tabla. */
function toRow(input: ArticleInput, existing?: Article | null) {
  // published_at: al publicar por primera vez se fija a "ahora"; si ya tenía
  // fecha se conserva; si vuelve a borrador se mantiene la fecha previa.
  let publishedAt = input.published_at ?? existing?.published_at ?? null;
  if (input.status === "publicado" && !publishedAt) {
    publishedAt = new Date().toISOString().slice(0, 19).replace("T", " ");
  }
  return {
    slug: input.slug,
    title: input.title,
    excerpt: input.excerpt ?? null,
    content: input.content ?? null,
    cover_image: input.cover_image ?? null,
    category: input.category ?? null,
    tags: input.tags ?? null,
    author: input.author ?? null,
    status: input.status,
    focus_keyword: input.focus_keyword ?? null,
    meta_title: input.meta_title ?? null,
    meta_description: input.meta_description ?? null,
    og_image: input.og_image ?? null,
    canonical_url: input.canonical_url ?? null,
    noindex: input.noindex ? 1 : 0,
    published_at: publishedAt,
  };
}

/* ----------------------------- Lectura pública ---------------------------- */

export async function listPublished(limit = 50, offset = 0): Promise<Article[]> {
  const [rows] = await getPool().query<ArticleRow[]>(
    `SELECT * FROM articulos
       WHERE status = 'publicado'
         AND (published_at IS NULL OR published_at <= NOW())
       ORDER BY COALESCE(published_at, created_at) DESC
       LIMIT ? OFFSET ?`,
    [limit, offset],
  );
  return rows;
}

export async function getPublishedBySlug(slug: string): Promise<Article | null> {
  const [rows] = await getPool().query<ArticleRow[]>(
    `SELECT * FROM articulos WHERE slug = ? AND status = 'publicado' LIMIT 1`,
    [slug],
  );
  return rows[0] ?? null;
}

/**
 * Artículos para "Sigue leyendo": primero los de la misma categoría, luego los
 * más recientes. Excluye el actual.
 */
export async function listRelated(
  id: number,
  category: string | null,
  limit = 3,
): Promise<Article[]> {
  const [rows] = await getPool().query<ArticleRow[]>(
    `SELECT id, slug, title, excerpt, cover_image, category, published_at, created_at
       FROM articulos
       WHERE status = 'publicado'
         AND noindex = 0
         AND id <> ?
         AND (published_at IS NULL OR published_at <= NOW())
       ORDER BY (category <=> ?) DESC, COALESCE(published_at, created_at) DESC
       LIMIT ?`,
    [id, category, limit],
  );
  return rows;
}

/* ------------------------------ Panel /admin ------------------------------ */

export async function listAll(): Promise<Article[]> {
  const [rows] = await getPool().query<ArticleRow[]>(
    `SELECT * FROM articulos ORDER BY updated_at DESC`,
  );
  return rows;
}

export async function getById(id: number): Promise<Article | null> {
  const [rows] = await getPool().query<ArticleRow[]>(
    `SELECT * FROM articulos WHERE id = ? LIMIT 1`,
    [id],
  );
  return rows[0] ?? null;
}

export async function slugExists(slug: string, exceptId?: number): Promise<boolean> {
  const [rows] = await getPool().query<RowDataPacket[]>(
    `SELECT id FROM articulos WHERE slug = ? AND id <> ? LIMIT 1`,
    [slug, exceptId ?? 0],
  );
  return rows.length > 0;
}

export async function createArticle(input: ArticleInput): Promise<number> {
  const [res] = await getPool().query<ResultSetHeader>(
    `INSERT INTO articulos SET ?`,
    [toRow(input)],
  );
  return res.insertId;
}

export async function updateArticle(id: number, input: ArticleInput): Promise<void> {
  const existing = await getById(id);
  await getPool().query(`UPDATE articulos SET ? WHERE id = ?`, [
    toRow(input, existing),
    id,
  ]);
}

export async function deleteArticle(id: number): Promise<void> {
  await getPool().query(`DELETE FROM articulos WHERE id = ?`, [id]);
}
