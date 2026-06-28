"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pass }),
    });
    setLoading(false);
    if (res.ok) {
      const next = new URLSearchParams(window.location.search).get("next") || "/admin";
      router.replace(next);
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "No se pudo iniciar sesión.");
    }
  }

  return (
    <div className="adm-login">
      <form className="adm-login-card" onSubmit={onSubmit}>
        <h1>Panel de artículos</h1>
        <p>Inicia sesión para administrar el blog.</p>
        {error && <div className="adm-error">{error}</div>}
        <div className="adm-field">
          <label htmlFor="user">Usuario</label>
          <input
            id="user"
            className="adm-input"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            autoComplete="username"
            required
          />
        </div>
        <div className="adm-field">
          <label htmlFor="pass">Contraseña</label>
          <input
            id="pass"
            type="password"
            className="adm-input"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        <button className="adm-btn adm-btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={loading}>
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </div>
  );
}
