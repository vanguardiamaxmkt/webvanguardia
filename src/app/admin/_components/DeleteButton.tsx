"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeleteButton({ id, title }: { id: number; title: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function onDelete() {
    if (!confirm(`¿Eliminar el artículo "${title}"? Esta acción no se puede deshacer.`)) return;
    setBusy(true);
    const res = await fetch(`/api/admin/articles/${id}`, { method: "DELETE" });
    setBusy(false);
    if (res.ok) router.refresh();
    else alert("No se pudo eliminar.");
  }

  return (
    <button className="adm-tool" style={{ color: "var(--a-red)" }} onClick={onDelete} disabled={busy}>
      {busy ? "…" : "Eliminar"}
    </button>
  );
}
