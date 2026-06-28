import type { IconKey } from "@/types/content";

/** Filled trust/credential glyphs used in hero trustlines and lists. */
const PATHS: Partial<Record<IconKey, string>> = {
  shield: "M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4z",
  star: "M12 1l3 6 6 .9-4.5 4.3 1 6.3L12 16l-5.5 2.8 1-6.3L3 7.9 9 7z",
  check: "M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z",
};

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  const d = PATHS[name] ?? PATHS.check!;
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
