import { experience } from "./experience";
import { profile } from "./profile";
import { projects } from "./projects";
import type { DateRange, Education, Experience, YearMonth } from "./types";

export type * from "./types";
export { profile, projects };

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** Most recent first: ongoing ranges lead, then later end month, then later start month. */
export function compareByRecency(a: DateRange, b: DateRange): number {
  if (a.end !== b.end) {
    if (a.end === "present") return -1;
    if (b.end === "present") return 1;
    return a.end < b.end ? 1 : -1;
  }
  if (a.start === b.start) return 0;
  return a.start < b.start ? 1 : -1;
}

/** Most recent first. Returns a new array. */
export function sortExperience(list: readonly Experience[]): Experience[] {
  return [...list].sort((a, b) => compareByRecency(a.period, b.period));
}

/** "2024-03" -> "Mar 2024". */
export function formatYearMonth(value: YearMonth): string {
  const [year, month] = value.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

/** "Jan 2026 – Present". */
export function formatDateRange({ start, end }: DateRange): string {
  const endLabel = end === "present" ? "Present" : formatYearMonth(end);
  return `${formatYearMonth(start)} – ${endLabel}`;
}

/** "2019–2023". */
export function formatEducationYears({ startYear, endYear }: Education): string {
  return `${startYear}–${endYear}`;
}

/** 24-hour "HH:MM" wall-clock time of `date` in `timeZone`. */
export function formatLocalTime(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(date);
}

const sortedExperience = sortExperience(experience);

export function getExperience(): readonly Experience[] {
  return sortedExperience;
}
