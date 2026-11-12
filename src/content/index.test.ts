import { describe, expect, it } from "vitest";
import { experience } from "./experience";
import {
  compareByRecency,
  formatDateRange,
  formatEducationYears,
  formatLocalTime,
  formatYearMonth,
  getExperience,
  profile,
  sortExperience,
} from "./index";
import { projects } from "./projects";
import type { DateRange, Experience } from "./types";

function job(id: string, period: DateRange): Experience {
  return {
    id,
    company: id,
    title: "",
    period,
    location: "",
    highlights: [],
    stack: [],
  };
}

function duplicates(keys: readonly string[]): string[] {
  return keys.filter((key, index) => keys.indexOf(key) !== index);
}

describe("compareByRecency", () => {
  it("puts an ongoing range before an ended one", () => {
    const ongoing: DateRange = { start: "2020-01", end: "present" };
    const ended: DateRange = { start: "2023-01", end: "2024-12" };
    expect(compareByRecency(ongoing, ended)).toBeLessThan(0);
    expect(compareByRecency(ended, ongoing)).toBeGreaterThan(0);
  });

  it("orders ended ranges by later end month first", () => {
    const earlier: DateRange = { start: "2020-01", end: "2021-06" };
    const later: DateRange = { start: "2020-01", end: "2022-03" };
    expect(compareByRecency(later, earlier)).toBeLessThan(0);
  });

  it("breaks an equal end month by later start month first", () => {
    const longer: DateRange = { start: "2019-01", end: "present" };
    const shorter: DateRange = { start: "2023-05", end: "present" };
    expect(compareByRecency(shorter, longer)).toBeLessThan(0);
  });

  it("returns 0 for identical ranges", () => {
    const range: DateRange = { start: "2022-01", end: "2022-12" };
    expect(compareByRecency(range, { ...range })).toBe(0);
  });
});

describe("sortExperience", () => {
  it("returns an empty array for no entries", () => {
    expect(sortExperience([])).toEqual([]);
  });

  it("orders entries most recent first", () => {
    const first = job("first", { start: "2018-01", end: "2020-01" });
    const current = job("current", { start: "2022-01", end: "present" });
    const middle = job("middle", { start: "2020-02", end: "2021-12" });
    expect(sortExperience([first, current, middle]).map((e) => e.id)).toEqual([
      "current",
      "middle",
      "first",
    ]);
  });

  it("does not mutate the input array", () => {
    const input = [
      job("a", { start: "2021-01", end: "2021-12" }),
      job("b", { start: "2023-01", end: "present" }),
    ];
    sortExperience(input);
    expect(input.map((e) => e.id)).toEqual(["a", "b"]);
  });
});

describe("formatting", () => {
  it("formats the first and last month of the year", () => {
    expect(formatYearMonth("2024-01")).toBe("Jan 2024");
    expect(formatYearMonth("2024-12")).toBe("Dec 2024");
  });

  it("formats an ongoing range with Present", () => {
    expect(formatDateRange({ start: "2026-01", end: "present" })).toBe(
      "Jan 2026 – Present",
    );
  });

  it("formats an ended range with both months", () => {
    expect(formatDateRange({ start: "2025-05", end: "2026-01" })).toBe(
      "May 2025 – Jan 2026",
    );
  });

  it("formats local time in the given zone, not the machine's", () => {
    const utcMidnight = new Date("2026-01-01T00:00:00Z");
    expect(formatLocalTime(utcMidnight, "Asia/Kolkata")).toBe("05:30");
  });

  it("formats midnight as 00, not 24", () => {
    const istMidnight = new Date("2026-01-01T18:30:00Z");
    expect(formatLocalTime(istMidnight, "Asia/Kolkata")).toBe("00:00");
  });

  it("formats education as a year span", () => {
    expect(formatEducationYears(profile.education)).toBe("2019–2023");
  });
});

describe("content integrity", () => {
  const ranges = experience.map((entry) => entry.period);

  it("has no duplicate project slugs", () => {
    expect(duplicates(projects.map((p) => p.slug))).toEqual([]);
  });

  it("has no duplicate experience ids", () => {
    expect(duplicates(experience.map((e) => e.id))).toEqual([]);
  });

  it("uses only real calendar months (YYYY-MM, 01 to 12)", () => {
    const months = ranges.flatMap((r) =>
      r.end === "present" ? [r.start] : [r.start, r.end],
    );
    const invalid = months.filter(
      (m) => !/^\d{4}-(0[1-9]|1[0-2])$/.test(m),
    );
    expect(invalid).toEqual([]);
  });

  it("has every date range starting on or before it ends", () => {
    const backwards = ranges.filter(
      (r) => r.end !== "present" && r.start > r.end,
    );
    expect(backwards).toEqual([]);
  });

  it("shows the current role first", () => {
    expect(getExperience()[0].period.end).toBe("present");
  });

  it("has no link pointing at a TODO placeholder", () => {
    const hrefs = [...profile.links.map((l) => l.href), profile.resumeUrl ?? ""];
    expect(hrefs.filter((href) => /todo/i.test(href))).toEqual([]);
  });
});
