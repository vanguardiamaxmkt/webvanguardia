# Paso 3 — `/tasaciones/alquiler`: definir "merced conductiva"

_Borrador sin commit. Fecha de trabajo: 22-09-2026. Evidencia: Search Console, 1 jul – 19 sep 2026, consultas filtradas por la página `/tasaciones/alquiler`._

## Archivos tocados

| Archivo | Estado | Qué cambia |
|---|---|---|
| `src/content/landings/alquileres.ts` | **modificado** (sin commit) | `meta.title`, `meta.description`, bloque nuevo al inicio de `seoContent`, 2 preguntas nuevas + 1 respuesta reescrita en `faq.items`, 1 H2 renombrado |
| `db/borradores/merced-conductiva.json` | **nuevo** | artículo de apoyo en estado `borrador` (no importado, no tocó la base de datos) |
| `seo/paso-3-alquiler.md` | **nuevo** | este informe |

---

## 1. Texto actual

### 1.1 `meta.title`

```
Tasación de Alquileres y Análisis de Renta | VanguardiaMax        (58 caracteres)
```

No contiene "merced conductiva", que es el término por el que la página realmente aparece en Google.

### 1.2 `meta.description`

```
Conoce la renta real de tu inmueble: estudio de merced conductiva y valor de alquiler
de mercado, con sustento técnico. Para arrendar, renovar contrato o respaldar un
proceso. Consulta por WhatsApp.                                  (198 caracteres)
```

Excede el límite práctico de ~155 caracteres, así que Google la trunca. Además menciona "merced conductiva" sin responder nada sobre ella.

### 1.3 El hecho central: la landing nunca definía el término

La expresión "merced conductiva" aparecía **seis veces** en la landing antes de esta edición (`hero.sub`, `heroCard.subtitle`, `benefits.items[1].title`, dos veces en `seoContent`, una en `faq`), siempre como nombre de un servicio que se vende, nunca como concepto que se explica. El primer H2 de `seoContent` prometía la definición en el título y no la entregaba en el cuerpo:

```
H2: "¿Qué es la merced conductiva o tasación de alquiler?"
P : "La tasación de alquiler es el estudio técnico que determina la merced conductiva
     de un inmueble, es decir, el valor de renta que corresponde a una propiedad…"
```

El párrafo define la **tasación**, no la **merced conductiva**: la usa como sinónimo de "valor de renta" y salta directo a la venta del servicio. La única respuesta parcial estaba en la FAQ ("Es el valor de renta de un inmueble determinado con criterio técnico…"), también orientada al servicio y sin ninguna referencia legal.

---

## 2. Texto propuesto (tal como quedó en el archivo)

### 2.1 `meta.title` — 56 caracteres

```
Merced conductiva y tasación de alquiler | VanguardiaMax
```

### 2.2 `meta.description` — 148 caracteres

```
Qué es la merced conductiva, cómo se calcula y un ejemplo en soles. Tasación de
alquiler con sustento técnico para tu contrato. Cotiza por WhatsApp.
```

### 2.3 Bloque nuevo al inicio de `seoContent`

Sigue el tipo `ProseBlock` (`{type:"h2"|"h3"|"p"|"ul"}`). Un `h2` + cuatro `p`:

**H2 — ¿Qué es la merced conductiva?**

> La **merced conductiva** es el nombre legal de la renta: el pago periódico —normalmente mensual— que el inquilino se obliga a entregar al propietario a cambio de usar un inmueble. Es el mismo dinero que en el día a día llamamos **alquiler**, solo que expresado en el lenguaje de los contratos y de los juzgados. El Código Civil peruano (Decreto Legislativo 295) define el arrendamiento en su artículo 1666 como la obligación del arrendador de «ceder temporalmente al arrendatario el uso de un bien por cierta renta convenida», y en el artículo 1681, inciso 2, obliga al arrendatario a «pagar puntualmente la renta en el plazo y lugar convenidos y, a falta de convenio, cada mes, en su domicilio». La expresión «merced conductiva» aparece literalmente en el artículo 1585 del mismo código, referido al arrendamiento-venta.

> **Ejemplo ilustrativo** (cifras referenciales, no una cotización): un departamento de 90 m² en Surco, con dos dormitorios, ascensor y cochera. Si los departamentos comparables de la misma zona y en condiciones similares se arriendan entre S/ 2,400 y S/ 3,000 al mes, la **merced conductiva mensual** razonable se ubicaría alrededor de S/ 2,700, y esa es la cifra que iría en el contrato como renta pactada. Sobre un valor comercial de S/ 540,000, equivale a una rentabilidad bruta cercana al 6 % anual. El monto de cada caso depende del inmueble y de su zona: estas cifras solo muestran cómo se razona.

