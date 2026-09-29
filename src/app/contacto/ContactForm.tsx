"use client";

import { useState } from "react";
import { TIPOS_TASACION } from "@/content/tipos-tasacion";
import { useWhatsApp } from "@/components/whatsapp/WhatsAppProvider";
import { pushDataLayer } from "@/lib/whatsapp";

/**
 * Formulario de la página de contacto. Envía la consulta por correo vía
 * /api/contacto (el mismo endpoint del hero de la home) con la atribución de
 * la visita, más un mensaje libre opcional. Honeypot y consentimiento incluidos.
 */
export function ContactForm() {
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
      formulario: "contacto",
      nombre: data.get("nombre"),
      telefono: data.get("telefono"),
      email: data.get("email"),
      tipo: data.get("tipo"),
      mensaje: data.get("mensaje"),
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
      pushDataLayer({ event: "lead_form_submit", form: "contacto", segment });
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo enviar.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="contact-form-card">
        <div className="hero-form hero-form--ok">
          <div className="hf-ok-ic">✓</div>
          <h3>¡Mensaje enviado!</h3>
          <p>Recibimos tu consulta. Un especialista te contactará hoy.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <form className="hero-form contact-form" onSubmit={handleSubmit}>
        <p className="hf-eyebrow">Escríbenos · Te contactamos hoy</p>
        <h3>Envíanos tu consulta</h3>

        <div className="hf-field">
          <label htmlFor="cf-nombre">Nombres y apellidos</label>
          <input id="cf-nombre" name="nombre" type="text" autoComplete="name" required />
        </div>
        <div className="hf-row2">
          <div className="hf-field">
            <label htmlFor="cf-telefono">Teléfono / WhatsApp</label>
            <input id="cf-telefono" name="telefono" type="tel" autoComplete="tel" placeholder="9XX XXX XXX" required />
          </div>
          <div className="hf-field">
            <label htmlFor="cf-email">Correo electrónico</label>
            <input id="cf-email" name="email" type="email" autoComplete="email" required />
          </div>
        </div>
        <div className="hf-field">
          <label htmlFor="cf-tipo">¿Qué necesitas tasar?</label>
          <select id="cf-tipo" name="tipo" required defaultValue="">
            <option value="" disabled>
              Selecciona el tipo de tasación
            </option>
            {TIPOS_TASACION.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="hf-field">
          <label htmlFor="cf-mensaje">
            Mensaje <span className="cf-opt">(opcional)</span>
          </label>
          <textarea
            id="cf-mensaje"
            name="mensaje"
            rows={3}
            maxLength={1500}
            placeholder="Cuéntanos el tipo de bien, dónde está y para qué trámite lo necesitas."
          />
        </div>

        {/* Honeypot anti-bots */}
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="cf_empresa_web">No llenar</label>
          <input id="cf_empresa_web" name="empresa_web" type="text" tabIndex={-1} autoComplete="off" />
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
          {sending ? "Enviando…" : "Enviar consulta"}
        </button>
      </form>
    </div>
  );
}
