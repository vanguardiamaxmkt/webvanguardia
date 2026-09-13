"use client";

import { useState } from "react";

/** Botón "Enviar correo de prueba" del panel /admin/correo. */
export function TestMailButton() {
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);

  async function enviar() {
    setBusy(true);
    setResult(null);
    try {
      const res = await fetch("/api/admin/correo", { method: "POST" });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "No se pudo enviar.");
      const bcc = (json.bcc as string[]) || [];
      setResult({
        ok: true,
        msg:
          "Enviado a: " + (json.to as string[]).join(", ") +
          (bcc.length ? " · copia oculta: " + bcc.join(", ") : "") +
          ". Revisa las bandejas (y Spam).",
      });
    } catch (e) {
      setResult({ ok: false, msg: e instanceof Error ? e.message : "No se pudo enviar." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <button type="button" className="adm-btn adm-btn-primary" onClick={enviar} disabled={busy}>
        {busy ? "Enviando…" : "Enviar correo de prueba"}
      </button>
      {result && (
        <div
          className="adm-notice"
          style={{
            marginTop: 12,
            marginBottom: 0,
            ...(result.ok
              ? { background: "#e6f6ee", borderColor: "#bfe5cf", color: "#1f6b3f" }
              : { background: "#fdf2f2", borderColor: "#eccaca", color: "#8a2b2b" }),
          }}
        >
          {result.ok ? "✓ " : "✗ "}
          {result.msg}
        </div>
      )}
    </div>
  );
}
