"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink";
import { WizardLink } from "@/components/whatsapp/WizardLink";
import { WaIcon } from "@/components/whatsapp/WaIcon";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.24 1.02l-2.21 2.2z" />
    </svg>
  );
}

function NavItem({
  item,
  onClick,
}: {
  item: { href: string; label: string };
  onClick?: () => void;
}) {
  return item.href.startsWith("/") ? (
    <Link href={item.href} onClick={onClick}>
      {item.label}
    </Link>
  ) : (
    <a href={item.href} onClick={onClick}>
      {item.label}
    </a>
  );
}

/**
 * Site header. `variant="home"` renders the transparent-over-hero bar that turns
 * solid on scroll and shows in-page nav links (con menú hamburguesa en móvil);
 * the default is a solid sticky bar.
 */
export function Topbar({
  variant = "solid",
  nav,
  ctaTarget,
}: {
  variant?: "home" | "solid";
  nav?: readonly { href: string; label: string }[];
  /**
   * Si se pasa (p. ej. "cotizar"), el botón de WhatsApp del menú baja al wizard
   * de esa página (anti-bots). Si se omite (páginas sin formulario), va directo
   * a WhatsApp.
   */
  ctaTarget?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hasNav = !!nav && nav.length > 0;

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
          {hasNav && (
            <nav className="nav-links">
              {nav!.map((item) => (
                <NavItem key={item.href} item={item} />
              ))}
            </nav>
          )}
          <div className="top-actions">
            <a className="top-phone" href={`tel:${site.phoneE164}`}>
              <PhoneIcon />
              {site.phoneDisplay}
            </a>
            {ctaTarget ? (
              <WizardLink
                className="btn btn-wa"
                target={ctaTarget}
                ariaLabel="Cotizar por WhatsApp"
              >
                <WaIcon />
                WhatsApp
              </WizardLink>
            ) : (
              <WhatsAppLink className="btn btn-wa" location="header">
                <WaIcon />
                WhatsApp
              </WhatsAppLink>
            )}
            {hasNav && (
              <button
                type="button"
                className={`nav-toggle${menuOpen ? " open" : ""}`}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
              >
                <span />
                <span />
                <span />
              </button>
            )}
          </div>
        </div>
      </div>

      {hasNav && menuOpen && (
        <div className="mobile-menu">
          {nav!.map((item) => (
            <NavItem
              key={item.href}
              item={item}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </div>
      )}
    </header>
  );
}
