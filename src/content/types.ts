/** Calendar month, e.g. "2024-03". Lexicographic order matches chronological order. */
export type YearMonth = `${number}-${number}`;

export type DateRange = {
  start: YearMonth;
  end: YearMonth | "present";
};

export type SocialLink = {
  kind: "github" | "linkedin" | "x" | "email" | "website";
  href: string;
  label: string;
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
};

export type Profile = {
  name: string;
  role: string;
  headline: string;
  intro: string;
  location: string;
  /** IANA zone used for the local-time readout, e.g. "Asia/Kolkata". */
  timeZone: string;
  availability: string;
  contactNote: string;
  email: string;
  links: readonly SocialLink[];
  resumeUrl?: string;
  education: Education;
};

/** A case study, shown in the order it appears in the content file. */
export type Project = {
  /** Anchor id and render key; must be unique across all projects. */
  slug: string;
  title: string;
  summary: string;
  /** e.g. "Hackathon team project"; omit for solo or employer work. */
  context?: string;
  problem: string;
  /** Ordered steps of the system's main flow, drawn as a pipeline. */
  flow?: readonly string[];
  /** Dimensions whose every combination was tested, drawn as "a × b × c". */
  testedCombinations?: readonly string[];
  contributionsLabel: "My decisions" | "My part";
  contributions: readonly string[];
  /** Credits work on the project that was not mine. */
  teamNote?: string;
  outcome?: string;
  lesson: string;
  stack: readonly string[];
};

export type Experience = {
  /** Stable key for rendering; must be unique across all entries. */
  id: string;
  company: string;
  title: string;
  period: DateRange;
  location: string;
  /** e.g. "Internship, then full-time". */
  employmentNote?: string;
  highlights: readonly string[];
  stack: readonly string[];
};
