import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Recibe el lead del formulario y lo reenvía al webhook de Google Sheets
 * (Apps Script). Se ejecuta en el servidor para no exponer la URL del script
 * ni tener problemas de CORS. El cliente lo llama "fire-and-forget", así que
 * esto nunca retrasa la apertura de WhatsApp.
 */
export async function POST(req: Request) {
  const webhook = process.env.SHEETS_WEBHOOK_URL;
  if (!webhook) {
    // Sin webhook configurado: no hacemos nada (no rompe el flujo).
    return NextResponse.json({ ok: true, skipped: true });
  }
  try {
    const body = await req.text();
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
  } catch {
    // Silencioso: registrar el lead no debe afectar al usuario.
  }
  return NextResponse.json({ ok: true });
}