> Una merced conductiva justa no se fija al tanteo ni copiando el aviso del vecino: se determina con una **tasación de alquiler**. El perito verifica el inmueble, reúne arrendamientos comparables de la misma zona, los ajusta por área, antigüedad, acabados, piso, estacionamiento y servicios, y contrasta el resultado con la relación entre la renta y el valor del inmueble. El informe entrega un valor de renta sustentado, con la metodología a la vista, que sirve para firmar un contrato nuevo, renegociar una renovación o discutir el monto frente a un tercero.

> Cuando la merced conductiva se fija mal, el costo aparece con el tiempo. Si queda por debajo del mercado, el propietario deja de ganar cada mes y arrastra ese error durante todo el plazo del contrato. Si queda por encima, el inmueble tarda en colocarse, rota de inquilinos o termina en una renegociación forzada. Y si la renta pactada deja de pagarse, el conflicto pasa al terreno legal: el artículo 1697 del Código Civil permite resolver el contrato cuando el arrendatario no ha pagado la renta del mes anterior y se vence otro mes y además quince días, y la restitución del predio se tramita como **desalojo** en proceso sumarísimo (artículos 585 y siguientes del Código Procesal Civil). Un valor sustentado desde el inicio es la mejor forma de no llegar ahí; si ya estás en un proceso, revisa nuestra [tasación judicial y pericial](/tasaciones/judicial).

### 2.4 H2 renombrado (cambio no pedido, marcado para revisión)

Al insertar el bloque nuevo, el H2 que abría `seoContent` quedaba como un casi duplicado del nuevo. Se renombró:

| Antes | Ahora |
|---|---|
| `¿Qué es la merced conductiva o tasación de alquiler?` | `¿Qué es la tasación de alquiler o estudio de renta?` |

Solo cambia el texto del encabezado; el cuerpo de esa sección queda intacto. **Es el único cambio fuera de lo solicitado** y es reversible en una línea si prefieren conservar el encabezado original.

### 2.5 `faq.items`

La pregunta "¿Qué es la merced conductiva?" **ya existía**, así que no se duplicó: se reescribió su respuesta y se añadieron las otras dos inmediatamente después. Las cinco preguntas originales siguen en el archivo; el bloque pasa de 5 a 7 ítems.

| # | Pregunta | Estado |
|---|---|---|
| 1 | ¿Qué es la merced conductiva? | respuesta **reescrita** |
| 2 | ¿Cómo se calcula la merced conductiva de un inmueble? | **nueva** |
| 3 | ¿La merced conductiva es lo mismo que el alquiler? | **nueva** |
| 4–7 | (las cuatro preguntas restantes) | sin cambios |

> **¿Qué es la merced conductiva?** — Es el término legal de la renta: el pago periódico que el inquilino entrega al propietario por usar un inmueble. El Código Civil peruano define el arrendamiento como ceder el uso de un bien «por cierta renta convenida» (art. 1666) y obliga al arrendatario a pagarla puntualmente (art. 1681). Su monto se determina con criterio técnico, según la ubicación, las características del inmueble y el mercado.

> **¿Cómo se calcula la merced conductiva de un inmueble?** — Con una tasación de alquiler: se reúnen arrendamientos de inmuebles comparables en la misma zona y se ajustan por área, antigüedad, acabados, piso, estacionamiento y servicios. El resultado es un valor de renta sustentado, con metodología, y no una estimación al tanteo.

> **¿La merced conductiva es lo mismo que el alquiler?** — Sí, es el mismo concepto. «Merced conductiva» es la expresión que usan los contratos, las demandas y la jurisprudencia; «alquiler» o «renta» es como lo llamamos todos los días. El Código Civil peruano habla de «renta» en el articulado del arrendamiento y usa «merced conductiva» en el artículo 1585.

### 2.6 Artículo de apoyo (borrador)

`db/borradores/merced-conductiva.json` — un solo objeto con el formato de `db/articulos-extra.json`.

