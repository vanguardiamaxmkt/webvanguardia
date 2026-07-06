"use client";

import { useState } from "react";
import { site } from "@/content/site";

const DOC_TIPOS = ["DNI", "Carné de extranjería", "Pasaporte", "RUC"];

export function ReclamacionForm() {
  const [f, setF] = useState({
    con_nombre: "",
    con_doc_tipo: "DNI",
    con_doc_num: "",
    con_domicilio: "",
    con_telefono: "",
    con_email: "",
    con_menor: false,
    apo_nombre: "",
    bien_tipo: "servicio" as "producto" | "servicio",
    bien_monto: "",
    bien_descripcion: "",
    tipo: "" as "" | "reclamo" | "queja",
    detalle: "",
    pedido: "",
  });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [codigo, setCodigo] = useState("");

  function set<K extends keyof typeof f>(key: K, value: (typeof f)[K]) {
    setF((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!f.tipo) {
      setError("Selecciona si es un reclamo o una queja.");
      return;
    }
    setSending(true);
    setError("");
    const data = new FormData(e.currentTarget);
    if (data.get("empresa_web")) return; // honeypot
    const res = await fetch("/api/reclamacion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(f),
    });
    setSending(false);
    if (res.ok) {
      const d = await res.json();
      setCodigo(d.codigo || "registrado");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const d = await res.json().catch(() => ({}));
      setError(d.error || "No se pudo registrar. Intenta nuevamente.");
    }
  }

  if (codigo) {
    return (
      <div className="libro-ok">
        <div className="libro-ok-ic">✓</div>
        <h2>Reclamación registrada</h2>
        <p>
          Tu hoja de reclamación fue registrada con el código:
          <br />
          <strong className="libro-codigo">{codigo}</strong>
        </p>
        <p>
          Guarda este código como constancia. Te responderemos en el plazo de{" "}
          <b>15 días hábiles</b> conforme a ley. Si dejaste tu correo, recibirás
          la respuesta ahí.
        </p>
      </div>
    );
  }

  return (
    <form className="libro-form" onSubmit={onSubmit}>
      {/* Datos del proveedor (informativo) */}
      <div className="libro-prov">
        <strong>{site.legalName}</strong>
        {site.ruc && <span> · RUC {site.ruc}</span>}
        <span> · {site.address}</span>
      </div>

      {error && <div className="libro-error">{error}</div>}

      {/* 1. Consumidor */}
      <h3 className="libro-sec">1. Identificación del consumidor</h3>
      <div className="libro-grid">
        <div className="field">
          <label>Nombre y apellidos *</label>
          <input className="adm-input" value={f.con_nombre} onChange={(e) => set("con_nombre", e.target.value)} required />
        </div>
        <div className="field">
          <label>Tipo de documento *</label>
          <select className="adm-input" value={f.con_doc_tipo} onChange={(e) => set("con_doc_tipo", e.target.value)} required>
            {DOC_TIPOS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Nº de documento *</label>
          <input className="adm-input" value={f.con_doc_num} onChange={(e) => set("con_doc_num", e.target.value)} required />
        </div>
        <div className="field">
          <label>Teléfono</label>
          <input className="adm-input" type="tel" value={f.con_telefono} onChange={(e) => set("con_telefono", e.target.value)} />
        </div>
        <div className="field">
          <label>Correo electrónico</label>
          <input className="adm-input" type="email" value={f.con_email} onChange={(e) => set("con_email", e.target.value)} placeholder="Para recibir la respuesta" />
        </div>
        <div className="field">
          <label>Domicilio</label>
          <input className="adm-input" value={f.con_domicilio} onChange={(e) => set("con_domicilio", e.target.value)} />
        </div>
      </div>
      <label className="libro-check">
        <input type="checkbox" checked={f.con_menor} onChange={(e) => set("con_menor", e.target.checked)} />
        El consumidor es menor de edad
      </label>
      {f.con_menor && (
        <div className="field">
          <label>Nombre del padre o apoderado</label>
          <input className="adm-input" value={f.apo_nombre} onChange={(e) => set("apo_nombre", e.target.value)} />
        </div>
      )}

      {/* 2. Bien contratado */}
      <h3 className="libro-sec">2. Identificación del bien contratado</h3>
      <div className="libro-radios">
        <label>
          <input type="radio" name="bien_tipo" checked={f.bien_tipo === "producto"} onChange={() => set("bien_tipo", "producto")} /> Producto
        </label>
        <label>
          <input type="radio" name="bien_tipo" checked={f.bien_tipo === "servicio"} onChange={() => set("bien_tipo", "servicio")} /> Servicio
        </label>
      </div>
      <div className="libro-grid">
        <div className="field">
          <label>Monto reclamado (S/)</label>
          <input className="adm-input" type="number" step="0.01" min="0" value={f.bien_monto} onChange={(e) => set("bien_monto", e.target.value)} />
        </div>
        <div className="field">
          <label>Descripción del producto/servicio</label>
          <input className="adm-input" value={f.bien_descripcion} onChange={(e) => set("bien_descripcion", e.target.value)} placeholder="Ej. Tasación hipotecaria" />
        </div>
      </div>

      {/* 3. Detalle */}
      <h3 className="libro-sec">3. Detalle de la reclamación</h3>
      <div className="libro-radios">
        <label>
          <input type="radio" name="tipo" checked={f.tipo === "reclamo"} onChange={() => set("tipo", "reclamo")} /> <b>Reclamo</b>
        </label>
        <label>
          <input type="radio" name="tipo" checked={f.tipo === "queja"} onChange={() => set("tipo", "queja")} /> <b>Queja</b>
        </label>
      </div>
      <p className="libro-hint">
        <b>Reclamo:</b> disconformidad relacionada a los productos o servicios.{" "}
        <b>Queja:</b> disconformidad no relacionada a los productos o servicios; o
        malestar respecto a la atención al público.
      </p>
      <div className="field">
        <label>Detalle *</label>
        <textarea className="adm-input" rows={5} value={f.detalle} onChange={(e) => set("detalle", e.target.value)} required />
      </div>
      <div className="field">
        <label>Pedido del consumidor</label>
        <textarea className="adm-input" rows={3} value={f.pedido} onChange={(e) => set("pedido", e.target.value)} />
      </div>

      {/* Honeypot */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="empresa_web">No llenar</label>
        <input id="empresa_web" name="empresa_web" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="libro-check">
        <input type="checkbox" required /> Declaro que los datos consignados son verdaderos y no soy un robot.
      </label>

      <p className="libro-legal">
        La formulación del reclamo no impide acudir a otras vías de solución de
        controversias ni es requisito previo para interponer una denuncia ante el
        INDECOPI. El proveedor debe dar respuesta en un plazo no mayor a 15 días
        hábiles, improrrogable conforme a ley.
      </p>

      <button className="adm-btn adm-btn-primary" style={{ padding: "13px 20px" }} disabled={sending}>
        {sending ? "Enviando…" : "Enviar reclamación"}
      </button>
    </form>
  );
}
