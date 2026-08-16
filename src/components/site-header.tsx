"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { MotionCta } from "@/components/motion/motion-cta";
import { navigationItems } from "@/content/home";

function NavigationLinks() {
  return navigationItems.map((item) => (
    <li key={item.href}>
      <a href={item.href}>{item.label}</a>
    </li>
  ));
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="header-inner">
        <a className="brand-link" href="#inizio" aria-label="Spaccini Barbecue, torna all'inizio">
          <Image
            src="/spaccini-barbecue-logo.svg"
            alt="Logo Spaccini Barbecue"
            width={342.03}
            height={270.16}
            sizes="(max-width: 720px) 76px, 104px"
            className="brand-logo"
            priority
          />
        </a>

        <nav className="desktop-navigation" aria-label="Navigazione principale">
          <ul>
            <NavigationLinks />
          </ul>
        </nav>

        <MotionCta className="button button--header" href="#contatti">
          Raccontaci il tuo evento
        </MotionCta>

        <details className="mobile-menu">
          <summary>
            <span>Menu</span>
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </summary>
          <nav aria-label="Navigazione mobile">
            <ul>
              <NavigationLinks />
            </ul>
            <a className="button button--mobile-menu" href="#contatti">
              Raccontaci il tuo evento
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
