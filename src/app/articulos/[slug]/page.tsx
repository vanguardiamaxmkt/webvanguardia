import { cache } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedBySlug } from "@/lib/articles";
import { site } from "@/content/site";
import { WhatsAppProvider } from "@/components/whatsapp/WhatsAppProvider";
import { Topbar } from "@/components/layout/Topbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/whatsapp/FloatingWhatsApp";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { JsonLd } from "@/components/ui/JsonLd";

export const dynamic = "force-dynamic";

// Cache por request: generateMetadata y la página comparten la misma consulta.
const fetchArticle = cache((slug: string) => getPublishedBySlug(slug));

function fmtDate(d: string | null) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("es-PE", { year: "numeric", month: "long", day: "numeric" });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let article = null;
  try {
    article = await fetchArticle(slug);
  } catch {
    article = null;
  }
  if (!article) return { title: "Artículo no encontrado | VanguardiaMax" };

  const title = article.meta_title || article.title;
  const description = article.meta_description || article.excerpt || undefined;
  const image = article.og_image || article.cover_image || undefined;

  return {
    title: `${title} | VanguardiaMax`,
    description,
    alternates: { canonical: article.canonical_url || `/articulos/${article.slug}` },
    robots: article.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title,
      description,
      url: `/articulos/${article.slug}`,
      images: image ? [image] : undefined,
      publishedTime: article.published_at || undefined,
      modifiedTime: article.updated_at,
    },
  };
}

export default async function ArticuloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let article = null;
  try {
    article = await fetchArticle(slug);
  } catch {
    article = null;
  }
  if (!article) notFound();

  const image = article.cover_image || article.og_image;
  const tags = (article.tags || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.meta_description || article.excerpt || undefined,
    image: image ? `${site.url}${image}` : undefined,
    datePublished: article.published_at || undefined,
    dateModified: article.updated_at,
    author: { "@type": "Organization", name: article.author || site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/articulos/${article.slug}`,
  };

  return (
    <WhatsAppProvider
      baseMessage={`Hola VanguardiaMax, leí "${article.title}" y quiero más información.`}
      segment="articulo"
    >
      <JsonLd data={[jsonLd]} />
      <Topbar />
      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Artículos", href: "/articulos" },
          { label: article.title },
        ]}
      />
      <main>
        <section className="article-hero">
          <div className="wrap">
            <span className="eyebrow">{article.category || "Artículo"}</span>
            <h1>{article.title}</h1>
            {article.excerpt && <p className="lead">{article.excerpt}</p>}
            <div className="ameta">
              {article.author && <span>Por {article.author}</span>}
              {article.published_at && <span>{fmtDate(article.published_at)}</span>}
            </div>
          </div>
        </section>

        {image && (
          <div className="article-cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={article.title} />
          </div>
        )}

        <section className="article-body">
          <div className="wrap">
            <div
              className="article-prose"
              dangerouslySetInnerHTML={{ __html: article.content || "" }}
            />
            {tags.length > 0 && (
              <div className="article-tags">
                {tags.map((t) => (
                  <span key={t}>#{t}</span>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </WhatsAppProvider>
  );
}
