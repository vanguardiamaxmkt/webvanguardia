/**
 * Inserta / actualiza en la tabla `articulos` las filas de db/articulos-import.json.
 *
 *   node --env-file=.env.local scripts/importar-articulos.mjs --dry-run
 *   node --env-file=.env.local scripts/importar-articulos.mjs
 *   node --env-file=.env.local scripts/importar-articulos.mjs db/articulos-extra.json
 *
 * La clave es el `slug`: si ya existe se actualiza, si no se inserta. Es
 * idempotente, se puede volver a ejecutar tras editar el JSON. Se puede pasar
 * otro archivo JSON (p. ej. artículos redactados a mano) como argumento.
 */
import { readFileSync } from "node:fs";
import mysql from "mysql2/promise";

const FILE = process.argv.find((a) => a.endsWith(".json")) ?? "db/articulos-import.json";
const DRY = process.argv.includes("--dry-run");

/** Columnas de la tabla y su longitud máxima (VARCHAR). */
const LIMITS = {
  slug: 200,
  title: 255,
  excerpt: 500,
  cover_image: 500,
  category: 120,
  tags: 500,
  author: 120,
  focus_keyword: 160,
  meta_title: 255,
  meta_description: 320,
  og_image: 500,
  canonical_url: 500,
};

const COLUMNS = [
  "slug", "title", "excerpt", "content", "cover_image", "category", "tags",
  "author", "status", "focus_keyword", "meta_title", "meta_description",
  "og_image", "canonical_url", "noindex", "published_at", "created_at", "updated_at",
];

const rows = JSON.parse(readFileSync(FILE, "utf8"));

/* ------------------------------ Validación ------------------------------- */
const errors = [];
const seen = new Set();

for (const r of rows) {
  const id = r.slug || "(sin slug)";
  if (!r.slug || !r.title) errors.push(id + ": faltan slug o title");
  if (seen.has(r.slug)) errors.push(id + ": slug duplicado en el JSON");
  seen.add(r.slug);
  if (!["borrador", "publicado"].includes(r.status)) errors.push(id + ": status inválido");
  for (const [col, max] of Object.entries(LIMITS)) {
    const v = r[col];
    if (typeof v === "string" && v.length > max) {
      errors.push(id + ": " + col + " tiene " + v.length + " caracteres (máximo " + max + ")");
    }
  }
}

if (errors.length) {
  console.error("El JSON tiene errores:\n  - " + errors.join("\n  - "));
  process.exit(1);
}

/* ------------------------------ Importación ------------------------------ */
function toRow(r) {
  return Object.fromEntries(COLUMNS.map((c) => [c, r[c] ?? null]));
}

const pub = rows.filter((r) => r.status === "publicado").length;
console.log(
  "Artículos en " + FILE + ": " + rows.length +
    "  (publicado: " + pub + ", borrador: " + (rows.length - pub) + ")",
);

if (!process.env.MYSQL_HOST) {
  console.error("Faltan las variables de MySQL. Ejecuta con: node --env-file=.env.local " + process.argv[1]);
  process.exit(1);
}

const db = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT || 3306),
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  charset: "utf8mb4",
  connectTimeout: 20000,
});

let inserted = 0;
let updated = 0;

try {
  for (const r of rows) {
    const [existing] = await db.query("SELECT id FROM articulos WHERE slug = ? LIMIT 1", [r.slug]);
    const action = existing.length ? "actualiza" : "inserta  ";
    console.log("  " + action + "  [" + r.status.padEnd(9) + "] " + r.slug);
    if (DRY) continue;

    if (existing.length) {
      await db.query("UPDATE articulos SET ? WHERE id = ?", [toRow(r), existing[0].id]);
      updated++;
    } else {
      await db.query("INSERT INTO articulos SET ?", [toRow(r)]);
      inserted++;
    }
  }

  if (DRY) {
    console.log("\nSimulación (--dry-run): no se escribió nada en la base de datos.");
  } else {
    const [[total]] = await db.query(
      "SELECT COUNT(*) AS n, SUM(status = 'publicado') AS publicados FROM articulos",
    );
    console.log(
      "\nInsertados: " + inserted + " | actualizados: " + updated +
        "\nTotal en la tabla: " + total.n + " (publicados: " + total.publicados + ")",
    );
  }
} finally {
  await db.end();
}
