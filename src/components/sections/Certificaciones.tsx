import Image from "next/image";

export interface CertificacionItem {
  /** Ruta del logotipo en /public (webp). */
  src: string;
  alt: string;
  name: string;
  detail: string;
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
                width={1005}
                height={428}
                sizes="(max-width: 640px) 45vw, (max-width: 980px) 30vw, 200px"
                loading="lazy"
              />
              <div className="cert-logo-txt">
                <b>{item.name}</b>
                <span>{item.detail}</span>
              </div>
            </li>
          ))}
        </ul>

        <p className="certs-note">{data.note}</p>
      </div>
    </section>
  );
}
