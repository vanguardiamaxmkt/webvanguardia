import { NextResponse } from "next/server";
import { sendMail, CONTACT_TO } from "@/lib/mailer";
import { TIPOS_TASACION } from "@/content/tipos-tasacion";
import { channelLabel, type Utm } from "@/lib/whatsapp";

export const dynamic = "force-dynamic";

const TIPOS: readonly string[] = TIPOS_TASACION;

function esc(s: unknown): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Sanea un texto libre que viene del navegador (longitud acotada). */
function txt(v: unknown, max = 500): string {
  return String(v ?? "").trim().slice(0, max);
}

/** Recorta una URL para que se lea bien en el correo (sin protocolo ni query). */
function shortUrl(url: string): string {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, "") + (u.pathname === "/" ? "/" : u.pathname);
  } catch {
    return url;
  }
}

/**
 * Recibe el formulario compacto del hero y lo envía por correo (vía SMTP) a
 * los destinatarios de CONTACT_TO, indicando de qué canal y página llegó el
 * lead (UTM / click-ids, página de entrada, referrer). Incluye honeypot.
 */
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));

  // Honeypot: si el campo trampa viene lleno, es un bot → fingimos éxito.
  if (body.empresa_web) return NextResponse.json({ ok: true });

  const nombre = String(body.nombre || "").trim();
  const telefono = String(body.telefono || "").trim();
  const tipo = String(body.tipo || "").trim();
  const email = String(body.email || "").trim();

  if (!nombre || !telefono || !tipo || !email) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Correo electrónico inválido." }, { status: 400 });
  }
  if (!TIPOS.includes(tipo)) {
    return NextResponse.json({ error: "Tipo de tasación inválido." }, { status: 400 });
  }

  // ---- Atribución de la visita -------------------------------------------
  const u = (body.utm ?? {}) as Partial<Utm>;
  const utm: Utm = {
    source: txt(u.source, 120),
    medium: txt(u.medium, 120),
    campaign: txt(u.campaign, 200),
    content: txt(u.content, 200),
    term: txt(u.term, 200),
    gclid: txt(u.gclid, 200),
    fbclid: txt(u.fbclid, 200),
    msclkid: txt(u.msclkid, 200),
    ttclid: txt(u.ttclid, 200),
  };
  const landing = txt(body.landing, 1000);
  const referrer = txt(body.referrer, 1000);
  const url = txt(body.url, 1000);
  const canal = channelLabel(utm, referrer);

  const campana = [
    utm.campaign && `campaña: ${utm.campaign}`,
    utm.source && `fuente: ${utm.source}`,
    utm.medium && `medio: ${utm.medium}`,
    utm.content && `anuncio/contenido: ${utm.content}`,
    utm.term && `término: ${utm.term}`,
    utm.gclid && "gclid ✓",
    utm.fbclid && "fbclid ✓",
    utm.msclkid && "msclkid ✓",
    utm.ttclid && "ttclid ✓",
  ]
    .filter(Boolean)
    .join(" · ");

  const filas: [string, string][] = [
    ["Nombres", nombre],
    ["Teléfono", telefono],
    ["Correo electrónico", email],
    ["Tipo de tasación", tipo],
    ["Canal", canal],
    ["Campaña / UTM", campana || "— (sin etiquetas de campaña)"],
    ["Página de entrada", landing ? shortUrl(landing) : "—"],
    ["Venía de (referrer)", referrer ? shortUrl(referrer) : "— (directo)"],
    ["Formulario enviado en", url ? shortUrl(url) : "—"],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#1b2b36">
      <h2 style="color:#0185cb;margin:0 0 12px">Nueva solicitud de tasación (web)</h2>
      <table style="border-collapse:collapse;width:100%;max-width:520px">
        ${filas
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:8px 10px;border:1px solid #e2e8ec;background:#f4f6f7;font-weight:600;white-space:nowrap">${esc(k)}</td>
                 <td style="padding:8px 10px;border:1px solid #e2e8ec">${esc(v)}</td>
               </tr>`,
          )
          .join("")}
      </table>
      <p style="color:#6e869c;font-size:12px;margin-top:14px">
        Enviado desde el formulario del hero en vanguardiamax.com
        ${landing ? `<br>URL de entrada completa: ${esc(landing)}` : ""}
      </p>
    </div>`;

  const text =
    filas.map(([k, v]) => `${k}: ${v}`).join("\n") +
    (landing ? `\nURL de entrada completa: ${landing}` : "");

  try {
    await sendMail({
      to: CONTACT_TO,
      subject: `Solicitud de tasación — ${nombre} (${tipo}) · ${canal}`,
      html,
      text,
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    // El detalle (SMTP, credenciales…) va al log del servidor, no al visitante.
    console.error("[/api/contacto] no se pudo enviar el correo:", e instanceof Error ? e.message : e);
    return NextResponse.json(
      { error: "No pudimos enviar tu solicitud. Escríbenos por WhatsApp o inténtalo de nuevo." },
      { status: 500 },
    );
  }
}
