"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Reclamacion } from "@/types/reclamacion";

export function ReclamacionCard({ r }: { r: Reclamacion }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [respuesta, setRespuesta] = useState(r.respuesta ?? "");

  async function marcar(estado: "atendido" | "pendiente") {
    setBusy(true);
    await fetch(`/api/admin/reclamaciones/${r.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado, respuesta }),
    });
    setBusy(false);
    router.refresh();
  }

  const fmt = (d: string | null) =>
    d ? new Date(d).toLocaleString("es-PE") : "—";

  return (
    <div className="adm-card" style={{ padding: 18, marginBottom: 14 }}>
      <div className="adm-row" style={{ marginBottom: 10 }}>
        <div>
          <strong>{r.codigo}</strong>{" "}
          <span className={`adm-badge ${r.tipo === "reclamo" ? "adm-badge-draft" : "adm-badge-draft"}`}>
            {r.tipo}
          </span>{" "}
          <span className={`adm-badge ${r.estado === "atendido" ? "adm-badge-pub" : "adm-badge-draft"}`}>
            {r.estado}
          </span>
          <div className="adm-sub">{fmt(r.fecha)}</div>
        </div>
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.6 }}>
        <div><b>Consumidor:</b> {r.con_nombre} · {r.con_doc_tipo} {r.con_doc_num}</div>
        <div><b>Contacto:</b> {r.con_telefono || "—"} · {r.con_email || "—"}</div>
        {r.con_domicilio && <div><b>Domicilio:</b> {r.con_domicilio}</div>}
        {r.con_menor === 1 && <div><b>Menor de edad</b> · Apoderado: {r.apo_nombre || "—"}</div>}
        <div><b>Bien:</b> {r.bien_tipo}{r.bien_monto ? ` · S/ ${r.bien_monto}` : ""}{r.bien_descripcion ? ` · ${r.bien_descripcion}` : ""}</div>
        <div style={{ marginTop: 8 }}><b>Detalle:</b> {r.detalle}</div>
        {r.pedido && <div><b>Pedido:</b> {r.pedido}</div>}
      </div>
      <div className="adm-field" style={{ marginTop: 12 }}>
        <label>Respuesta / notas internas</label>
        <textarea
          className="adm-textarea"
          value={respuesta}
          onChange={(e) => setRespuesta(e.target.value)}
          placeholder="Registra aquí la respuesta al consumidor…"
        />
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {r.estado !== "atendido" ? (
          <button className="adm-btn adm-btn-primary" onClick={() => marcar("atendido")} disabled={busy}>
            Marcar como atendido
          </button>
        ) : (
          <button className="adm-btn" onClick={() => marcar("pendiente")} disabled={busy}>
            Reabrir
          </button>
        )}
      </div>
    </div>
  );
}
