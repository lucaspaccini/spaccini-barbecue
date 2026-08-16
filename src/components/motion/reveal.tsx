"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealTag = "div" | "li" | "article";

type RevealProps = {
  readonly children: ReactNode;
  readonly as?: RevealTag;
  readonly className?: string;
  readonly delay?: number;
};

const HIDDEN = { opacity: 0, y: 32, scale: 0.97 };
const VISIBLE = { opacity: 1, y: 0, scale: 1 };
const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Fades and lifts content into place once it enters the viewport.
 * `data-reveal` lets the no-JS stylesheet in the root layout force full
 * visibility when scripting is unavailable.
 *
 * `useReducedMotion` only reports the real device setting once mounted in a
 * browser (it is always `null` during server rendering), so it must never
 * decide `initial` — doing so made the very first client render diverge from
 * the server-rendered HTML and crashed hydration for visitors with reduced
 * motion enabled. Instead `initial` stays fixed at `HIDDEN` on every render,
 * and reduced motion is honored by collapsing the transition to 0s, which
 * only affects the animation the browser runs after hydration completes.
 */
export function Reveal({ children, as = "div", className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : { duration: 0.65, delay, ease: EASE };
  const viewport = { once: true, amount: 0.3 } as const;

  if (as === "li") {
    return (
      <motion.li
        data-reveal
        className={className}
        initial={HIDDEN}
        whileInView={VISIBLE}
        viewport={viewport}
        transition={transition}
      >
        {children}
      </motion.li>
    );
  }

  if (as === "article") {
    return (
      <motion.article
        data-reveal
        className={className}
        initial={HIDDEN}
        whileInView={VISIBLE}
        viewport={viewport}
        transition={transition}
      >
        {children}
      </motion.article>
    );
  }

  return (
    <motion.div
      data-reveal
      className={className}
      initial={HIDDEN}
      whileInView={VISIBLE}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
