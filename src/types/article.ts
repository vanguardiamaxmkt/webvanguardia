export type ArticleStatus = "borrador" | "publicado";

/** Fila de la tabla `articulos`. */
export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  cover_image: string | null;
  category: string | null;
  tags: string | null;
  author: string | null;
  status: ArticleStatus;
  focus_keyword: string | null;
  meta_title: string | null;
  meta_description: string | null;
  og_image: string | null;
  canonical_url: string | null;
  noindex: number; // 0 | 1
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

/** Datos que envía el panel para crear/editar un artículo. */
export interface ArticleInput {
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  cover_image?: string;
  category?: string;
  tags?: string;
  author?: string;
  status: ArticleStatus;
  focus_keyword?: string;
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
  canonical_url?: string;
  noindex?: boolean;
  published_at?: string | null;
}
