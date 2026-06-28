import Link from "next/link";
import { WhatsAppProvider } from "@/components/whatsapp/WhatsAppProvider";
import { Topbar } from "@/components/layout/Topbar";
import { Footer } from "@/components/layout/Footer";
import { siteNav } from "@/content/site";

export default function NotFound() {
  return (
    <WhatsAppProvider
      baseMessage="Hola VanguardiaMax, quiero información sobre sus tasaciones."
      segment="not-found"
    >
      <Topbar nav={siteNav} />
      <main>
        <section className="hero hero--service">
          <div className="wrap" style={{ display: "block", textAlign: "center" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Error 404
            </span>
            <h1>Página no encontrada</h1>
            <p className="sub" style={{ margin: "0 auto 30px" }}>
              La página que buscas no existe o fue movida. Vuelve al inicio o
              explora nuestros servicios de tasación.
            </p>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <Link className="btn btn-wa" href="/">
                Ir al inicio
              </Link>
              <Link className="btn btn-ghost" href="/servicios">
                Ver servicios
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </WhatsAppProvider>
  );
}
