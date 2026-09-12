import type { CertCard as CertCardData } from "@/types/content";
import { Seal } from "./Seal";

/** The signature "informe de tasación" card shown in landing heroes. */
export function CertCard({ data }: { data: CertCardData }) {
  return (
    <div
      className="cert"
      role="img"
      aria-label="Ejemplo de informe de tasación"
    >
      <div className="cert-top">
        <div>
          <h4>{data.title}</h4>
          <p>{data.subtitle}</p>
        </div>
      </div>
      <div className="cert-rows">
        {data.rows.map((row, i) => {
          const bar = i === 1 ? " b2" : i >= 2 ? " b3" : "";
          return (
            <div key={row.k}>
              <div className="cert-row">
                <span className="k">{row.k}</span>
                <span className="v">{row.v}</span>
              </div>
              <div className={`cert-bar${bar}`} />
            </div>
          );
        })}
      </div>
      <div className="cert-foot">
        <Seal text={data.sealText} />
        <p>{data.foot}</p>
      </div>
    </div>
  );
}
