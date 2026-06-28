import type { Metadata } from "next";
import Link from "next/link";
import { listPublished } from "@/lib/articles";
import type { Article } from "@/types/article";
import { WhatsAppProvider } from "@/components/whatsapp/WhatsAppProvider";
import { Topbar } from "@/components/layout/Topbar";
import { siteNav } from "@/content/site";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/whatsapp/FloatingWhatsApp";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Artículos y guías de tasación | VanguardiaMax",
  description:
    "Guías, novedades y consejos sobre tasaciones, peritajes, crédito hipotecario, saneamiento y trámites inmobiliarios en el Perú.",
  alternates: { canonical: "/articulos" },
};

function fmtDate(d: string | null) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("es-PE", { year: "numeric", month: "long", day: "numeric" });
}

export default async function ArticulosPage() {
  let articles: Article[] = [];
  try {
    articles = await listPublished(60);
  } catch {
    articles = [];
  }

  return (
    <WhatsAppProvider
      baseMessage="Hola VanguardiaMax, llegué desde un artículo y quiero más información."
      segment="articulos"
    >
      <Topbar nav={siteNav} />
      <main>
        <section className="blog">
          <div className="wrap">
            <div className="sec-head-center">
              <div className="sec-eyebrow">Blog</div>
              <h2 className="sec-h">Artículos y guías de tasación</h2>
              <p className="sec-p">
                Información práctica sobre tasaciones, peritajes y trámites inmobiliarios en el Perú.
              </p>
            </div>

            {articles.length === 0 ? (
              <div className="sec-head-center" style={{ color: "var(--muted)" }}>
                Pronto publicaremos nuestros primeros artículos.
              </div>
            ) : (
              <div className="blog-grid">
                {articles.map((a) => (
                  <Link className="blog-card" href={`/articulos/${a.slug}`} key={a.id}>
                    {a.cover_image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="thumb" src={a.cover_image} alt={a.title} loading="lazy" />
                    )}
                    <div className="body">
                      {a.category && <span className="blog-tag">{a.category}</span>}
                      <h3>{a.title}</h3>
                      <p>{a.excerpt}</p>
                      <div className="blog-meta">{fmtDate(a.published_at)}</div>
                    </div>
                  </Link>
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
