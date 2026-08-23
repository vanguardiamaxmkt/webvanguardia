import type { Metadata } from "next";
import Link from "next/link";
import { site, siteNav } from "@/content/site";
import { WhatsAppProvider } from "@/components/whatsapp/WhatsAppProvider";
import { Topbar } from "@/components/layout/Topbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/whatsapp/FloatingWhatsApp";
import { Breadcrumb } from "@/components/sections/Breadcrumb";

export const metadata: Metadata = {
  title: "Política de Privacidad y Tratamiento de Datos | VanguardiaMax",
  description:
    "Política de Privacidad y Tratamiento de Datos Personales de VanguardiaMax conforme a la Ley N.º 29733 y su Reglamento (D.S. 003-2013-JUS). Conoce cómo tratamos tus datos y ejerce tus derechos ARCO.",
  alternates: { canonical: "/politica-de-privacidad" },
};

const RUC = site.ruc || "(por completar)";

export default function PoliticaDePrivacidad() {
  return (
    <WhatsAppProvider
      baseMessage="Hola VanguardiaMax, tengo una consulta sobre el tratamiento de mis datos."
      segment="privacidad"
    >
      <Topbar nav={siteNav} />
      <Breadcrumb
        items={[{ label: "Inicio", href: "/" }, { label: "Política de Privacidad" }]}
      />
      <main>
        <section>
          <div className="wrap libro-wrap">
            <div className="sec-eyebrow">Ley N.º 29733 · D.S. 003-2013-JUS</div>
            <h1 className="sec-h">Política de Privacidad y Tratamiento de Datos Personales</h1>
            <p className="legal-updated">Vigente desde julio de 2026.</p>

            <article className="legal-doc">
              <p>
                En <strong>{site.legalName}</strong> (en adelante, «VanguardiaMax»)
                respetamos y protegemos tus datos personales. Esta política explica
                qué datos recopilamos, con qué finalidad, con quién los compartimos y
                cómo puedes ejercer tus derechos, en cumplimiento de la{" "}
                <strong>Ley N.º 29733, Ley de Protección de Datos Personales</strong>,
                su Reglamento (Decreto Supremo N.º 003-2013-JUS) y las directivas de la
                Autoridad Nacional de Protección de Datos Personales (ANPD).
              </p>

              <h2>1. Responsable del tratamiento</h2>
              <ul>
                <li><strong>Titular del banco de datos:</strong> {site.legalName}</li>
                <li><strong>RUC:</strong> {RUC}</li>
                <li><strong>Domicilio:</strong> {site.address}, Lima – Perú.</li>
                <li>
                  <strong>Correo de contacto para privacidad:</strong>{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li><strong>Teléfono:</strong> {site.phoneDisplay}</li>
              </ul>

              <h2>2. Datos personales que recopilamos</h2>
              <p>Tratamos únicamente los datos que nos proporcionas o que se generan al usar nuestros canales:</p>
              <ul>
                <li>
                  <strong>Datos de identificación y contacto:</strong> nombre, número
                  de teléfono/WhatsApp y correo electrónico.
                </li>
                <li>
                  <strong>Datos del bien a valorizar:</strong> tipo de inmueble o
                  activo, distrito/ubicación y demás información que nos brindes para
                  cotizar el servicio.
                </li>
                <li>
                  <strong>Datos de navegación:</strong> dirección IP, tipo de
                  dispositivo, páginas visitadas y parámetros de campaña (UTM),
                  recopilados mediante cookies y herramientas de analítica.
                </li>
              </ul>
              <p>
                No solicitamos datos sensibles. Te pedimos no incluir información
                sensible (salud, origen étnico, etc.) en los mensajes que nos envíes.
              </p>

              <h2>3. Finalidades del tratamiento</h2>
              <ul>
                <li>Atender tus consultas y elaborar cotizaciones de tasación o servicios.</li>
                <li>Contactarte por WhatsApp, teléfono o correo para dar seguimiento a tu solicitud.</li>
                <li>Prestar el servicio contratado y emitir los informes correspondientes.</li>
                <li>Enviarte información comercial de nuestros servicios, cuando lo autorices.</li>
                <li>Fines estadísticos, de mejora del sitio y de medición de campañas (de forma agregada).</li>
                <li>Cumplir obligaciones legales y responder requerimientos de autoridades competentes.</li>
              </ul>

              <h2>4. Consentimiento</h2>
              <p>
                El tratamiento de tus datos se realiza sobre la base de tu{" "}
                <strong>consentimiento libre, previo, expreso, inequívoco e
                informado</strong>, que otorgas al marcar la casilla de autorización
                del formulario o al contactarnos voluntariamente por WhatsApp, teléfono
                o correo para requerir nuestros servicios. Proporcionar tus datos es
                <strong> facultativo</strong>; sin embargo, si no los brindas no
                podremos atender tu solicitud ni elaborar tu cotización.
              </p>
              <p>
                Puedes <strong>revocar tu consentimiento</strong> en cualquier momento,
                sin efecto retroactivo, escribiendo a{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>

              <h2>5. Banco de datos personales</h2>
              <p>
                Los datos se almacenan en el banco de datos denominado{" "}
                <strong>«Clientes y prospectos»</strong>, de titularidad de
                VanguardiaMax, inscrito o en proceso de inscripción ante el Registro
                Nacional de Protección de Datos Personales de la ANPD.
              </p>

              <h2>6. Destinatarios y transferencias</h2>
              <p>
                Para operar nuestros canales utilizamos proveedores que actúan como{" "}
                <strong>encargados de tratamiento</strong> y a los que se pueden
                comunicar tus datos, incluyendo <strong>transferencias
                internacionales</strong> a servidores ubicados fuera del Perú:
              </p>
              <ul>
                <li>
                  <strong>Meta Platforms, Inc. (WhatsApp / Facebook / Instagram):</strong>{" "}
                  cuando nos escribes por WhatsApp, tu número y tus mensajes se procesan
                  en la plataforma de Meta conforme a sus propias políticas.
                </li>
                <li>
                  <strong>Google LLC (Google Analytics, Tag Manager, Sheets):</strong>{" "}
                  analítica del sitio y registro de solicitudes de contacto.
                </li>
                <li>
                  <strong>Proveedores de alojamiento y almacenamiento</strong> (hosting
                  y base de datos) contratados para operar el sitio web.
                </li>
                <li>
                  Cuando el servicio lo requiera, entidades como bancos, financieras,
                  notarías o el Poder Judicial, en el marco del encargo que nos confíes.
                </li>
              </ul>
              <p>
                No vendemos ni cedemos tus datos a terceros con fines distintos a los
                aquí descritos.
              </p>

              <h2>7. Plazo de conservación</h2>
              <p>
                Conservamos tus datos mientras dure la relación comercial y, luego, el
                tiempo necesario para atender responsabilidades legales, contractuales o
                requerimientos de autoridades. Vencidos dichos plazos, los datos se
                eliminan o anonimizan.
              </p>

              <h2>8. Medidas de seguridad</h2>
              <p>
                Aplicamos medidas técnicas, organizativas y legales razonables para
                proteger tus datos contra acceso no autorizado, pérdida o uso indebido,
                conforme a la normativa vigente.
              </p>

              <h2>9. Tus derechos (ARCO y otros)</h2>
              <p>
                Como titular de los datos puedes ejercer tus derechos de{" "}
                <strong>acceso, rectificación, cancelación y oposición (ARCO)</strong>,
                así como los de información y revocación del consentimiento. Para ello,
                envía tu solicitud a{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a> indicando tu nombre,
                el derecho que deseas ejercer y adjuntando copia de tu documento de
                identidad. Atenderemos tu solicitud en los plazos que establece la Ley
                N.º 29733 y su Reglamento.
              </p>

              <h2>10. Reclamos ante la Autoridad</h2>
              <p>
                Si consideras que tus derechos no fueron atendidos, puedes presentar un
                reclamo ante la <strong>Autoridad Nacional de Protección de Datos
                Personales</strong> del Ministerio de Justicia y Derechos Humanos
                (MINJUSDH).
              </p>

              <h2>11. Menores de edad</h2>
              <p>
                Nuestros servicios se dirigen a personas mayores de edad. No recopilamos
                intencionalmente datos de menores sin autorización de sus padres o
                tutores.
              </p>

              <h2>12. Cambios en esta política</h2>
              <p>
                Podemos actualizar esta política para reflejar cambios legales u
                operativos. La versión vigente estará siempre publicada en esta página
                con su fecha de actualización.
              </p>

              <p style={{ marginTop: 24 }}>
                <Link href="/libro-de-reclamaciones" className="footer-libro">
                  📕 Libro de Reclamaciones
                </Link>
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </WhatsAppProvider>
  );
}
