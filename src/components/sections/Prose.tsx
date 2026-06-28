import type { ProseBlock } from "@/types/content";

/**
 * Long-form servicio copy. `p` and `ul` items may contain inline <b> markup,
 * so they are rendered as trusted HTML (content is authored, not user input).
 */
export function Prose({ blocks, alt = false }: { blocks: ProseBlock[]; alt?: boolean }) {
  return (
    <section className={alt ? "alt" : undefined}>
      <div className="wrap prose">
        {blocks.map((block, i) => {
          switch (block.type) {
            case "h2":
              return <h2 key={i}>{block.text}</h2>;
            case "h3":
              return <h3 key={i}>{block.text}</h3>;
            case "p":
              return <p key={i} dangerouslySetInnerHTML={{ __html: block.html }} />;
            case "ul":
              return (
                <ul key={i}>
                  {block.items.map((item, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              );
          }
        })}
      </div>
    </section>
  );
}
