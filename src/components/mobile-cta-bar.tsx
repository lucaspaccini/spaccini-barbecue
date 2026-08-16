"use client";

import { useEffect, useState } from "react";

import { MotionCta } from "@/components/motion/motion-cta";

/**
 * A floating call-to-action bar shown on small screens once a visitor has
 * scrolled past the hero, so the primary conversion action stays reachable
 * without following the visitor from the very first frame. Hidden on desktop
 * by CSS, where the header's own CTA is always visible. State is read only
 * inside `useEffect` (never during render), so the server-rendered and first
 * client-rendered markup are identical — no hydration risk here.
 */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const pastHero = () => window.scrollY > Math.max(window.innerHeight * 0.6, 320);
    const beforeFooter = () => {
      const distanceToBottom =
        document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      return distanceToBottom > 480;
    };

    const updateVisibility = () => {
      setVisible(pastHero() && beforeFooter());
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div className="mobile-cta-bar" data-visible={visible} aria-hidden={!visible}>
      <MotionCta className="button button--primary" href="#contatti" tabIndex={visible ? 0 : -1}>
        Raccontaci il tuo evento
      </MotionCta>
    </div>
  );
}
