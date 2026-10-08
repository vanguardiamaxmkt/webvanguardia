"use client";

import { useState } from "react";

/** Botones para compartir el artículo (cada clic se mide como `article_share`). */
export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    { network: "whatsapp", label: "WhatsApp", href: `https://wa.me/?text=${t}%20${u}` },
    { network: "linkedin", label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { network: "facebook", label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { network: "x", label: "X", href: `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
  ];

  return (
    <div className="share">
      <span className="share-label">Compartir</span>
      {links.map((l) => (
        <a
          key={l.network}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          data-track="share"
          data-network={l.network}
        >
          {l.label}
        </a>
      ))}
      <button
        type="button"
        data-track="share"
        data-network="copiar"
        onClick={() => {
          navigator.clipboard?.writeText(url).then(() => {
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
          });
        }}
      >
        {copied ? "¡Copiado!" : "Copiar enlace"}
      </button>
    </div>
  );
}
