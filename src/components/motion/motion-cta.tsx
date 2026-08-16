"use client";

import { motion } from "framer-motion";
import type { AnchorHTMLAttributes, ReactNode } from "react";

// Native drag/animation DOM event handlers conflict with Framer Motion's own
// gesture props of the same name; this component doesn't use either, so they
// are simply excluded from the forwarded prop type.
type ConflictingHandlers =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

type MotionCtaProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingHandlers> & {
  readonly children: ReactNode;
};

/**
 * A small hover/tap scale on the site's primary calls to action. Only
 * `whileHover`/`whileTap` are used — gesture-triggered props that produce no
 * inline style until the gesture actually happens, so there is nothing for
 * the server-rendered and first client-rendered markup to disagree on.
 */
export function MotionCta({ children, ...anchorProps }: MotionCtaProps) {
  return (
    <motion.a
      {...anchorProps}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {children}
    </motion.a>
  );
}
