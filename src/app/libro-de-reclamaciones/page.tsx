import type { Metadata } from "next";
import { siteNav } from "@/content/site";
import { WhatsAppProvider } from "@/components/whatsapp/WhatsAppProvider";
import { Topbar } from "@/components/layout/Topbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/whatsapp/FloatingWhatsApp";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { ReclamacionForm } from "./ReclamacionForm";

export const metadata: Metadata = {
  title: "Libro de Reclamaciones | VanguardiaMax",
  description:
    "Libro de Reclamaciones virtual de VanguardiaMax conforme a la Ley N.º 29571 (Código de Protección y Defensa del Consumidor). Registra tu reclamo o queja.",
  alternates: { canonical: "/libro-de-reclamaciones" },
};

export default function LibroDeReclamaciones() {
  return (
    <WhatsAppProvider
      baseMessage="Hola VanguardiaMax, tengo una consulta."
      segment="libro-reclamaciones"
    >
      <Topbar nav={siteNav} />
      <Breadcrumb
        items={[{ label: "Inicio", href: "/" }, { label: "Libro de Reclamaciones" }]}
      />
      <main>
        <section>
          <div className="wrap libro-wrap">
            <div className="sec-eyebrow">INDECOPI · Ley N.º 29571</div>
            <h1 className="sec-h">Libro de Reclamaciones</h1>
            <p className="libro-intro">
              Conforme al Código de Protección y Defensa del Consumidor, ponemos a
              tu disposición nuestro Libro de Reclamaciones virtual. Completa el
              formulario y recibirás un código de registro como constancia.
            </p>
            <ReclamacionForm />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </WhatsAppProvider>
  );
}
