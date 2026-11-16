"use client";

import { useAnimate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Lifts its content into place the first time it scrolls into view.
 *
 * The server HTML is always visible. Only content that starts below the fold
 * is hidden, and only once JavaScript is running, so a slow or failed script
 * never leaves part of the page blank.
 */
export function Reveal({ children, className }: RevealProps) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { once: true, margin: "0px 0px -10% 0px" });
  const reduceMotion = useReducedMotion();
  const hidden = useRef(false);

  useEffect(() => {
    const element = scope.current;
    if (
      reduceMotion ||
      element.getBoundingClientRect().top < window.innerHeight
    ) {
      return;
    }
    hidden.current = true;
    animate(element, { opacity: 0, y: 24 }, { duration: 0 });
  }, [animate, scope, reduceMotion]);

  useEffect(() => {
    if (!inView || !hidden.current) return;
    hidden.current = false;
    animate(
      scope.current,
      { opacity: 1, y: 0 },
      { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    );
  }, [inView, animate, scope]);

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
