# Conversiones en GA4: contactos por WhatsApp y por correo (vía Google Tag Manager)

Reemplaza al antiguo `gtm-import.json` (que incluía la etiqueta base de GA4, ya existente en el
contenedor, y no medía el formulario por correo).

## Qué envía el sitio

| Evento del dataLayer | Cuándo | Parámetros |
|---|---|---|
| `whatsapp_click` | Cualquier clic que abre WhatsApp: botones (header, hero, cta-final, flotante, canales) y el formulario de WhatsApp | `segmento`, `origen`, `button_location`, `form_position` (hero / final), `destino`, `ubicacion`, `utm_*`, `page_path` |
| `lead_form_submit` | Envío correcto del formulario por correo (hero de la home y de /tasaciones, sección final y /contacto) | `form` (hero / contacto), `segment` |

## Qué crea este archivo en GTM

- 13 variables `DLV - …`
- 2 activadores: `CE - whatsapp_click` y `CE - lead_form_submit`
- 2 etiquetas GA4: `GA4 Event - contacto_whatsapp` y `GA4 Event - contacto_correo` (eventos `contacto_whatsapp` y `contacto_correo` en G-D4J0DVQ9K6)

No incluye la etiqueta base de GA4: ya está en el contenedor y debe haber **una sola**.

## Pasos

1. **Tag Manager → Admin → Importar contenedor** → `gtm/conversiones-ga4-container.json` → espacio de
   trabajo **nuevo** ("Conversiones GA4") → **Combinar** → *Sobrescribir los conflictivos* → Confirmar.
   Es normal que `CE - whatsapp_click` y algunas `DLV - …` aparezcan como *modificados*: ya existían
   por la importación de LeadCalificado con la misma configuración.
2. **Vista previa** → abre una landing → haz clic en un botón de WhatsApp (o envía el formulario de
   WhatsApp) y envía el formulario por correo. En Tag Assistant: `GA4 Event - contacto_whatsapp` y
   `GA4 Event - contacto_correo` como *Fired*.
3. **Enviar → Publicar** ("Conversiones GA4").

## En GA4 (G-D4J0DVQ9K6)

1. Administrar → **Eventos** → cuando aparezcan `contacto_whatsapp` y `contacto_correo` (hasta 24 h),
   activar **"Marcar como evento clave"** en los dos. Desde ese momento GA4 los cuenta como conversiones
   y los muestra por canal (Informes → Adquisición → *Organic Search*, *Paid Social*, etc.).
2. Administrar → **Definiciones personalizadas** → dimensiones de evento: `segmento`, `button_location`,
   `form_position`, `destino`, `form`. Opcional pero útil para saber qué página y qué botón convierten.
