"use client";

import { useState } from "react";
import type { CertCard as CertCardData } from "@/types/content";
import { Seal } from "@/components/sections/Seal";
import { TIPOS_TASACION } from "@/content/tipos-tasacion";
import { useWhatsApp } from "@/components/whatsapp/WhatsAppProvider";

/**
 * Tarjeta del hero: cabecera "Informe de Tasación" (valores con barras),
 * formulario compacto y sello de certificación, todo en una sola pieza.
 * A diferencia del wizard inferior (que abre WhatsApp), este envía la
 * solicitud por correo vía /api/contacto, junto con la atribución de la
 * visita (UTM, página de entrada, referrer) para saber de dónde llegó el lead.
 * Incluye honeypot y consentimiento de datos.
 */
export function HeroLeadForm({ cert }: { cert: Omit<CertCardData, "kind"> }) {
  const { utm, origin, visit, segment } = useWhatsApp();
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const data = new FormData(e.currentTarget);
    if (data.get("empresa_web")) return; // honeypot: bot

    const payload = {
      nombre: data.get("nombre"),
      telefono: data.get("telefono"),
      tipo: data.get("tipo"),
      email: data.get("email"),
      // Atribución de la visita
      segmento: segment,
      origen: origin,
      utm,
      landing: visit.landing,
      referrer: visit.referrer,
      url: window.location.href,
    };

    setSending(true);
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "No se pudo enviar. Intenta de nuevo.");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo enviar.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="hero-card">
      <div className="cert-top">
        <div>
          <h4>{cert.title}</h4>
          <p>{cert.subtitle}</p>
        </div>
      </div>
      <div className="cert-rows" role="img" aria-label="Ejemplo de informe de tasación">
        {cert.rows.map((row, i) => {
          const bar = i === 1 ? " b2" : i >= 2 ? " b3" : "";
          return (
            <div key={row.k}>
              <div className="cert-row">
                <span className="k">{row.k}</span>
                <span className="v">{row.v}</span>
              </div>
              <div className={`cert-bar${bar}`} />
            </div>
          );
        })}
      </div>

      {done ? (
        <div className="hero-form hero-form--ok">
          <div className="hf-ok-ic">✓</div>
          <h3>¡Solicitud enviada!</h3>
          <p>Recibimos tus datos. Un especialista te contactará hoy.</p>
        </div>
      ) : (
        <form className="hero-form" onSubmit={handleSubmit}>
          <p className="hf-eyebrow">Solicita tu cotización · Te contactamos hoy</p>

          <div className="hf-field">
            <input name="nombre" type="text" placeholder="Nombres" required />
          </div>
          <div className="hf-row2">
            <div className="hf-field">
              <input name="telefono" type="tel" placeholder="Teléfono" required />
            </div>
            <div className="hf-field">
              <select name="tipo" required defaultValue="">
                <option value="" disabled>
                  Tipo de tasación
                </option>
                {TIPOS_TASACION.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="hf-field">
            <input name="email" type="email" placeholder="Correo electrónico" required />
          </div>

          {/* Honeypot anti-bots */}
          <div className="hp-field" aria-hidden="true">
            <label htmlFor="hf_empresa_web">No llenar</label>
            <input id="hf_empresa_web" name="empresa_web" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <label className="hf-consent">
            <input type="checkbox" required />
            <span>
              Autorizo el tratamiento de mis datos conforme a la{" "}
              <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer">
                Política de Privacidad
              </a>
              .
            </span>
          </label>

          {error && <p className="hf-error">{error}</p>}

          <button type="submit" className="hf-btn" disabled={sending}>
            {sending ? "Enviando…" : "Solicitar tasación"}
          </button>
        </form>
      )}

      <div className="cert-foot">
        <Seal text={cert.sealText} />
        <p>{cert.foot}</p>
      </div>
    </div>
  );
}
