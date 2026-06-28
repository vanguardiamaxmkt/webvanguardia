"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink";
import { WaIcon } from "@/components/whatsapp/WaIcon";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.24 1.02l-2.21 2.2z" />
    </svg>
  );
}

/**
 * Site header. `variant="home"` renders the transparent-over-hero bar that turns
 * solid on scroll and shows in-page nav links; the default is a solid sticky bar.
 */
export function Topbar({
  variant = "solid",
  nav,
}: {
  variant?: "home" | "solid";
  nav?: readonly { href: string; label: string }[];
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (variant !== "home") return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const className = [
    "topbar",
    variant === "home" ? "topbar--home" : "",
    scrolled ? "scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={className}>
      <div className="wrap">
        <Link className="brand" href="/" aria-label={`${site.name} inicio`}>
          <Image
            className="brand-logo"
            src="/logo.svg"
            alt={site.name}
            width={319}
            height={76}
            priority
            unoptimized
          />
        </Link>
        <div className="nav">
          {nav && nav.length > 0 && (
            <nav className="nav-links">
              {nav.map((item) =>
                item.href.startsWith("/") ? (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ),
              )}
            </nav>
          )}
          <div className="top-actions">
            <a className="top-phone" href={`tel:${site.phoneE164}`}>
              <PhoneIcon />
              {site.phoneDisplay}
            </a>
            <WhatsAppLink className="btn btn-wa" location="header">
              <WaIcon />
              WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </header>
  );
}
