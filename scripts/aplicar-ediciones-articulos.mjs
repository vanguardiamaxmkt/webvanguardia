/**
 * Aplica ediciones puntuales a artículos PUBLICADOS en producción, a través de
 * la API del panel /admin (el servidor sí tiene acceso a MySQL). Cada edición
 * puede traer:
 *   - "buscar" / "reemplazar": cambio dentro del campo `content`;
 *   - "campos": otros campos a sobrescribir (title, meta_title, focus_keyword…).
 * El resto del artículo se reenvía tal cual porque la API de actualización
 * reemplaza la fila completa.
 *
 *   node --env-file=.env.local scripts/aplicar-ediciones-articulos.mjs db/borradores/paso-6-enlaces.json --dry-run
 *   node --env-file=.env.local scripts/aplicar-ediciones-articulos.mjs db/borradores/paso-6-enlaces.json
 *
 * Cada "buscar" debe aparecer exactamente una vez en el artículo; si no, no se
 * aplica nada de ese artículo.
 */
import { readFileSync } from "node:fs";

/** Campos (además de `content`) que una edición puede sobrescribir. */
const EDITABLES = [
  "title", "excerpt", "category", "tags", "focus_keyword",
  "meta_title", "meta_description", "og_image", "canonical_url",
];

const FILE = process.argv.find((a) => a.endsWith(".json"));
const DRY = process.argv.includes("--dry-run");
const BASE = (process.env.SITE_URL || "https://vanguardiamax.com").replace(/\/$/, "");

if (!FILE) {
  console.error("Indica el archivo JSON de ediciones.");
  process.exit(1);
}
if (!process.env.ADMIN_USER || !process.env.ADMIN_PASSWORD) {
  console.error("Faltan ADMIN_USER / ADMIN_PASSWORD. Ejecuta con: node --env-file=.env.local …");
  process.exit(1);
}

const edits = JSON.parse(readFileSync(FILE, "utf8"));

const login = await fetch(BASE + "/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ user: process.env.ADMIN_USER, pass: process.env.ADMIN_PASSWORD }),
});
if (!login.ok) {
  console.error("Login en /admin falló:", login.status);
  process.exit(1);
}
const cookie = (login.headers.get("set-cookie") || "").split(";")[0];
const all = await (await fetch(BASE + "/api/admin/articles", { headers: { cookie } })).json();

// Agrupar por artículo.
const byId = new Map();
for (const e of edits) (byId.get(e.id) ?? byId.set(e.id, []).get(e.id)).push(e);

let applied = 0;
let failed = 0;

for (const [id, list] of byId) {
  const art = all.find((a) => a.id === id);
  if (!art) {
    console.log(`✗ [${id}] no existe en producción`);
    failed += list.length;
    continue;
  }

  let content = art.content || "";
  const fields = {};
  const problems = [];
  for (const e of list) {
    for (const [k, v] of Object.entries(e.campos ?? {})) {
      if (!EDITABLES.includes(k)) problems.push(`campo no editable: ${k}`);
      else fields[k] = v;
    }
    if (!e.buscar) continue;
    const n = content.split(e.buscar).length - 1;
    if (n !== 1) {
      problems.push(`"${e.buscar.slice(0, 50)}…" aparece ${n} veces`);
      continue;
    }
    if (e.destino && content.includes(`href="${e.destino}"`)) {
      problems.push(`ya enlaza a ${e.destino} (se evita el duplicado)`);
      continue;
    }
    content = content.replace(e.buscar, e.reemplazar);
  }

  if (problems.length) {
    console.log(`✗ [${id}] ${art.slug}\n    ` + problems.join("\n    "));
    failed += list.length;
    continue;
  }

  console.log(`${DRY ? "simula" : "aplica"} [${id}] ${art.slug}`);
  for (const e of list) {
    if (e.destino) console.log(`    + enlace a ${e.destino}`);
    else if (e.buscar) console.log(`    ~ texto: "${e.buscar.slice(0, 60)}…"`);
  }
  for (const [k, v] of Object.entries(fields)) console.log(`    ~ ${k}: ${JSON.stringify(v)}`);
  if (DRY) {
    applied += list.length;
    continue;
  }

  // Reenviar el artículo completo con el contenido nuevo.
  const merged = { ...art, ...fields };
  const input = {
    slug: art.slug,
    title: merged.title,
    excerpt: merged.excerpt ?? undefined,
    content,
    cover_image: art.cover_image ?? undefined,
    category: merged.category ?? undefined,
    tags: merged.tags ?? undefined,
    author: art.author ?? undefined,
    status: art.status,
    focus_keyword: merged.focus_keyword ?? undefined,
    meta_title: merged.meta_title ?? undefined,
    meta_description: merged.meta_description ?? undefined,
    og_image: merged.og_image ?? undefined,
    canonical_url: merged.canonical_url ?? undefined,
    noindex: Boolean(art.noindex),
    published_at: art.published_at ?? null,
  };
  const res = await fetch(`${BASE}/api/admin/articles/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", cookie },
    body: JSON.stringify(input),
  });
  if (res.ok) applied += list.length;
  else {
    failed += list.length;
    console.log(`    ✗ PUT ${res.status}: ${await res.text()}`);
  }
}

console.log(`\n${DRY ? "Simulación" : "Resultado"}: ${applied} ediciones OK, ${failed} con problemas.`);
if (failed) process.exit(1);
