# Paso 3 — Recrear el artículo "Valor de reposición"

**Estado:** borrador redactado, **pendiente de aprobación y de carga en la base de datos** (ver "Bloqueo" al final).
**Archivo:** `db/borradores/valor-de-reposicion.json` · **Slug propuesto:** `/articulos/valor-de-reposicion`

---

## Motivo de la edición

La URL `https://vanguardiamax.com/guia-completa-sobre-el-calculo-del-valor-de-reposicion/` era, en el periodo 1 jul – 19 sep 2026, **la página no-marca con más clics de todo el sitio**: 9 clics, 822 impresiones, posición media 6,57 (fuente: `seo/gsc/2026-09/Páginas-home.csv`). Hoy devuelve **404**: no sobrevivió a la migración y tampoco está en el volcado de WordPress `wpstg0_posts.sql` (se publicó después del 27-06-2026), así que no hay copia recuperable.

Las consultas que la mostraban son un grupo compacto de intención informativa (fuente: `Consultas-home.csv`):

| Consulta | Impr. | Clics | Pos. |
|---|---|---|---|
| valor de reposicion | 71 | 0 | 9,01 |
| costo de reposicion | 56 | 0 | 6,79 |
| valor de reposición | 18 | 0 | 8,67 |
| que es el costo de reposicion | 16 | 0 | 5,50 |
| valor de reposición de un inmueble | 15 | 0 | 8,87 |
| costo de reposición | 11 | 0 | 6,64 |
| valor de reposición ejemplo | 10 | **1** | 4,10 |
| valor de reposicion nuevo | 8 | 0 | 7,25 |
| (otras 45 variantes: "a nuevo", "en seguros", "fórmula", "en contabilidad", "valor neto de reposición"…) | ~30 | 0 | 1–32 |

La estructura del artículo responde literalmente a esas consultas: definición, sinonimia con "costo de reposición", VRN vs. VND, fórmula, dos ejemplos trabajados, uso en seguros y en contabilidad, y una sección de preguntas frecuentes.

**Recomendación adicional:** al publicarlo, activar el 301 desde la URL antigua. Ya está escrito en `next.config.ts` (`legacyPageRedirects`), sin commit, para que viaje en el mismo despliegue que la publicación.

---

## Fuentes consultadas

| Fuente | Qué se tomó | Verificación |
|---|---|---|
| [Reglamento Nacional de Tasaciones, R.M. N° 172-2016-VIVIENDA](https://cdn.www.gob.pe/uploads/document/file/22026/RM_172-2016-VIVIENDA.pdf) | Definición de valor de reposición ("valor similar nuevo del bien afectado por la depreciación"), definición de perito tasador, uso de los Cuadros de Valores Unitarios en la tasación reglamentaria | PDF oficial responde 200 (22-09-2026). **Es un escaneo sin capa de texto**, así que la definición se corroboró por búsqueda web; la numeración exacta de artículos queda como pendiente (ver abajo) |
| [R.M. N° 277-2025-VIVIENDA — El Peruano](https://busquedas.elperuano.pe/dispositivo/NL/2453433-1) | Cuadros de Valores Unitarios Oficiales de Edificación **vigentes para el ejercicio fiscal 2026** | Confirmado: la resolución aprueba los valores unitarios para Lima, Callao, Costa, Sierra y Selva, vigentes desde el 01-01-2026 (22-09-2026) |
| [NIIF 13 — Medición del Valor Razonable (ifrs.org)](https://www.ifrs.org/content/dam/ifrs/publications/html-standards/spanish/2023/issued/ifrs13.html) | Enfoque del costo / costo de reposición corriente; los tres enfoques de valoración (párr. 62); obsolescencia más amplia que la depreciación contable (párr. B9) | Documento oficial en español responde 200 (22-09-2026) |
| [NIC 16 — Propiedades, Planta y Equipo (ifrs.org)](https://www.ifrs.org/content/dam/ifrs/publications/html-standards/spanish/2023/issued/ias16.html) | Modelo de revaluación: valor razonable menos depreciación acumulada y deterioro (párr. 31) | Documento oficial responde 200 (22-09-2026) |
| [Ley 29946, Ley del Contrato de Seguro (SBS)](https://www.sbs.gob.pe/Portals/0/jer/otras_leyes_seguros/20140716-Ley29946.doc) | Infraseguro y cobertura a valor de reposición a nuevo | Archivo oficial responde 200 (22-09-2026) |

Enlaces internos usados en el artículo: `/tasaciones/activos-fijos`, `/tasaciones/para-seguros`, `/tasaciones/empresas`, `/articulos/valoraciones-ifrs-niif-peru`, `/articulos/que-es-la-tasacion-de-propiedades-con-ifrs`.

---

## Observaciones

- El artículo tiene **1 333 palabras**, 9 H2 y 11 H3; `meta_title` 55 caracteres, `meta_description` 144, `excerpt` 190. Etiquetas HTML balanceadas y solo las permitidas (`p`, `h2`, `h3`, `ul`, `ol`, `li`, `strong`, `em`, `a`).
- El título propuesto tiene 80 caracteres —largo para el `<h1>`, aceptable porque el `<title>` usa el `meta_title` más corto.
- Este artículo y `/articulos/valoraciones-ifrs-niif-peru` comparten terreno (enfoque del costo, NIIF 13). No compiten por la misma keyword: aquí la intención es "valor de reposición" (informativa, definición) y allá "valoraciones IFRS" (empresa, cumplimiento). Se enlazan entre sí.

## Pendiente de verificar (no publicar como hecho sin confirmar)

1. **Numeración exacta de los artículos del Reglamento Nacional de Tasaciones** citados en el texto: art. 3 numeral 35 (definición de valor de reposición), art. 3 numeral 2 (perito tasador), art. 31.1 y 32.1 (valores unitarios vs. valores de mercado). El contenido de la definición está confirmado; **la numeración no pudo verificarse** porque el PDF oficial es un escaneo sin texto. Confirmar con una copia con capa de texto o con la versión del SPIJ antes de publicar.
2. **Párrafos de NIIF 13 y NIC 16** (62, B9, 31): coinciden con la estructura conocida de las normas, pero no se abrió el documento párrafo por párrafo. Verificación rápida recomendada.
3. **Cifras de los dos ejemplos** (inmueble en Lima y máquina): son ilustrativas y así están declaradas en el texto. Si el área de valuaciones tiene rangos reales de costo por m² o de equipos, conviene sustituirlas.

## Bloqueo actual

El borrador **no se pudo cargar en la base de datos**: la conexión MySQL desde esta PC devuelve `ETIMEDOUT` (probado dos veces el 22-09-2026). El sitio en producción sí lee la base sin problema, así que el fallo es de acceso remoto desde esta máquina, no de la base. Causa más probable: la IP pública actual de la PC (`190.12.88.50`) no está autorizada en **Remote MySQL** de Hostinger (hPanel → Bases de datos → MySQL remoto).

Mientras tanto hay dos caminos: (a) autorizar esa IP y reejecutar
`node --env-file=.env.local scripts/importar-articulos.mjs db/borradores/valor-de-reposicion.json`,
o (b) crear el artículo a mano en `/admin/articulos/nuevo` pegando el contenido del JSON.
