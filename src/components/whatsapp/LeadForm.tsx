"use client";

import { useWhatsApp } from "./WhatsAppProvider";
import { WaIcon } from "./WaIcon";
import type { FormField } from "@/types/content";

/**
 * Lead capture form. Builds a qualified WhatsApp message from the field values
 * and opens the chat — no backend, conversion happens in WhatsApp.
 */
export function LeadForm({ fields }: { fields: FormField[] }) {
  const { buildUrl, segment, contact, submitLead } = useWhatsApp();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const valor = (name: string) => (data.get(name) as string) || "";
    const campos = fields.map((f) => ({ label: f.label, valor: valor(f.name) }));
    const lines = campos.map((c) => `*${c.label}:* ${c.valor}`);
    const message =
      `Hola VanguardiaMax, quiero cotizar una tasación (${segment}).\n\n` +
      lines.join("\n");

    // 1) Abrimos WhatsApp PRIMERO (síncrono) para no perder el gesto del usuario.
    window.open(buildUrl(message), "_blank", "noopener");
    // 2) Registramos en la hoja de cálculo en segundo plano (no se espera).
    submitLead({ campos, nombre: valor("nombre"), telefono: valor("telefono") });
    // 3) Evento GTM + consumo de la atribución.
    contact({ form_submit: true });
  }

  return (
    <div className="form-card">
      <h3>Solicita tu cotización</h3>
      <p className="fp">Toma 20 segundos.</p>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div className="field" key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === "select" ? (
              <select id={field.name} name={field.name} required defaultValue="">
                <option value="" disabled>
                  Selecciona…
                </option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
              />
            )}
          </div>
        ))}
        <button type="submit" className="btn btn-wa">
          <WaIcon />
          Enviar por WhatsApp
        </button>
        <p className="form-note">Al enviar se abrirá WhatsApp con tu consulta lista.</p>
      </form>
    </div>
  );
}
