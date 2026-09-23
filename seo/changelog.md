# Registro de cambios SEO y línea base (paso 10)

Cada cambio publicado se anota con su fecha, su verificación en vivo y la línea base de Search Console, para poder medirlo después con periodos **completos e iguales**.

## Cómo medir

1. Esperar a que haya **28 días completos** después de la publicación, más ~3 días de retraso de Search Console.
2. En Search Console → Rendimiento → **Comparar**: los 28 días posteriores contra los 28 días anteriores a la publicación.
3. Mismos filtros en ambos periodos: **País = Perú**, tipo de búsqueda Web, la **página** del cambio y, en la pestaña Consultas, las del grupo objetivo.
4. Exportar a `seo/gsc/<AAAA-MM>/` y anotar abajo el resultado. Separar lo medido de las posibles explicaciones (estacionalidad, campañas de Ads, otros cambios del mismo periodo).
5. Las conversiones (WhatsApp y formulario del hero) se miran aparte, en GA4, por página de entrada.

> Las cifras de "línea base" son del export de `seo/gsc/2026-09/` (1 jul – 19 sep 2026, 81 días, **sin filtro de país**). Sirven de referencia, pero la comparación válida es la de 28 contra 28 días descrita arriba.

---

## Cambios publicados

| Fecha | Commit | Cambio | Verificado en vivo | Línea base (1 jul – 19 sep) | Medir a partir de |
|---|---|---|---|---|---|
| 22-09-2026 | `35cbb66` | 301 de 29 URLs antiguas de WordPress + `www` → dominio principal | ✅ 22-09: 39/39 rutas con 301 correcto (Sonnet); en producción `/gestion-notarial/` → `/tasaciones/judicial` | 29 URLs en 404: **19 clics, 1 535 impr.** · `www/?utm…`: 0 clics, 1 037 impr. | **23-10-2026** · Esperado: las URLs antiguas dejan de aparecer y sus impresiones pasan a los destinos |
| 22-09-2026 | `d941f87` | `/tasaciones/alquiler`: define "merced conductiva", nuevos title y description | ✅ 23-09: title nuevo en producción | Página: **4 clics, 2 680 impr., pos. 8,13** · Grupo "merced conductiva": **1 clic, 1 895 impr., pos. 8,2** | **23-10-2026** · Métrica principal: CTR del grupo "merced conductiva" |
| 22-09-2026 | (panel /admin) | Artículo `/articulos/que-es-la-merced-conductiva` publicado | ✅ 23-09: responde 200 | URL nueva: 0 | **23-10-2026** · Medir junto con la landing de alquiler: ver cuál de las dos se queda con cada consulta |
| 23-09-2026 | `cde8184` | `/tasaciones` como destino de "tasación de inmuebles": title, H1, guía, FAQ con schema, enlace desde la home | ✅ 23-09: 8/8 comprobaciones en producción (Sonnet): title, H1, canonical, FAQPage con 6 preguntas, enlaces 200, enlace desde la home, estilo de enlaces; /servicios sin cambios | Página: **3 clics, 219 impr., pos. 5,45** · Núcleo "tasación / tasador de inmuebles": **1 clic, 400 impr., pos. 5,8** | **24-10-2026** · Métricas: impresiones de `/tasaciones` para el núcleo y CTR. Control de canibalización: home en "tasaciones inmobiliarias" (0 clics, 93 impr.) |
| 23-09-2026 | `604cc1b` + API /admin | Paso 6: 10 enlaces internos (7 en artículos, 3 en landings) — detalle en `seo/paso-6-2026-09.md` | ✅ 23-09: 10/10 en vivo con ancla y destino correctos, sin duplicados, fechas de publicación intactas (Sonnet) | Artículos que no recibían enlaces: 7 de 10 · Landings que enlazaban a artículos: 1 | **24-10-2026** · Métricas: impresiones y clics de los 5 artículos origen y de los 3 artículos destino; clics hacia las landings desde el blog (GA4, página de entrada = artículo) |

## Pendiente de publicar

| Cambio | Estado | Al publicar |
|---|---|---|
| Artículo `/articulos/valor-de-reposicion` | Borrador (id 19 en /admin). Falta validar la numeración de artículos del Reglamento Nacional de Tasaciones | Subir el 301 desde `/guia-completa-sobre-el-calculo-del-valor-de-reposicion/` (ya escrito en `next.config.ts`, sin commit). Línea base de la URL antigua: **9 clics, 822 impr., pos. 6,57** |
| Enlace del Perfil de Empresa de Google | Apunta a `www.vanguardiamax.com/?utm…` | Cambiarlo a `https://vanguardiamax.com/?utm_source=mybusiness&utm_medium=organic&utm_campaign=branding` (lo hace el usuario en Google Business Profile) |

## Resultados medidos

_(vacío: se completa a partir del 23-10-2026)_
