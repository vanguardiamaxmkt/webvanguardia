import { cache } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPublishedBySlug, listRelated } from "@/lib/articles";
import { readingStats, withHeadingAnchors } from "@/lib/article-html";
import type { Article } from "@/types/article";
import { site, siteNav } from "@/content/site";
import { WhatsAppProvider } from "@/components/whatsapp/WhatsAppProvider";
import { Topbar } from "@/components/layout/Topbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/whatsapp/FloatingWhatsApp";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { JsonLd } from "@/components/ui/JsonLd";
import { ORG_REF } from "@/lib/schema";
import { ArticleReading } from "@/components/articles/ArticleReading";
import { TableOfContents } from "@/components/articles/TableOfContents";
import { ShareButtons } from "@/components/articles/ShareButtons";

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
  const { html, toc } = withHeadingAnchors(article.content || "");
  const { words, minutes } = readingStats(html);
  const pageUrl = `${site.url}/articulos/${article.slug}`;
  let related: Article[] = [];
  try {
    related = await listRelated(article.id, article.category);
  } catch {
    related = [];
  }
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
    publisher: ORG_REF,
    mainEntityOfPage: pageUrl,
    wordCount: words,
    timeRequired: `PT${minutes}M`,
  };

  return (
    <WhatsAppProvider
      baseMessage={`Hola VanguardiaMax, leí "${article.title}" y quiero más información.`}
      segment="articulo"
    >
      <JsonLd data={[jsonLd]} />
      <ArticleReading slug={article.slug} category={article.category} readingMinutes={minutes} />
      <Topbar nav={siteNav} />
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
              <span>{minutes} min de lectura</span>
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
          <div className={toc.length >= 3 ? "wrap article-layout" : "wrap"}>
            {toc.length >= 3 && (
              <aside className="article-aside">
                <TableOfContents items={toc} />
              </aside>
            )}
            <div className="article-main">
              <div
                id="article-content"
                className="article-prose"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              {tags.length > 0 && (
                <div className="article-tags">
                  {tags.map((t) => (
                    <span key={t}>#{t}</span>
                  ))}
                </div>
              )}
              <ShareButtons url={pageUrl} title={article.title} />
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="blog related-articles">
            <div className="wrap">
              <div className="sec-eyebrow">Sigue leyendo</div>
              <h2 className="sec-h">Artículos relacionados</h2>
              <div className="blog-grid">
                {related.map((a, i) => (
                  <Link
                    className="blog-card"
                    href={`/articulos/${a.slug}`}
                    key={a.id}
                    data-track="related"
                    data-slug={a.slug}
                    data-position={i + 1}
                  >
                    {a.cover_image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="thumb" src={a.cover_image} alt={a.title} loading="lazy" />
                    )}
                    <div className="body">
                      {a.category && <span className="blog-tag">{a.category}</span>}
                      <h3>{a.title}</h3>
                      {a.excerpt && <p>{a.excerpt}</p>}
                      <div className="blog-meta">{fmtDate(a.published_at)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </WhatsAppProvider>
  );
}