| Campo | Valor |
|---|---|
| `slug` | `que-es-la-merced-conductiva` |
| `title` | ¿Qué es la merced conductiva? Significado, cálculo y ejemplo en el Perú |
| `meta_title` | Merced conductiva: qué es, cómo se calcula y ejemplo (52 car.) |
| `meta_description` | Qué es la merced conductiva, en qué se diferencia del alquiler, cómo se calcula con una tasación y qué dice el Código Civil peruano. Con ejemplo en soles. (154 car.) |
| `excerpt` | 173 caracteres |
| `focus_keyword` | merced conductiva |
| `status` / `noindex` | `borrador` / `0` |
| Extensión | ~1 030 palabras de texto (1 143 tokens contando cifras y símbolos) |
| Enlaces internos | `/tasaciones/alquiler` ×2 (anclas "tasación de alquiler" y "estudio de merced conductiva"), `/tasaciones/judicial` ×1 |
| HTML | solo `<p> <h2> <h3> <ul> <ol> <li> <strong> <em> <a>`; sin `<h1>`, sin estilos, un bloque por línea |

H2 del artículo, redactados para calzar literalmente con las consultas: qué es y qué significa · merced conductiva, alquiler y renta: ¿son lo mismo? · la merced conductiva mensual en el contrato · cómo se calcula una merced conductiva justa · ejemplo de merced conductiva mensual · qué pasa si no se paga · preguntas frecuentes.

**No se ejecutó el importador.** El archivo está en `db/borradores/`, fuera de la ruta que usa `scripts/importar-articulos.mjs`. Validado con `JSON.parse`: 1 entrada, 20 campos, mismo orden de claves que `articulos-extra.json`.

---

## 3. Fuente

Todas las consultas se hicieron el **22-09-2026**.

| Fuente | URL | Qué se tomó |
|---|---|---|
| Código Civil, Decreto Legislativo 295 (edición con sumillas de la Ley 25362) — PDF | `https://www.oas.org/juridico/PDFs/mesicic4_per_cod_civil.pdf` | Texto literal de los **arts. 1666, 1681, 1585 y 1697**. Descargado y verificado con búsqueda en el texto completo. |
| Texto Único Ordenado del Código Procesal Civil (R.M. 10-93-JUS) — PDF del Poder Judicial | `https://scc.pj.gob.pe/wps/wcm/connect/2e6fa4004d90af10858bf5db524a342a/Código+Procesal+Civil.pdf` | Texto literal de los **arts. 585, 586, 591 y 593** (subcapítulo 4, Desalojo). Descargado y verificado con búsqueda en el texto completo. |
| LP Derecho — art. 1666 CC y art. 1681 CC | `https://lpderecho.pe/contrato-arrendamiento-articulo-1666-codigo-civil/` · `https://lpderecho.pe/articulo-1681-del-codigo-civil-obligaciones-del-arrendatario-el-arrendatario-esta-obligado/` | Corroboración del texto de ambos artículos (vía resultados de búsqueda; el sitio devuelve **HTTP 403** a la descarga directa, así que **no se usó como fuente primaria**). |
| Conceptos Jurídicos (Perú) — art. 1666 CC | `https://www.conceptosjuridicos.com/pe/codigo-civil-articulo-1666/` | Segunda corroboración, literal e idéntica, del art. 1666. |
| Ley 30933, desalojo con intervención notarial | `https://busquedas.elperuano.pe/dispositivo/NL/1762977-1` (resultado de búsqueda) | **Art. 7**: causales = vencimiento del plazo e incumplimiento del pago de la **"renta convenida"**. |
| Reglamento Nacional de Tasaciones, R.M. 172-2016-VIVIENDA — PDF | `https://cdn-web.construccion.org/normas/files/vivienda/RM_172-2016-VIVIENDA.pdf` | Descargado y buscado en el texto completo: **no contiene la expresión "merced conductiva"**. Sí regula el "método de la renta" (art. 151). La copia de `cdn.www.gob.pe` es un escaneo sin capa de texto y no se pudo buscar. |
| Diccionario panhispánico del español jurídico (RAE) | `https://dpej.rae.es/lema/merced-conductiva` | **No verificado**: HTTP 403. Queda como pendiente. |

### Qué quedó verificado, literalmente

