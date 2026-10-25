# Keyword research del cliente (Planificador de Google Ads, oct 2025 – sep 2026) — cruce con el sitio, 25-10-2026

Fuente: captura del Planificador que compartió el usuario (136 palabras, volúmenes redondeados a 10/20/30…, moneda USD).
Cobertura comprobada con grep sobre `src/content` y sobre el texto de los artículos publicados y en borrador (API /admin).

**Sobre la fuente:** el plan está configurado en **Perú, español** (confirmado por el usuario el 25-10-2026). Las frases de
vocabulario español de España que aparecen ("coste de tasación", "fincas rústicas", "tasación oficial", "tasador independiente",
"realadvisor") son "ideas" que el Planificador sugiere desde el vocabulario general del idioma; en el Perú marcan 0 o 10 búsquedas,
lo que confirma que no se usan aquí y pueden ignorarse.

## Qué pesa de verdad

| Grupo | Volumen mensual aprox. | Intención | Cubierto por | Hueco |
|---|---|---|---|---|
| "tasacion de inmuebles" | **880** (87 % de toda la lista) | servicio | Hub `/tasaciones` (H2 + sección), home, artículos 8, 10, 12, 20, 23, 24 | GSC base: 207 impr. en 81 días ≈ 77/mes, pos. 5,9, **0 clics** → aparecemos en < 10 % de las búsquedas. Es la mayor palanca |
| "tasaciones inmobiliarias" | 50 | servicio | Title de la home | — |
| Empresa / servicio: "empresas de tasación de inmuebles", "empresas de tasaciones inmobiliarias", "servicio de tasación de inmuebles" (comp. Alta, puja hasta 2,85 USD), "tasaciones profesionales", "servicios de tasación inmobiliaria" | 10–30 cada una | **comercial, la más alta de la lista** | Solo el artículo 12 dice "empresa de tasaciones" | Ninguna página usa "empresa de tasaciones". La home (title de 69 caracteres) es el lugar natural |
| Peritos: "perito tasador inmobiliario", "peritos tasadores de inmuebles", "tasador de inmuebles", "tasador de casas" (GSC pos. 2,5), "tasador vivienda", "tasador de bienes raíces", "busco tasador inmobiliario" | 10–20 cada una | elegir profesional | Hub (sección "Tasadores certificados"), artículos 12, 15, 16, 17, 19, 23, borradores 27, 28, 29 | No hay página cuyo tema sea "perito tasador inmobiliario"; "tasador de casas" y "bienes raíces" no aparecen en ninguna landing |
| Judicial: "tasador judicial inmobiliario", "perito inmobiliario judicial", "perito judicial tasador", "tasaciones judiciales de inmuebles", "tasación judicial vivienda" | 10 cada una | servicio | `/tasaciones/judicial` + artículo 15 | La landing no contiene literalmente "perito judicial" ni "tasador judicial" |
| Precio: "precio tasacion vivienda", "precio de tasación de una vivienda", "tasación de inmuebles precio", "precio tasador", "precios tasaciones viviendas", "precio para tasar una casa" | 10–20 cada una | informativa | Artículo 12 + FAQ del hub | El artículo 12 es de 2024 y sus H2 son comerciales; falta una tabla de precios por tipo de bien |
| Online / gratuita: "tasación vivienda online", "valoración online vivienda", "tasación de inmuebles online", "tasación gratuita de vivienda", "tasación online gratuita" | 10 cada una, muchos meses en 0 | informativa | Artículo 23 (tasador online) | Falta responder "¿existe la tasación gratuita?" |
| Tipo de bien: "tasación de locales comerciales", "tasación local comercial", "tasación naves industriales" | 10 cada una, competencia desconocida | servicio | El hub los lista; alquileres e hipotecaria mencionan locales | Sin página propia |
| Hipoteca: "tasación de vivienda para hipoteca", "tasación hipotecaria vivienda" | 10 / 0 | servicio | `/tasaciones/hipotecaria` | — |
| "tasación de bienes inmuebles" | 10 → 20 en sep., competencia Baja | servicio | Artículos 12, 15, 28 | El hub no usa la frase (es la del Reglamento) |
| "tasación de propiedades", "tasaciones de propiedades" | 20 + 10 | servicio | Artículos 12, 13, 16, 25, 28 | Ninguna landing la usa |
| Términos de España (ignorar): "tasación oficial", "coste…", "fincas rústicas", "tasador oficial", "asociación profesional de tasadores", "realadvisor" | — | — | — | Solo "tasación oficial" merece una línea en el borrador 27 como sinónimo de reglamentaria |

## Plan propuesto (de menor a mayor esfuerzo)

1. **Hoy, antes de tocar nada:** exportar GSC con filtro País = Perú, últimos 28 días, consultas y páginas (lectura definitiva
   prevista para el 25-10). Decide si el hub debe recuperar "tasación de inmuebles" en el title: es el término con volumen (880),
   "tasaciones" a secas ni siquiera figura en el Planificador.
2. **Home:** title nuevo con intención comercial y ≤ 60 caracteres, p. ej. "Empresa de tasaciones inmobiliarias en el Perú | VanguardiaMax",
   y una frase en "Por qué VanguardiaMax" con "empresa de tasación de inmuebles" y "servicio de tasación" en todo el Perú.
3. **Hub `/tasaciones`:** sinónimos en frases existentes, sin secciones nuevas: "tasación de propiedades", "tasación de bienes inmuebles",
   "tasador de casas", "tasador de bienes raíces", "empresa de tasaciones".
4. **`/tasaciones/judicial`:** una frase con "perito judicial inmobiliario" / "tasador judicial" y una FAQ "¿Qué es un perito judicial inmobiliario?".
5. **Artículo 23 (tasador online):** FAQ "¿Existe la tasación gratuita de una vivienda en el Perú?" y la frase "tasación online".
   **Borrador 27:** "tasación reglamentaria, también llamada tasación oficial".
6. **Nuevo artículo:** "Perito tasador inmobiliario en el Perú: qué hace, requisitos y cómo elegirlo" (definición citable, REPEV/REPEJ,
   cómo elegir; enlaza al borrador 29 y al hub).
7. **Nueva landing** `/tasaciones/locales-comerciales`: "Tasación de locales comerciales, oficinas y naves industriales" con formulario,
   definición citable y FAQ. Volumen pequeño (≈ 20–30/mes) pero sin competencia detectada.
8. **Refrescar el artículo 12 (precio):** misma URL, H2 en forma de pregunta, tabla de precios por tipo de bien y enlaces a cada landing.

Pendiente de aprobación del usuario.
