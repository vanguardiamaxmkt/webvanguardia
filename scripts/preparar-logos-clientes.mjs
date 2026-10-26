// Normaliza los logos de public/clientes al mismo formato que public/certificaciones:
// lienzo 300×130 transparente, logo recortado (sin márgenes ni fondo blanco) y centrado
// dentro de una caja de 236×70, exportado a .webp.
// Uso: node scripts/preparar-logos-clientes.mjs
import sharp from "sharp";
import { readdirSync, mkdirSync } from "node:fs";
import { join, parse } from "node:path";

const SRC = "public/clientes";
const OUT = "public/clientes/web";
const WHITE_TEXT = new Set(["sa-fernando"]);
const W = 300, H = 130, BOX_W = 236, BOX_H = 70;
mkdirSync(OUT, { recursive: true });

for (const file of readdirSync(SRC)) {
  const { name, ext } = parse(file);
  if (![".png", ".jpg", ".jpeg", ".svg", ".webp"].includes(ext.toLowerCase())) continue;
  const input = sharp(join(SRC, file), ext === ".svg" ? { density: 600 } : {}).ensureAlpha();
  // 1) fondo blanco casi puro → transparente (los jpg/png con fondo blanco)
  const { data, info } = await input.raw().toBuffer({ resolveWithObject: true });
  // Logos pensados para fondo oscuro (texto blanco sobre transparente): el blanco pasa a gris oscuro.
  const whiteOnTransparent = WHITE_TEXT.has(name);
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] > 245 && data[i + 1] > 245 && data[i + 2] > 245) {
      if (whiteOnTransparent) { data[i] = data[i + 1] = data[i + 2] = 0x33; }
      else data[i + 3] = 0;
    }
  }
  // 2) recortar el área transparente
  const trimmed = await sharp(data, { raw: info }).trim({ threshold: 1 }).png().toBuffer();
  // 3) encajar en la caja y centrar en el lienzo
  const fitted = await sharp(trimmed).resize(BOX_W, BOX_H, { fit: "inside" }).png().toBuffer();
  const meta = await sharp(fitted).metadata();
  const out = join(OUT, name.toLowerCase().replace(/_/g, "-") + ".webp");
  await sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: fitted, left: Math.round((W - meta.width) / 2), top: Math.round((H - meta.height) / 2) }])
    .webp({ quality: 92 })
    .toFile(out);
  console.log(`${file} → ${out} (logo ${meta.width}×${meta.height})`);
}
