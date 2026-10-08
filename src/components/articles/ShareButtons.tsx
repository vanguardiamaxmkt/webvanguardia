"use client";

import { useState } from "react";
import { WaIcon } from "@/components/whatsapp/WaIcon";

/** Íconos de marca (monocromo, heredan el color del botón). */
const PATHS = {
  linkedin:
    "M6.5 8.5h-3V20h3V8.5zM5 4A1.75 1.75 0 105 7.5 1.75 1.75 0 005 4zm5.5 4.5h-3V20h3v-6c0-1.7 2.5-1.9 2.5 0v6h3v-6.4c0-3.7-3.9-3.6-5.5-1.8V8.5z",
  facebook:
    "M14 8.5h2V6h-2c-1.9 0-3 1.3-3 3v1.5H9V13h2v6h2.5v-6H16l.5-2.5h-3V9c0-.4.2-.5.5-.5z",
  x: "M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z",
  link: "M10.6 13.4a1 1 0 001.4 1.4l3.6-3.6a3 3 0 00-4.2-4.2l-1.5 1.5a1 1 0 101.4 1.4l1.5-1.5a1 1 0 011.4 1.4l-3.6 3.6zM13.4 10.6a1 1 0 00-1.4-1.4l-3.6 3.6a3 3 0 004.2 4.2l1.5-1.5a1 1 0 10-1.4-1.4l-1.5 1.5a1 1 0 01-1.4-1.4l3.6-3.6z",
  check: "M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z",
} as const;

function Glyph({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

/** Bloque para compartir el artículo (cada clic se mide como `article_share`). */
export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  return (
    <div className="share">
      <div className="share-head">
        <b>¿Te sirvió este artículo?</b>
        <span>Compártelo con quien esté por tasar, comprar o vender.</span>
      </div>
      <div className="share-btns">
        <a
          className="sh sh-wa"
          href={`https://wa.me/?text=${t}%20${u}`}
          target="_blank"
          rel="noopener noreferrer"
          data-track="share"
          data-network="whatsapp"
        >
          <WaIcon />
          WhatsApp
        </a>
        <a
          className="sh sh-in"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`}
          target="_blank"
          rel="noopener noreferrer"
          data-track="share"
          data-network="linkedin"
        >
          <Glyph d={PATHS.linkedin} />
          LinkedIn
        </a>
        <a
          className="sh sh-fb"
          href={`https://www.facebook.com/sharer/sharer.php?u=${u}`}
          target="_blank"
          rel="noopener noreferrer"
          data-track="share"
          data-network="facebook"
        >
          <Glyph d={PATHS.facebook} />
          Facebook
        </a>
        <a
          className="sh sh-x"
          href={`https://twitter.com/intent/tweet?url=${u}&text=${t}`}
          target="_blank"
          rel="noopener noreferrer"
          data-track="share"
          data-network="x"
          aria-label="Compartir en X"
        >
          <Glyph d={PATHS.x} />X
        </a>
        <button
          type="button"
          className={copied ? "sh sh-copy ok" : "sh sh-copy"}
          data-track="share"
          data-network="copiar"
          onClick={() => {
            navigator.clipboard?.writeText(url).then(() => {
              setCopied(true);
              window.setTimeout(() => setCopied(false), 2000);
            });
          }}
        >
          <Glyph d={copied ? PATHS.check : PATHS.link} />
          {copied ? "¡Enlace copiado!" : "Copiar enlace"}
        </button>
      </div>
    </div>
  );
}
