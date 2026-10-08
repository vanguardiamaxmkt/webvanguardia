# Medición de lectura de artículos (GA4 vía Google Tag Manager)

Cada artículo de `/articulos/...` envía estos eventos al `dataLayer` (código en
`src/components/articles/ArticleReading.tsx`):

| Evento | Cuándo | Parámetros |
|---|---|---|
| `article_scroll` | El lector llega al 25, 50, 75 y 100 % del **cuerpo** del artículo (no de la página). Una vez cada uno. | `percent`, `article_slug`, `article_category`, `reading_minutes` |
| `article_read_complete` | Llegó al 90 % **y** estuvo activo (pestaña visible) al menos el 40 % del tiempo de lectura estimado, mínimo 20 s. Un scroll rápido hasta el final no cuenta. | `article_slug`, `article_category`, `reading_minutes`, `active_seconds` |
| `article_related_click` | Clic en una tarjeta de "Sigue leyendo". | `article_slug` (origen), `target_slug` (destino), `position` (1-3), `read_percent` (cuánto había leído) |
| `article_share` | Clic en un botón de compartir. | `article_slug`, `network` (`whatsapp`, `linkedin`, `facebook`, `x`, `copiar`) |

## Pasos en Tag Manager (GTM-PKC382BQ)

1. **Importar:** Admin → *Importar contenedor* → `gtm/lectura-articulos-container.json` →
   espacio de trabajo nuevo ("Lectura artículos") → **Combinar** → *Sobrescribir los conflictivos*.
   Debe mostrar 9 variables (`DLV - percent`, `DLV - article_slug`…), 4 activadores (`CE - article_...`)
   y 4 etiquetas (`GA4 Event - article_...`).
2. **Probar:** *Vista previa* → abre un artículo → baja leyendo. En Tag Assistant deben aparecer
   `article_scroll` (25/50/75/100) y, si lees con calma, `article_read_complete`. Haz clic en una
   tarjeta de "Sigue leyendo" para ver `article_related_click`.
3. **Publicar:** *Enviar* → "Lectura artículos" → *Publicar*.

## En GA4 (G-D4J0DVQ9K6)

1. **Dimensiones personalizadas** (Administrar → Definiciones personalizadas → Crear, ámbito *Evento*):
   `article_slug`, `article_category`, `percent`, `target_slug`, `network`.
   **Métrica personalizada:** `active_seconds` (unidad: segundos).
   Sin esto los eventos llegan, pero sus parámetros no se pueden usar en los informes.
2. **Informe recomendado** (Explorar → Exploración libre): filas = `article_slug`; valores = recuento de
   `article_scroll` filtrado por `percent` = 25 / 50 / 75 / 100 y de `article_read_complete`.
   Tasa de lectura completa = `article_read_complete` ÷ vistas del artículo.
3. **Próximos posts:** `article_related_click` por `article_slug` → `target_slug` muestra qué artículo
   lleva a cuál; los temas más leídos hasta el final y con más clics hacia otros artículos son los que
   conviene ampliar con nuevos posts.
4. Opcional: marcar `article_read_complete` como **evento clave** si se quiere usar como micro-conversión.

Los datos tardan hasta 24-48 h en aparecer en los informes estándar (en *Tiempo real* se ven al instante).
