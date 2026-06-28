import "server-only";
import { getSupabaseAdmin } from "./supabase";

const BUCKET = process.env.SUPABASE_BUCKET ?? "articulos";

/** Convierte un nombre en un segmento de ruta seguro. */
function slugifyName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // quita tildes/diacríticos
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/**
 * Sube un archivo al bucket de Supabase y devuelve la ruta pública bajo `/img`,
 * que el rewrite de next.config sirve desde el propio dominio.
 */
export async function uploadImage(file: File, folder = "general"): Promise<string> {
  const supabase = getSupabaseAdmin();
  const base = slugifyName(file.name || "imagen");
  const unique = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const path = `${folder}/${unique}-${base}`;
  const bytes = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage.from(BUCKET).upload(path, bytes, {
    contentType: file.type || "application/octet-stream",
    upsert: false,
  });
  if (error) throw new Error("Error subiendo a Supabase: " + error.message);

  return `/img/${path}`;
}
