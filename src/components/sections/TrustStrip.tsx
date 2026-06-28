import type { Stat } from "@/types/content";

export function TrustStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="strip">
      <div className="wrap">
        {stats.map((s) => (
          <div className="stat" key={s.l}>
            <div className="n">{s.n}</div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
