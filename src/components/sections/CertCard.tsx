import type { CertCard as CertCardData } from "@/types/content";

/** The signature "informe de tasación" card shown in landing heroes. */
export function CertCard({ data }: { data: CertCardData }) {
  return (
    <div
      className="cert"
      role="img"
      aria-label="Ejemplo de informe de tasación con valor comercial y de realización"
    >
      <div className="cert-top">
        <div>
          <h4>{data.title}</h4>
          <p>{data.subtitle}</p>
        </div>
      </div>
      <div className="cert-rows">
        {data.rows.map((row, i) => (
          <div key={row.k}>
            <div className="cert-row">
              <span className="k">{row.k}</span>
              <span className="v">{row.v}</span>
            </div>
            <div className={`cert-bar${i % 2 === 1 ? " b2" : ""}`} />
          </div>
        ))}
      </div>
      <div className="cert-foot">
        <svg className="seal" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#E8A33D" strokeWidth="2" />
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#E8A33D"
            strokeWidth="1"
            strokeDasharray="2 3"
          />
          <circle cx="50" cy="50" r="26" fill="#0F2A43" />
          <path
            d="M40 50l7 7 14-15"
            fill="none"
            stroke="#E8A33D"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <path id="seal-curve" d="M50 14 a36 36 0 1 1 -0.1 0" />
          </defs>
          <text
            fontFamily="Inter,sans-serif"
            fontSize="8.2"
            fontWeight="700"
            fill="#0F2A43"
            letterSpacing="1.4"
          >
            <textPath href="#seal-curve" startOffset="2%">
              {data.sealText}
            </textPath>
          </text>
        </svg>
        <p>{data.foot}</p>
      </div>
    </div>
  );
}
