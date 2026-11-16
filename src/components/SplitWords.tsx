import { Fragment } from "react";

type SplitWordsProps = {
  text: string;
  /** Seconds before the first word starts rising. */
  delay?: number;
};

/**
 * Raises each word out of a clipped line, one after another.
 * Pure CSS, so it plays on first paint without waiting for JavaScript.
 */
export function SplitWords({ text, delay = 0 }: SplitWordsProps) {
  const words = text.split(" ");

  return (
    <>
      <span className="sr-only">{text}</span>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            aria-hidden
            className="inline-block overflow-hidden pb-[0.08em] align-bottom"
          >
            <span
              className="enter-word inline-block"
              style={{ animationDelay: `${delay + index * 0.08}s` }}
            >
              {word}
            </span>
          </span>
          {/* Outside the clipping box: a trailing space inside an inline-block collapses. */}
          {index < words.length - 1 && " "}
        </Fragment>
      ))}
    </>
  );
}
