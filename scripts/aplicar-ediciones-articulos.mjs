/**
 * Aplica ediciones puntuales (buscar -> reemplazar) al contenido de artículos
 * PUBLICADOS en producción, a través de la API del panel /admin (el servidor sí
 * tiene acceso a MySQL). Solo cambia el campo `content`; el resto del artículo
 * se reenvía tal cual porque la API de actualización reemplaza la fila completa.
 *
 *   node --env-file=.env.local scripts/aplicar-ediciones-articulos.mjs db/borradores/paso-6-enlaces.json --dry-run
 *   node --env-file=.env.local scripts/aplicar-ediciones-articulos.mjs db/borradores/paso-6-enlaces.json
 *
 * Cada "buscar" debe aparecer exactamente una vez en el artículo; si no, no se
 * aplica nada de ese artículo.
 */
import { readFileSync } from "node:fs";

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
  const problems = [];
  for (const e of list) {
    const n = content.split(e.buscar).length - 1;
    if (n !== 1) {
      problems.push(`"${e.buscar.slice(0, 50)}…" aparece ${n} veces`);
      continue;
    }
    if (content.includes(`href="${e.destino}"`)) {
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
  for (const e of list) console.log(`    + enlace a ${e.destino}`);
  if (DRY) {
    applied += list.length;
    continue;
  }

  // Reenviar el artículo completo con el contenido nuevo.
  const input = {
    slug: art.slug,
    title: art.title,
    excerpt: art.excerpt ?? undefined,
    content,
    cover_image: art.cover_image ?? undefined,
    category: art.category ?? undefined,
    tags: art.tags ?? undefined,
    author: art.author ?? undefined,
    status: art.status,
    focus_keyword: art.focus_keyword ?? undefined,
    meta_title: art.meta_title ?? undefined,
    meta_description: art.meta_description ?? undefined,
    og_image: art.og_image ?? undefined,
    canonical_url: art.canonical_url ?? undefined,
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

console.log(`\n${DRY ? "Simulación" : "Resultado"}: ${applied} enlaces OK, ${failed} con problemas.`);
if (failed) process.exit(1);
