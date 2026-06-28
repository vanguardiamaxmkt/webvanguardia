import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Cliente de Supabase con la service_role key. SOLO servidor — esta key tiene
 * permisos totales y nunca debe llegar al navegador.
 */
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Faltan SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY en el entorno.");
  }
  return createClient(url, key, { auth: { persistSession: false } });
}
