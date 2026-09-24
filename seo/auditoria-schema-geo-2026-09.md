# Auditoría de schema y GEO — silo /tasaciones (24-09-2026)

_Realizada con Fable 5.1, en una sola pasada y en modo solo lectura. Fuentes: código, HTML de producción (JSON-LD parseado), `seo/brief.md` y GSC 1 jul – 19 sep 2026. Hallazgos principales verificados después contra el código y los datos (ver "Verificación")._

## Resumen

- **La plantilla `LandingPage.tsx` no emite ningún JSON-LD propio.** Las 10 páginas de tipo *landing* sirven solo la ficha de la empresa y el WebSite (del layout). **Ninguna tiene `Service`, `FAQPage` ni `BreadcrumbList`.** Solo `/tasaciones`, `/tasaciones/embarcaciones` y `/tasaciones/impuesto-predial` están completas. Esas 10 landings concentran el 96 % de las impresiones del silo.
- **Landings casi aisladas:** el header de las landings no tiene menú (solo enlaza a `/`), no hay migas visibles ni bloque de "relacionados".
- **Orden poco citable para IA:** la definición del servicio aparece en el 4.º H2, después de ~250 palabras de copy comercial. Un motor de IA lee primero "El banco no avanza tu crédito…".
- **9 de 13 H1 no contienen la keyword principal** (son frases de conversión).
- **11 de 13 meta descriptions superan 155 caracteres** (hasta 254) y **6 de 13 titles superan 60**.
- **Canibalización:** `activos-fijos` lidera con NIIF (tema reservado a `empresas`); `vehicular` también reclama NIIF/inventarios.
- **Afirmaciones no verificadas en el brief repetidas en plantilla** (ver sección E).

## B. Tabla por página

| Página | Tipo | JSON-LD que falta | GEO (0–5) | Title / Meta | Problema principal |
|---|---|---|---|---|---|
| /tasaciones | índice | — | 4 | 60 ✓ / 154 ✓ | Completa |
| /hipotecaria | landing | Service, FAQPage, BreadcrumbList | 3 | 52 ✓ / 175 ✗ | H1 sin "tasación hipotecaria"; 1 sola impresión para esa consulta |
| /judicial | landing | Service, FAQPage, BreadcrumbList | 3 | 62 ✗ / 184 ✗ | H1 sin keyword; consultas peruanas en pos. 12–18; 845 de 1 327 impr. son ruido de España |
| /activos-fijos | landing | Service, FAQPage, BreadcrumbList | 2 | 72 ✗ / 238 ✗ | Canibaliza a `empresas` con NIIF; 300 impr. pos. 5,5 |
| /empresas | landing | Service, FAQPage, BreadcrumbList | 2 | 70 ✗ / 203 ✗ | Title empieza igual que activos-fijos; FAQ con "Chile y México" sin verificar |
| /alquiler | landing | Service, FAQPage, BreadcrumbList | 3 | 56 ✓ / 148 ✓ | 2 680 impr., CTR 0,15 %; 7 FAQ sin FAQPage; H1 sin "merced conductiva" |
| /vehicular | landing | Service, FAQPage, BreadcrumbList | 2 | 51 ✓ / 181 ✗ | H1 sin keyword; "tasación vehículos" pos. 17,7; invade activos fijos/NIIF |
| /embarcaciones | service | (Service sin `url`) | 4 | 57 ✓ / 232 ✗ | FAQPage 5 preguntas vs 6 visibles |
| /impuesto-predial | service | (Service sin `url`) | 4 | 77 ✗ / 207 ✗ | FAQPage 5/6 con paráfrasis |
| /agricolas | landing | Service, FAQPage, BreadcrumbList | 3 | 53 ✓ / 199 ✗ | H1 sin keyword |
| /obras-arte | landing | Service, FAQPage, BreadcrumbList | 2 | 64 ✗ / 210 ✗ | Trust "Autenticado por la SBS" en tasación de arte |
| /fiduciarias | landing | Service, FAQPage, BreadcrumbList | 3 | 52 ✓ / 254 ✗ | H1 sin keyword; meta más larga del silo |
| /para-seguros | landing | Service, FAQPage, BreadcrumbList | 3 | 72 ✗ / 191 ✗ | H1 sin "tasación para seguros" |

## C. Hallazgos transversales (se arreglan una vez)