- **Art. 1666 CC** (sumilla "Definición"): *"Por el arrendamiento el arrendador se obliga a ceder temporalmente al arrendatario el uso de un bien por cierta renta convenida."*
- **Art. 1681, inc. 2, CC** (sumilla "Obligaciones del arrendatario"): el arrendatario está obligado *"a pagar puntualmente la renta en el plazo y lugar convenidos y, a falta de convenio, cada mes, en su domicilio."*
- **Art. 1585 CC** (sumilla "Reserva de propiedad en arrendamiento-venta"): *"…la propiedad del bien sea adquirida por el arrendatario por efecto del pago de **la merced conductiva** pactada."*
- **Art. 1697, inc. 1, CC**: el arrendamiento puede resolverse *"si el arrendatario no ha pagado la renta del mes anterior y se vence otro mes y además quince días…"*
- **Art. 585 CPC**: *"La restitución de un predio se tramita con arreglo a lo dispuesto para el proceso sumarísimo y las precisiones indicadas en este Subcapítulo."* El desalojo ocupa los arts. 585 a 596.
- **Art. 591 CPC**: si el desalojo se sustenta en falta de pago o vencimiento del plazo, *"sólo es admisible el documento, la declaración de parte y la pericia, en su caso."*

---

## 4. Motivo de la edición

### Evidencia de Search Console (1 jul – 19 sep 2026, consultas de la página)

La página completa: **4 clics, 2 680 impresiones, CTR 0,15 %**. El grupo "merced conductiva" son **13 consultas: 1 895 impresiones (71 % de las impresiones de la página), 1 clic, posición media 8,2**.

| Consulta | Impresiones | Posición |
|---|---:|---:|
| merced conductiva | 926 | 8,7 |
| que es merced conductiva | 351 | 8,7 |
| merced conductiva significado | 224 | 6,0 |
| que es la merced conductiva | 140 | 7,8 |
| que significa merced conductiva | 66 | — |
| que es la merced conductiva en arrendamiento | 56 | — |
| que es una merced conductiva | 40 | — |
| que es merced conductiva mensual | 36 | — |
| la merced conductiva | 20 | — |
| merced conductiva alquiler | 18 | — |
| merced conductiva mensual | 13 | — |

### Diagnóstico

Ocho de las once consultas listadas llevan "qué es", "significado" o "qué significa": son **informacionales puras**. La landing es una página comercial que usa el término como etiqueta de producto y no lo define en ninguna parte. Google la considera lo bastante relevante como para mostrarla 1 895 veces —posición 8,2 de media, primera página— pero el usuario que busca una definición no encuentra en el snippet nada que le prometa una definición, así que no hace clic: 1 clic sobre 1 895 impresiones.

La edición ataca los dos extremos del problema:

1. **El snippet** — `meta.title` y `meta.description` ahora prometen literalmente lo que se busca ("Qué es la merced conductiva, cómo se calcula y un ejemplo en soles"), dentro de los límites de caracteres para que no se trunquen.
2. **El contenido** — el primer bloque de la página responde la pregunta antes de vender nada: definición en lenguaje claro, respaldo legal, ejemplo numérico, cómo se determina y qué pasa si se fija mal. La transición hacia el servicio queda al final del bloque, no al principio.

---

## 5. Observaciones

- La consulta "merced conductiva" (926 impresiones) es de cola corta y ambigua: parte de quien la busca quiere una definición y parte quiere contratar. La landing puede atender a ambos; el artículo de apoyo cubre mejor a los primeros.
- Posición media 8,2 significa **primera página sin CTR**. No es un problema de autoridad ni de enlaces: es un problema de correspondencia entre el snippet y la intención. Es el tipo de caso donde un cambio de copy puede mover el número sin tocar nada más.
- La expresión "merced conductiva" **no aparece en el Reglamento Nacional de Tasaciones (R.M. 172-2016-VIVIENDA)**, aunque el `heroCard.foot` de la landing dice "Valor de renta sustentado · R.M. Nº172-2016". No es falso —el RNT sí regula el "método de la renta" (art. 151)— pero la asociación directa entre "merced conductiva" y esa resolución no está en la norma. No se tocó ese texto en esta edición.
- La expresión tampoco aparece en el TUO del Código Procesal Civil (la hipótesis de partida era que sí, en el art. 585 y siguientes). **No se afirmó lo contrario en ninguna parte del texto publicado**: la landing y el artículo citan el art. 585 solo por el procedimiento de desalojo, nunca como fuente del término.
- `ProseBlock` de tipo `p` y los ítems de `ul` **sí admiten HTML**: `src/components/sections/Prose.tsx` los renderiza con `dangerouslySetInnerHTML`. Un enlace externo con `target="_blank" rel="noopener noreferrer"` funcionaría sin cambios de código.
- Aun así **no se añadió ningún enlace externo a la fuente legal**. Razón: no se logró verificar una URL oficial estable. `spij.minjus.gob.pe` es una SPA cuyo deep link no se puede comprobar desde aquí, `gob.pe` devolvió 403/404 en las rutas probadas y `lpderecho.pe` devuelve 403. El único PDF del Código Civil que se pudo descargar y verificar íntegro está alojado en la OEA, que no encaja como fuente citable desde una landing peruana.
- El artículo de apoyo hereda `category: "Guías"`, que **no coincide** con ninguna de las categorías de `db/articulos-extra.json` ("Normativa contable"). Era un valor fijado en el encargo; conviene confirmar que el panel `/admin` la acepta o la crea.

