/**
 * Webhook de Google Apps Script para registrar los leads del formulario
 * de VanguardiaMax en la hoja de cálculo.
 *
 * ── CÓMO INSTALARLO ──────────────────────────────────────────────────────
 * 1. Abre la hoja:
 *    https://docs.google.com/spreadsheets/d/1clQsTnSkS_KSRrHSqPSBTwASR6D8Jw2QG5YPUoUH0qw/edit
 * 2. Menú  Extensiones → Apps Script.
 * 3. Borra el contenido y pega TODO este archivo. Guarda (💾).
 * 4. Botón  Implementar → Nueva implementación → tipo "Aplicación web".
 *      - Descripción: leads VanguardiaMax
 *      - Ejecutar como:  Yo (tu cuenta)
 *      - Quién tiene acceso:  Cualquier usuario
 *    → Implementar.  Autoriza los permisos cuando lo pida.
 * 5. Copia la "URL de la aplicación web" (termina en /exec).
 * 6. Pégala en .env.local del proyecto:   SHEETS_WEBHOOK_URL=...exec
 *    y reinicia el servidor (npm run dev).
 *
 * Cada lead crea una fila en la pestaña "Leads" (se crea sola).
 */

var SPREADSHEET_ID = "1clQsTnSkS_KSRrHSqPSBTwASR6D8Jw2QG5YPUoUH0qw";
var SHEET_NAME = "Leads";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Fecha",
        "Página",
        "Origen",
        "Nombre",
        "Teléfono",
        "Detalle",
        "utm_campaign",
        "utm_source",
        "utm_medium",
        "utm_content",
        "URL",
      ]);
    }

    var detalle = (data.campos || [])
      .map(function (c) {
        return c.label + ": " + c.valor;
      })
      .join(" | ");

    sheet.appendRow([
      new Date(),
      data.segmento || "",
      data.origen || "",
      data.nombre || "",
      data.telefono || "",
      detalle,
      data.utm_campaign || "",
      data.utm_source || "",
      data.utm_medium || "",
      data.utm_content || "",
      data.url || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
