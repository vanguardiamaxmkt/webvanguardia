import type { FactsCard as FactsCardData } from "@/types/content";

/** "Ficha del servicio" card shown in servicio heroes. */
export function FactsCard({ data }: { data: FactsCardData }) {
  return (
    <div className="facts">
      <h4>{data.title}</h4>
      <dl>
        {data.rows.map((row) => (
          <div className="frow" key={row.k}>
            <div className="k">{row.k}</div>
            <div className="v">{row.v}</div>
          </div>
        ))}
      </dl>
    </div>
  );
}
