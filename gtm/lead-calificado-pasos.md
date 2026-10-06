# Evento "LeadCalificado" para el Pixel de Meta (vía Google Tag Manager)

Replica lo hecho en PrestaClub: cada botón o formulario que lleva a WhatsApp empuja el evento
`whatsapp_click` al `dataLayer`; Tag Manager lo escucha y dispara en el píxel de Meta el evento
personalizado **LeadCalificado**.

## Qué envía el sitio (ya está en el código)

Evento `whatsapp_click` con estos datos:

| Dato | Qué es | Ejemplo |
|---|---|---|
| `segmento` | Página/servicio donde ocurrió el contacto | `judicial-pericial`, `tasacion-hoteles` |
| `button_location` | Qué botón fue | `header`, `hero`, `cta-final`, `flotante`, `canales`, `formulario_whatsapp` |
| `destino` | Tipo o finalidad elegida en el formulario de WhatsApp (si lo hay) | `Fundo con frutales` |
| `ubicacion` | Distrito/ubicación escrita en el formulario (si lo hay) | `Surco` |
| `origen` | Canal de la visita (campaña, Google Ads, Facebook, web directa) | `google-ads` |
| `utm_campaign`, `utm_source`, `utm_medium`, `utm_content` | Etiquetas de campaña | |
| `form_submit` | `true` cuando vino del formulario de WhatsApp | |
| `page_path` | Ruta de la página | `/tasaciones/judicial` |

## Pasos en Tag Manager (contenedor GTM-PKC382BQ)

1. **Importar.** Admin → *Importar contenedor* → elegir `gtm/lead-calificado-container.json` →
   Espacio de trabajo: *Nuevo* ("LeadCalificado Meta") → Opción: **Combinar** → *Sobrescribir las
   etiquetas, activadores y variables conflictivos* → Confirmar.
   Debe mostrar: 6 variables (`DLV - segmento`, `DLV - origen`, `DLV - destino`, `DLV - ubicacion`,
   `DLV - button_location`, `DLV - page_path`), 1 activador (`CE - whatsapp_click`) y 1 etiqueta
   (`Meta Pixel - LeadCalificado`).
2. **Comprobar el píxel base.** En *Etiquetas* debe existir la etiqueta del píxel ("Pixel Meta 2026")
   disparándose en *All Pages*. La etiqueta nueva usa `fbq`, que crea el píxel base; si el píxel no
   está en GTM, agrégalo primero (plantilla "Meta Pixel" de la galería o HTML personalizado con el
   código base del píxel).
3. **Orden de disparo (recomendado).** Abrir `Meta Pixel - LeadCalificado` → *Configuración avanzada*
   → *Secuenciación de etiquetas* → marcar *Activar una etiqueta antes de que se active esta* →
   elegir la etiqueta del píxel base. Así el evento nunca se pierde por llegar antes que el píxel.
4. **Probar.** *Vista previa* → abrir `https://vanguardiamax.com/tasaciones/judicial` → hacer clic en
   un botón de WhatsApp o enviar el formulario de WhatsApp. En Tag Assistant debe aparecer el evento
   `whatsapp_click` y la etiqueta `Meta Pixel - LeadCalificado` como *Fired*. Con la extensión
   *Meta Pixel Helper* (o en Events Manager → *Probar eventos*) debe verse el evento personalizado
   **LeadCalificado** con sus parámetros.
5. **Publicar.** *Enviar* → nombre de versión "LeadCalificado Meta" → *Publicar*.

## En Meta (Events Manager)

- El evento `LeadCalificado` aparece en el píxel unos minutos después del primer disparo
  (pestaña *Resumen* → eventos personalizados).
- Para usarlo en campañas: *Conversiones personalizadas* → *Crear* → evento `LeadCalificado` →
  categoría **Cliente potencial** → nombre "Lead calificado WhatsApp". Esa conversión se elige luego
  como evento de conversión en el conjunto de anuncios.
- Si se quiere separar el formulario de los botones, se puede crear una segunda conversión
  filtrando por el parámetro `origen_boton` = `formulario_whatsapp`.

## Nota

Los formularios por correo (hero de la home y de /tasaciones, y /contacto) emiten otro evento,
`lead_form_submit`, que no dispara LeadCalificado. Si se quiere contarlos también en Meta, se agrega
un segundo activador sobre ese evento (o se mapea al evento estándar `Lead`).
