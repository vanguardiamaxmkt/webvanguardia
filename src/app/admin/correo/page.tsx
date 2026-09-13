import { mailConfigSummary, verifySmtp } from "@/lib/mailer";
import { AdminHeader } from "../_components/AdminHeader";
import { TestMailButton } from "./_TestMailButton";

export const dynamic = "force-dynamic";

/**
 * Diagnóstico del correo del formulario: muestra la configuración (sin la
 * contraseña), prueba el login SMTP y permite enviar un correo de prueba.
 */
export default async function AdminCorreo() {
  const cfg = mailConfigSummary();
  const login = await verifySmtp();

  const filas: [string, string][] = [
    ["Servidor SMTP", `${cfg.host}:${cfg.port}`],
    ["Usuario (SMTP_USER)", cfg.user || "— no definido"],
    ["Contraseña (SMTP_PASS)", cfg.passLength ? `definida (${cfg.passLength} caracteres)` : "— no definida"],
    ["Remitente", cfg.from || "—"],
    ["Destinatarios", cfg.to.join(", ")],
  ];

  return (
    <>
      <AdminHeader />
      <main className="adm-main">
        <div className="adm-row">
          <div>
            <div className="adm-h1">Correo del formulario</div>
            <div className="adm-sub">Solicitudes del hero → /api/contacto → SMTP</div>
          </div>
        </div>

        {cfg.dryRun && (
          <div className="adm-notice">
            <b>MAIL_DRY_RUN=1</b>: modo simulación. No se envía nada; los correos se imprimen en la
            consola del servidor.
          </div>
        )}

        <div
          className="adm-notice"
          style={
            login.ok
              ? { background: "#e6f6ee", borderColor: "#bfe5cf", color: "#1f6b3f" }
              : { background: "#fdf2f2", borderColor: "#eccaca", color: "#8a2b2b" }
          }
        >
          {login.ok ? (
            <>
              <b>✓ Login SMTP correcto.</b> El servidor de correo acepta las credenciales.
            </>
          ) : (
            <>
              <b>✗ Login SMTP fallido:</b> {login.error}
              <br />
              <span style={{ fontSize: 13 }}>
                Si dice <i>authentication failed</i>, la contraseña no es la del buzón (o la variable no se
                actualizó tras reiniciar). Si dice <i>timeout</i> o <i>ECONNREFUSED</i>, el hosting no permite
                la conexión al servidor SMTP.
              </span>
            </>
          )}
        </div>

        <table className="adm-table" style={{ marginBottom: 18 }}>
          <tbody>
            {filas.map(([k, v]) => (
              <tr key={k}>
                <th style={{ width: 220 }}>{k}</th>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="adm-card" style={{ padding: 18 }}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>Enviar correo de prueba</div>
          <div className="adm-sub" style={{ marginBottom: 12 }}>
            Envía un mensaje a los destinatarios configurados para confirmar la entrega de punta a punta.
          </div>
          <TestMailButton />
        </div>
      </main>
    </>
  );
}
