# VanguardiaMax — Sitio web (Next.js)

Sitio de VanguardiaMax migrado de HTML estático a **Next.js 15 (App Router) + TypeScript**.
La arquitectura es **data-driven**: el contenido vive en archivos tipados y un puñado de
componentes compartidos lo renderiza. Agregar una página nueva = agregar un archivo de
contenido + una entrada en el registro, sin tocar el layout.

## Requisitos

- Node.js 18.18+ (probado con Node 24)
- npm

## Scripts

```bash
npm run dev        # servidor de desarrollo (http://localhost:3000)
npm run build      # build de producción (genera todas las páginas estáticas)
npm start          # sirve el build de producción
npm run lint       # ESLint (next/core-web-vitals + typescript)
npm run typecheck  # tsc --noEmit
```

## Estructura

```
src/
├─ app/                         # Rutas (App Router)
│  ├─ layout.tsx                # <html>, fuentes (Inter/Fraunces), metadata base, GTM
│  ├─ page.tsx                  # Home  →  /
│  ├─ [slug]/page.tsx           # Landings de pauta  →  /hipotecaria, /judicial, …
│  ├─ servicios/page.tsx        # Índice de servicios  →  /servicios
│  ├─ servicios/[slug]/page.tsx # Páginas de servicio  →  /servicios/embarcaciones, …
│  ├─ sitemap.ts · robots.ts    # SEO derivado de los registros de contenido
│  ├─ not-found.tsx · globals.css
│
├─ components/
│  ├─ layout/                   # Topbar, Footer
│  ├─ sections/                 # Hero, CertCard, FactsCard, TrustStrip, Pain,
│  │                            # Benefits, Steps, Prose, Faq, Related, FinalCta, Breadcrumb
│  ├─ whatsapp/                 # WhatsAppProvider, WhatsAppLink, LeadForm, FloatingWhatsApp, WaIcon
│  ├─ templates/                # LandingPage, ServicePage, HomePage (ensamblan las secciones)
│  └─ ui/                       # Icon, JsonLd
│
├─ content/                     # ← TODO el texto editable vive aquí
│  ├─ site.ts                   # marca, teléfono, dirección, GTM, texto legal
│  ├─ home.ts                   # contenido de la home
│  ├─ landings/                 # un archivo por landing + index.ts (registro)
│  └─ servicios/                # un archivo por servicio + index.ts (registro)
│
├─ lib/whatsapp.ts              # UTM/atribución + construcción de enlaces wa.me + dataLayer
├─ types/content.ts            # contratos TypeScript del contenido
└─ styles/                      # tokens.css, base.css, components.css (sistema de diseño)

legacy-html/                    # HTML original archivado (referencia; no se publica)
```

## Tipos de página

| Tipo         | Ruta                     | Componente       | Contenido                       |
| ------------ | ------------------------ | ---------------- | ------------------------------- |
| Home         | `/`                      | `HomePage`       | `content/home.ts`               |
| Landing pauta| `/<slug>`                | `LandingPage`    | `content/landings/<slug>.ts`    |
| Servicio SEO | `/servicios/<slug>`      | `ServicePage`    | `content/servicios/<slug>.ts`   |

## Cómo agregar una landing nueva

1. Crea `src/content/landings/mi-landing.ts` exportando un `LandingContent`
   (copia `hipotecaria.ts` como plantilla).
2. Regístrala en `src/content/landings/index.ts`.
3. Listo: queda disponible en `/mi-landing`, con metadata, sitemap y enlaces de WhatsApp.

Para un servicio nuevo, lo mismo en `src/content/servicios/`.

## WhatsApp y atribución

- Todos los CTA usan `WhatsAppLink`, que arma el enlace `wa.me` en el cliente
  leyendo los UTMs de la URL (`utm_source`, `utm_campaign`, `fbclid`, …) y agrega
  un tag `(Origen: …)` al mensaje. Cada clic empuja un evento `whatsapp_click` a
  `dataLayer` (GTM).
- El formulario (`LeadForm`) arma un mensaje calificado con los datos y abre WhatsApp.
- El número, el ID de GTM y el texto legal se editan en `content/site.ts`.

## Rendimiento y carga diferida (lazy loading)

- **Reveal al hacer scroll**: `components/ux/AutoReveal.tsx` usa un único
  `IntersectionObserver` para revelar cada bloque (`main > section` y la barra de
  stats) cuando entra al viewport, con un *stagger* sutil en las tarjetas. Se monta
  una sola vez en el layout y se re-ejecuta en cada navegación.
- **Sin parpadeo y accesible**: un script inline marca `html.reveal-ready` antes
  del primer paint (estado inicial oculto en `styles/reveal.css`). Sin JavaScript,
  todo el contenido queda visible. Respeta `prefers-reduced-motion`.
- **Menos render / menos datos**: las secciones fuera de pantalla usan
  `content-visibility: auto`, así el navegador no pinta lo que no se ve hasta que
  el usuario lo necesita.
- **Imágenes/vídeo**: hoy todo el arte es **SVG inline** (cero peticiones de red).
  Para fotos futuras usa `components/ux/LazyImage.tsx` (envuelve `next/image`, con
  `loading="lazy"`, `srcset` responsivo y AVIF/WebP por defecto).
- GTM se carga con `strategy="afterInteractive"` para no bloquear el render inicial.

## Notas

- El diseño visual se preservó 1:1 respecto al HTML original (mismos tokens, tipografías y secciones).
- El contenedor GTM (`content/site.ts → gtmId`) ya está cableado; reemplázalo si cambia.
