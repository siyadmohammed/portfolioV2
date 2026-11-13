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
  /** Public origin of the deployed site; share-card and other absolute URLs build on it. */
  siteUrl: string;
  name: string;
  role: string;
  /** One first-person line under the name. */
  headline: string;
  /** Short first-person paragraphs. */
  bio: readonly string[];
  /** What I'm doing right now, one sentence. */
  current: string;
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

/** A selected project, shown in the order it appears in the content file. */
export type Project = {
  /** Anchor id and render key; must be unique across all projects. */
  slug: string;
  title: string;
  /** e.g. "Hackathon, team project"; omit when there is nothing to add. */
  context?: string;
  /** One or two first-person sentences. */
  description: string;
  stack: readonly string[];
  links?: {
    /** Public URL of the live product. */
    live?: string;
  };
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
  /** One short paragraph. */
  summary: string;
  stack: readonly string[];
};
