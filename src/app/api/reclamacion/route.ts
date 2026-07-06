import { NextResponse } from "next/server";
import { createReclamacion } from "@/lib/reclamaciones";
import type { ReclamacionInput } from "@/types/reclamacion";

export const dynamic = "force-dynamic";

const REQUIRED = [
  "con_nombre",
  "con_doc_tipo",
  "con_doc_num",
  "bien_tipo",
  "tipo",
  "detalle",
] as const;

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));

  // Honeypot anti-bots
  if (body.empresa_web) return NextResponse.json({ ok: true });

  for (const k of REQUIRED) {
    if (!body[k] || String(body[k]).trim() === "") {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 },
      );
    }
  }

  try {
    const { codigo } = await createReclamacion(body as ReclamacionInput);
    return NextResponse.json({ ok: true, codigo });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "No se pudo registrar la reclamación.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
