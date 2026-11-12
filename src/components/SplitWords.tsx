"use client";

import { motion } from "motion/react";

type SplitWordsProps = {
  text: string;
  delay?: number;
};

/** Raises each word out of a clipped line, one after another, on first render. */
export function SplitWords({ text, delay = 0 }: SplitWordsProps) {
  const words = text.split(" ");

  return (
    <>
      <span className="sr-only">{text}</span>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden
          className="inline-block overflow-hidden pb-[0.08em] align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.9,
              delay: delay + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && " "}
        </span>
      ))}
    </>
  );
}