## 6. Recomendaciones

1. **Aprobar y publicar la landing primero.** Es el cambio con mejor relación esfuerzo/retorno del lote: 1 895 impresiones ya existentes, en posición 8, sin necesidad de contenido nuevo indexado.
2. **Medir a 30 días** con la misma consulta de Search Console (misma página, mismo filtro) y comparar CTR y posición del grupo "merced conductiva" contra 0,15 % / 8,2. Si el CTR sube y la posición se mantiene, el problema era el snippet; si sube la posición, fue el contenido.
3. **Publicar el artículo después de la landing**, no a la vez, para poder atribuir el efecto. Y enlazarlo desde la landing cuando esté vivo, para que el silo quede cerrado en los dos sentidos.
4. **Resolver la URL oficial** del Código Civil y añadir el enlace externo (ver pendientes). Una cita legal enlazada sostiene mejor el E-E-A-T de una página que vende peritajes.
5. **Revisar `heroCard.foot`** ("R.M. Nº172-2016") en una pasada posterior, a la luz de que el RNT no usa el término.
6. **Considerar una FAQ adicional** —"¿quién fija la merced conductiva?"— que aparece en el artículo y podría subirse a la landing si el bloque de FAQ no queda demasiado largo. No se hizo ahora para no pasar de 7 ítems.

## 7. Pendiente de verificar

| # | Qué falta | Estado |
|---|---|---|
| 1 | **URL oficial y estable del Código Civil** (SPIJ/MINJUS o `gob.pe`) para enlazar la cita desde la landing. Probadas: `spij.minjus.gob.pe` (SPA, deep link no comprobable), `spijlibre.minjus.gob.pe` (200, sin ruta directa a la norma), `cdn.www.gob.pe` (403), `lpderecho.pe` (403). | **Bloqueante solo para el enlace**, no para el texto. El texto citado ya está verificado. |
| 2 | **Vigencia del TUO del Código Procesal Civil** descargado del Poder Judicial. Su art. 594 aparece en la redacción original de 1993, sin la modificación de la **Ley 30201** (2014, cláusula de allanamiento futuro), lo que indica que esa copia está desactualizada. Los arts. 585 y 591 citados no fueron modificados por esa ley, pero conviene confirmarlos en SPIJ antes de publicar. | **Pendiente.** Mitigado: el texto publicado cita el art. 585 solo por el procedimiento sumarísimo, que es la parte estable del artículo. |
| 3 | **Definición de "merced conductiva" en el Diccionario panhispánico del español jurídico (RAE)**, `dpej.rae.es/lema/merced-conductiva`. Devolvió 403. La etimología que usa el artículo (*merced* = retribución, *conductiva* = de *conducción*) **no se atribuye a ninguna fuente** en el texto publicado; si la RAE la confirma, conviene citarla. | **Pendiente.** |
| 4 | **Requisitos de la Ley 30933** para el desalojo notarial (contrato con firmas legalizadas, cuenta de abono, cláusulas de allanamiento). Solo se verificó el art. 7 (causales). El artículo dice "siempre que el contrato reúna los requisitos que esa ley exige", sin detallarlos, precisamente por eso. | **Pendiente**, no bloqueante. |
| 5 | **Cifras del ejemplo numérico** (S/ 2 400–3 000 de renta en Surco, S/ 540 000 de valor comercial). Son **inventadas para ilustrar el método**, no proceden de comparables reales y así se declara expresamente en los dos textos ("cifras referenciales, no una cotización"). Si el equipo de valuaciones tiene un rango real de la zona, conviene sustituirlas. | **Marcado como ilustrativo.** |
| 6 | **Categoría "Guías"** del artículo: confirmar que existe o se crea en el panel `/admin` antes de importar. | **Pendiente.** |
