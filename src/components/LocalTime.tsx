"use client";

import { formatLocalTime } from "@/content";
import { useSyncExternalStore } from "react";

const TICK_MS = 15_000;

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, TICK_MS);
  return () => clearInterval(id);
}

/** Live wall-clock time in `timeZone`. Renders a placeholder on the server to avoid a hydration mismatch. */
export function LocalTime({ timeZone }: { timeZone: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () => formatLocalTime(new Date(), timeZone),
    () => null,
  );

  return <span className="tabular-nums">{time ?? "--:--"}</span>;
}
