import type { Project } from "./types";

export const projects: readonly Project[] = [
  {
    slug: "build-travel",
    title: "Build Travel",
    summary: "Flight booking engine",
    problem:
      "Turning Sabre GDS's complex API, with its many request combinations, into a reliable booking flow: search → revalidation → fare rules → pricing.",
    flow: ["Search", "Revalidation", "Fare rules", "Pricing"],
    testedCombinations: ["Date", "Passenger type", "Cabin class"],
    contributionsLabel: "My decisions",
    contributions: [
      "Mapped the docs into typed request builders.",
      "Built the price engine, handling taxes and fare comparison.",
      "Tested every combination of date × passenger type × cabin class, because the AI-generated code covered the common paths but missed edge combinations.",
    ],
    outcome: "Core flow deployed on AWS and handed over for the next phase.",
    lesson: "AI writes the happy path. I own the combinations.",
    stack: ["Sabre GDS", "AWS"],
  },
  {
    slug: "plusone",
    title: "PlusOne",
    summary: "Mobile app for plusone.today",
    // TODO: context (client, employer or own project) and dates.
    problem:
      "PlusOne is a private connection layer for Kochi, not a dating app: people post an intent, join a lot, or get matched with someone heading to the same place tonight. It needed a mobile app alongside the web app.",
    contributionsLabel: "My part",
    contributions: [
      "Built the mobile app for the PlusOne web app using Capacitor.",
      "Authentication and the rest of the app work inside the mobile app, not just on the web.",
    ],
    // TODO: platforms (iOS / Android), store status, key decisions, outcome, lesson.
    stack: ["Capacitor"],
    links: { live: "https://plusone.today" },
  },
  {
    slug: "parivaar-cover",
    title: "Parivaar Cover",
    summary: "AI insurance advisor",
    context: "Hackathon team project",
    problem:
      "Families can't easily work out which mix of health policies gives the best cover.",
    contributionsLabel: "My part",
    contributions: [
      "Built the web app, chat interface and dashboard.",
      "Connected voice models so users can talk through their situation.",
      "Family details are extracted from the conversation and auto-filled, so there's no long form.",
    ],
    teamNote: "A teammate built the optimization engine (Google OR-Tools).",
    // TODO: outcome (e.g. hackathon result), only if there is one worth stating.
    lesson: "The best form is no form.",
    stack: ["Next.js", "FastAPI", "Sarvam AI"],
  },
];

/** "How I build with AI": rendered as a compact list, not a case study card. */
export const aiPractices: readonly string[] = [
  "Separate skill files for requirements, responsiveness and architecture diagrams, named explicitly in prompts, because the AI skips them otherwise.",
  "Compact or start a fresh session per feature, because long contexts degrade output.",
  "Update a context file after every feature or fix, so each session starts informed.",
  "Ask for 2 approaches with trade-offs before any code.",
];
