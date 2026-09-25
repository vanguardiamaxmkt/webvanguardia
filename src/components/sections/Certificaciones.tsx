import Image from "next/image";
import { CertsMarquee } from "./CertsMarquee";

export interface CertificacionItem {
  /** Ruta del logotipo en /public (webp). */
  src: string;
  alt: string;
  name: string;
}

export interface CertificacionesData {
  eyebrow: string;
  heading: string;
  body: string;
  items: CertificacionItem[];
  note: string;
}

/**
 * Registros y colegios profesionales ante los que trabajan los peritos.
 * Reutilizable en la home y en las landings de /tasaciones.
 */
export function Certificaciones({
  data,
  id = "certificaciones",
}: {
  data: CertificacionesData;
  id?: string;
}) {
  return (
    <section className="certs" id={id}>
      <div className="wrap">
        <div className="sec-head-center">
          <div className="sec-eyebrow">{data.eyebrow}</div>
          <h2 className="sec-h">{data.heading}</h2>
          <p className="sec-p">{data.body}</p>
        </div>

        {/* Carrusel continuo de derecha a izquierda: la lista va duplicada y la
            pista se desplaza la mitad de su ancho, así el bucle no tiene saltos.
            La copia se oculta a lectores de pantalla. Solo se mueve cuando la
            sección está en pantalla (ver CertsMarquee). */}
        <CertsMarquee>
          <ul className="certs-track">
            {[...data.items, ...data.items].map((item, i) => {
              const copy = i >= data.items.length;
              return (
                <li className="cert-logo" key={`${item.src}-${i}`} aria-hidden={copy || undefined}>
                  <Image
                    src={item.src}
                    alt={copy ? "" : item.alt}
                    width={300}
                    height={130}
                    sizes="190px"
                    loading="lazy"
                  />
                  <b className="cert-logo-name">{item.name}</b>
                </li>
              );
            })}
          </ul>
        </CertsMarquee>

        <p className="certs-note">{data.note}</p>
      </div>
    </section>
  );
}
