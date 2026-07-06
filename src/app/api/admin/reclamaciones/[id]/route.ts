import { NextResponse } from "next/server";
import { updateEstado } from "@/lib/reclamaciones";

export const dynamic = "force-dynamic";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await req.json().catch(() => ({}));
  const estado = body.estado === "atendido" ? "atendido" : "pendiente";
  await updateEstado(Number(id), estado, body.respuesta || "");
  return NextResponse.json({ ok: true });
}
