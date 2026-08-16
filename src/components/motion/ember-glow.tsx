"use client";

import { motion, useReducedMotion } from "framer-motion";

const STILL = { opacity: 0.85, scale: 1 };
const BREATHE = { opacity: [0.75, 1, 0.75], scale: [1, 1.045, 1] };

/**
 * A slow, low-amplitude breathing glow layered over the hero's CSS ember
 * graphic. Purely decorative (aria-hidden in the parent).
 *
 * The element itself always renders, on both server and client, with a fixed
 * `initial` value: conditionally returning `null` based on
 * `useReducedMotion()` (a value only known once mounted in a browser) shifted
 * every sibling after it and crashed hydration for visitors with reduced
 * motion enabled. Only the looping `animate` keyframes — applied after
 * hydration completes — are conditional.
 */
export function EmberGlow() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      className="ember-glow"
      initial={STILL}
      animate={shouldReduceMotion ? STILL : BREATHE}
      transition={{ duration: 4.5, repeat: shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" }}
    />
  );
}
