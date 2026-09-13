import { NextResponse } from "next/server";
import { CONTACT_TO, mailConfigSummary, sendMail, verifySmtp } from "@/lib/mailer";

export const dynamic = "force-dynamic";

/** Estado de la configuración de correo + prueba de login SMTP (sin enviar). */
export async function GET() {
  const config = mailConfigSummary();
  const login = await verifySmtp();
  return NextResponse.json({ config, login });
}

/** Envía un correo de prueba a los destinatarios configurados. */
export async function POST() {
  try {
    await sendMail({
      to: CONTACT_TO,
      subject: "Prueba de correo — formulario web VanguardiaMax",
      text:
        "Este es un correo de prueba enviado desde el panel /admin/correo.\n" +
        "Si lo recibes, el formulario del hero ya puede enviar solicitudes.",
      html:
        "<p>Este es un correo de prueba enviado desde el panel <b>/admin/correo</b>.</p>" +
        "<p>Si lo recibes, el formulario del hero ya puede enviar solicitudes.</p>",
    });
    return NextResponse.json({ ok: true, to: CONTACT_TO });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "No se pudo enviar el correo de prueba." },
      { status: 500 },
    );
  }
}
