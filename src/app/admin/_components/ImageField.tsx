"use client";

import { useRef, useState } from "react";

/** Campo de imagen: sube a Supabase (vía /api/admin/upload) y guarda la ruta /img. */
export function ImageField({
  label,
  value,
  folder,
  onChange,
}: {
  label: string;
  value: string;
  folder: string;
  onChange: (url: string) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);

  async function upload(file: File) {
    setBusy(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("folder", folder);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await res.json();
    setBusy(false);
    if (res.ok && data.url) onChange(data.url);
    else alert(data.error || "No se pudo subir la imagen.");
  }

  return (
    <div className="adm-field">
      <label>{label}</label>
      <div className="adm-imgfield">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {value ? <img className="adm-thumb" src={value} alt="" /> : <div className="adm-thumb" />}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button type="button" className="adm-btn" onClick={() => fileRef.current?.click()} disabled={busy}>
            {busy ? "Subiendo…" : value ? "Cambiar" : "Subir imagen"}
          </button>
          {value && (
            <button type="button" className="adm-btn adm-btn-danger" onClick={() => onChange("")}>
              Quitar
            </button>
          )}
        </div>
      </div>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) upload(f);
          e.target.value = "";
        }}
      />
    </div>
  );
}
