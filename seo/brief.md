# Brief de negocio — VanguardiaMax (vanguardiamax.com)

_Contexto compartido para todas las tareas SEO. Fuente: el propio sitio (`src/content/*`, landings y artículos publicados). Última revisión: 22-09-2026._

## Qué vende

Empresa peruana de **tasaciones y peritajes valuatorios** con cobertura nacional (Lima y provincias). Informes con valor comercial, de realización y asegurable, conforme al Reglamento Nacional de Tasaciones y reconocidos por bancos, juzgados, notarías y la SBS.

Silos del sitio:

- `/tasaciones/*` — hipotecaria, judicial, activos-fijos, empresas (NIIF/IFRS e inventario), alquiler, vehicular, embarcaciones, impuesto-predial, agricolas, obras-arte, fiduciarias, para-seguros.
- `/servicios/*` — saneamiento-inmobiliario, auditoria-planos, proyectos-supervision-obras, proyectos-estudio-viabilidad, proyectos-proyeccion-inmobiliaria, proyectos-estudio-itf.
- `/articulos/*` — blog (9 publicados a 22-09-2026; 8 borradores heredados).

## Quién compra

| Comprador | Necesidad típica | Página destino |
|---|---|---|
| Persona natural con crédito hipotecario | Tasación que acepte el banco, rápida | `/tasaciones/hipotecaria` |
| Abogado / parte en juicio, herencia, divorcio | Peritaje con validez ante el Poder Judicial (REPEJ) | `/tasaciones/judicial` |
| Empresa (contabilidad, auditoría, seguros) | Valor razonable NIIF/IFRS, activos fijos, inventarios | `/tasaciones/empresas`, `/tasaciones/activos-fijos`, `/tasaciones/para-seguros` |
| Arrendador / arrendatario | Renta justa (merced conductiva) | `/tasaciones/alquiler` |
| Dueño de vehículo, flota o maquinaria | Valor comercial para venta, seguro o garantía | `/tasaciones/vehicular` |
| Propietario con problema registral | Saneamiento, independización, trámites | `/servicios/saneamiento-inmobiliario` |
| Inversionista / desarrollador | Viabilidad, ITF, supervisión de obra | `/servicios/proyectos-*` |

## Afirmaciones verificadas en el sitio (citar solo estas)

- Peritos adscritos a SBS (REPEV), REPEJ, CTTP, MVCS y RICS (artículo "¿Cuánto cuesta tasar en el Perú?").
- Precio orientativo: **S/ 300 a S/ 1 500** según tipo de bien, ubicación y finalidad (mismo artículo).
- Tasación hipotecaria express: **24 horas** (landing hipotecaria).
- +25 años de experiencia, cobertura nacional (home).
- Valores entregados: comercial, de realización y asegurable (tarjeta del hero).

Cualquier otra cifra (plazos por servicio, requisitos por banco, vigencia de la tasación) **no está verificada**: marcarla como pendiente antes de publicarla.

## Mercado e idioma

Perú, español. Búsquedas relevantes son las que llevan intención local (Lima, Perú, SBS, SUNARP, Poder Judicial). Las impresiones desde España (p. ej. "valoraciones judiciales en Cádiz") son ruido: filtrar país = Perú en Search Console.

## Acción deseada del visitante

1. Contacto por **WhatsApp** (botones con atribución UTM; evento `whatsapp_click` en GTM).
2. **Formulario del hero** (home) → correo a info@vanguardiamax.com con canal de origen.

Conversión medida en GA4 (G-D4J0DVQ9K6) y Google Ads (AW-11291593814, pendiente acción de conversión).

## Herramientas de publicación

- Landings: `src/content/landings/*.ts` → commit → despliegue en Hostinger.
- Artículos: `db/articulos-extra.json` + `node --env-file=.env.local scripts/importar-articulos.mjs db/articulos-extra.json`, o edición en `/admin`.
- Redirects: `next.config.ts` (`legacyArticleSlugs` / `legacyArticleAliases`).

## Reglas de trabajo

- Citar fuente en cada afirmación factual; marcar lo que falte, no suponer.
- Separar observaciones de recomendaciones.
- Mantener separadas las impresiones de Search Console del volumen del Planificador.
- Todo cambio queda como **borrador** hasta aprobación (artículos en estado `borrador`; landings sin commit).
