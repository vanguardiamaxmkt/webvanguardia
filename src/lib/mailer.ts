import nodemailer, { type Transporter } from "nodemailer";

/**
 * Transporte SMTP (Hostinger por defecto). Se crea de forma perezosa para no
 * intentar conectar durante el build. Configúralo con variables de entorno:
 *   SMTP_HOST   (por defecto smtp.hostinger.com)
 *   SMTP_PORT   (por defecto 465)
 *   SMTP_SECURE (por defecto "true" cuando el puerto es 465)
 *   SMTP_USER   (buzón, p. ej. info@vanguardiamax.com)
 *   SMTP_PASS   (contraseña del buzón)
 */
let transporter: Transporter | undefined;

/** MAIL_DRY_RUN=1: no envía nada, imprime el correo en consola (pruebas locales). */
const DRY_RUN = process.env.MAIL_DRY_RUN === "1";

function getTransporter(): Transporter {
  if (!transporter) {
    if (DRY_RUN) {
      transporter = nodemailer.createTransport({ jsonTransport: true });
      return transporter;
    }
    const port = Number(process.env.SMTP_PORT || 465);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port,
      secure: (process.env.SMTP_SECURE ?? "true") === "true" || port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

function listaCorreos(v: string): string[] {
  return v
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * Destinatarios visibles ("Para") de los formularios de contacto.
 * Se puede sobrescribir con CONTACT_TO (varios correos separados por coma).
 */
export const CONTACT_TO: string[] = listaCorreos(process.env.CONTACT_TO || "info@vanguardiamax.com");

/**
 * Destinatarios en copia oculta (BCC): reciben el correo pero no aparecen en
 * "Para". Se puede sobrescribir con CONTACT_BCC.
 */
export const CONTACT_BCC: string[] = listaCorreos(process.env.CONTACT_BCC ?? "ayllondark@gmail.com");

/** Resumen de la configuración de correo, sin secretos (para /admin/correo). */
export function mailConfigSummary() {
  const pass = process.env.SMTP_PASS || "";
  return {
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: Number(process.env.SMTP_PORT || 465),
    user: process.env.SMTP_USER || "",
    passLength: pass.length,
    from: process.env.CONTACT_FROM || process.env.SMTP_USER || "",
    to: CONTACT_TO,
    bcc: CONTACT_BCC,
    dryRun: DRY_RUN,
  };
}

/** Prueba el login SMTP sin enviar nada. */
export async function verifySmtp(): Promise<{ ok: boolean; error?: string }> {
  if (DRY_RUN) return { ok: true };
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return { ok: false, error: "Faltan SMTP_USER y/o SMTP_PASS en las variables de entorno." };
  }
  try {
    await getTransporter().verify();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}

/** Envía un correo. Lanza si el SMTP no está configurado o falla. */
export async function sendMail(opts: {
  /** Destinatarios visibles; por defecto CONTACT_TO. */
  to?: string | string[];
  /** Copia oculta; por defecto CONTACT_BCC. */
  bcc?: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}): Promise<void> {
  if (!DRY_RUN && (!process.env.SMTP_USER || !process.env.SMTP_PASS)) {
    throw new Error(
      "SMTP no configurado (faltan SMTP_USER / SMTP_PASS en las variables de entorno).",
    );
  }
  const from = process.env.CONTACT_FROM || process.env.SMTP_USER || "web@vanguardiamax.com";
  const info = await getTransporter().sendMail({
    from: `"VanguardiaMax Web" <${from}>`,
    to: opts.to ?? CONTACT_TO,
    bcc: opts.bcc ?? CONTACT_BCC,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
  });
  if (DRY_RUN) console.log("[mail dry-run]", info.message);
}