1. `LandingPage.tsx` no renderiza `<JsonLd>`; `src/lib/schema.ts` ya tiene `serviceJsonLd()` y `breadcrumbListJsonLd()`, y `SiloIndex` ya genera FAQPage desde `faq.items`.
2. Sin migas visibles ni BreadcrumbList en landings.
3. Header sin navegación en landings (`<Topbar ctaTarget="cotizar" />` sin `nav`); no hay bloque de relacionados.
4. Definición citable muy abajo (4.º H2).
5. Stats no verificados en `landings/_shared.ts` y `servicios/_shared.ts` ("+10 mil tasaciones", "SBS · empresa autenticada"), visibles en 11 de 13 páginas.
6. FAQPage escrito a mano en `servicios/*.ts` que diverge del FAQ visible.
7. `Service` de servicios sin `url` ni `@id`; la ficha de la empresa no enlaza a sus servicios.
8. Credenciales verificadas (CTTP, MVCS, RICS) sin usar en el silo.
9. Sin comprobación automática de longitudes de title/meta.
10. Doble salto 308 → 301 en URLs antiguas con barra final (menor).

## D. Recomendaciones priorizadas

1. **[Plantilla]** Service + FAQPage + BreadcrumbList en `LandingPage.tsx` (10 páginas, ~5 000 impresiones).
2. **[Contenido]** `/tasaciones/alquiler`: H1 con "merced conductiva" y definición en el subtítulo del hero.
3. **[Plantilla]** Migas visibles, menú en el header y bloque "Otras tasaciones" en landings.
4. **[Contenido]** Deshacer la canibalización NIIF entre activos-fijos, empresas y vehicular.
5. **[Contenido]** Judicial: H1 y title con la keyword; mención explícita al REPEJ en el hero.
6. **[Contenido]** Vehicular: H1 y title con "tasación vehicular".
7. **[Contenido]** Hipotecaria: H1 con "tasación hipotecaria"; revisar "homologada ante la SBS" y "vigencia 1 año".
8. **[Plantilla]** Definición citable arriba (campo `definition` bajo el TrustStrip o mover la prosa antes).
9. **[Plantilla]** Sanear los stats de `_shared.ts` con afirmaciones verificadas.
10. **[Plantilla]** FAQPage generado desde `faq.items` en `ServicePage.tsx`; `url` y `@id` en cada Service; `hasOfferCatalog` en la ficha de la empresa.
11. **[Contenido]** Recortar metas a ≤ 155 y titles a ≤ 60 (11 páginas) + test que falle en build.
12. **[Contenido]** Obras de arte: credencial pertinente en lugar de "Autenticado por la SBS".
13. **[Config, menor]** Evitar el doble salto 308 → 301.

## E. Afirmaciones no respaldadas por `seo/brief.md`

Pendientes de confirmar por el negocio antes de mantenerlas:

1. "+10 mil tasaciones realizadas" (11 páginas)
2. "SBS · empresa autenticada" / "Autenticado por la SBS" (el brief verifica peritos inscritos en el REPEV, no una autenticación de la empresa)
3. "Doble visado" (7 páginas)
4. "Validez / vigencia de 1 año" (5 páginas, incluida en un FAQPage servido)
5. "Tasación homologada ante la SBS" (hipotecaria)
6. "Presencia en Chile y México" (empresas)
7. "Informes alineados a NIIF 13 y NIC 16" como servicio (activos-fijos, empresas)
8. "Equipos descentralizados"
9. Citas legales del Código Civil y del Código Procesal Civil (alquiler) — requieren revisión jurídica
10. Ejemplo numérico de renta en Surco (alquiler, marcado como ilustrativo)
11. Deducción del impuesto predial para pensionistas y adultos mayores (impuesto-predial)
12. "Regla proporcional" / infraseguro como práctica de las aseguradoras (para-seguros)
13. Listas de documentos por servicio (todas)
14. "Reconocido por bancos y cajas para crédito agrícola" y "seguros agrarios" (agricolas)
15. "Principales puertos del Perú" / "costa, sierra y selva" (embarcaciones)
16. "Ingenieros y arquitectos colegiados" (índice `/tasaciones`)
17. "Resolución S.B.S. Nº 11356-2008" (hipotecaria FAQ; figura en el pie legal)
18. "Peritaje de obsolescencia / baja de activos" (empresas)
19. Inconsistencia terminológica "valor neto de reemplazo" vs "valor de reposición" (activos-fijos)

## Verificación posterior (Opus 5.5)

Contrastado contra el código y los datos: `LandingPage.tsx` no importa `JsonLd` ✓; los stats están en ambos `_shared.ts` ✓; "1 año" aparece en activos-fijos, hipotecaria, judicial, vehiculos y embarcaciones ✓; obras-arte lleva "Autenticado por la SBS" ✓; las landings usan `<Topbar>` sin `nav` ✓.

**Hallazgo adicional verificado:** la URL antigua `/tasacion-judicial-importancia-proceso-y-aplicaciones-en-el-sistema-legal-peruano/` tuvo **5 475 impresiones y 64 clics en abril–junio 2026** (la página con más tráfico del sitio antiguo), frente a 56 impresiones en julio–septiembre, cuando ya daba 404. Ese artículo (id 15) quedó en borrador en la migración por considerarse duplicado del id 14, y su URL redirige hoy al id 14.
