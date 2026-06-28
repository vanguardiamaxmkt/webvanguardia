export function Pain({
  eyebrow,
  heading,
  body,
}: {
  eyebrow: string;
  heading: string;
  body: string;
}) {
  return (
    <section className="pain">
      <div className="wrap pain-grid">
        <div>
          <div className="sec-eyebrow" style={{ color: "var(--gold)" }}>
            {eyebrow}
          </div>
          <h2 className="sec-h">{heading}</h2>
        </div>
        <div>
          <p className="sec-p">{body}</p>
        </div>
      </div>
    </section>
  );
}
