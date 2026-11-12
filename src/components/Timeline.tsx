"use client";

import { motion, useScroll } from "motion/react";
import { useRef, type ReactNode } from "react";

/** An ordered list with a rail on its left edge that draws itself as the list scrolls past. */
export function Timeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });

  return (
    <ol ref={ref} className="relative flex flex-col gap-16">
      <span
        aria-hidden
        className="absolute top-2 bottom-2 left-[5px] w-px bg-line"
      />
      <motion.span
        aria-hidden
        style={{ scaleY: scrollYProgress }}
        className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-accent"
      />
      {children}
    </ol>
  );
}
