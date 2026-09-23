import Image from "next/image";

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

        <ul className="certs-grid">
          {data.items.map((item) => (
            <li className="cert-logo" key={item.src}>
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={130}
                sizes="(max-width: 560px) 44vw, (max-width: 980px) 29vw, 190px"
                loading="lazy"
              />
              <b className="cert-logo-name">{item.name}</b>
            </li>
          ))}
        </ul>

        <p className="certs-note">{data.note}</p>
      </div>
    </section>
  );
}
