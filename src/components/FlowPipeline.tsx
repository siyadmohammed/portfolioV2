"use client";

import { motion } from "motion/react";

const container = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.18 } },
};

const step = {
  hidden: { opacity: 0, y: 12 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/** The system's main flow as numbered steps that light up in order when scrolled into view. */
export function FlowPipeline({ steps }: { steps: readonly string[] }) {
  return (
    <motion.ol
      variants={container}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.6 }}
      className="flex flex-wrap items-stretch gap-2"
    >
      {steps.map((label, index) => (
        <motion.li
          key={label}
          variants={step}
          className="flex items-center gap-2"
        >
          <span className="flex items-baseline gap-2 rounded-md border border-line bg-surface px-3 py-2">
            <span className="font-mono text-[11px] text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium">{label}</span>
          </span>
          {index < steps.length - 1 && (
            <span aria-hidden className="font-mono text-muted">
              →
            </span>
          )}
        </motion.li>
      ))}
    </motion.ol>
  );
}
