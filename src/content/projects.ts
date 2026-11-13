import type { Project } from "./types";

export const projects: readonly Project[] = [
  {
    slug: "build-travel",
    title: "Build Travel",
    context: "At Soft Touch Network",
    description:
      "A flight booking engine on Sabre GDS. I took it from an empty repo to production: live search, revalidation, fare rules and a pricing engine, tested across every date, passenger type and cabin class combination, running on AWS.",
    stack: ["Sabre GDS", "AWS"],
  },
  {
    slug: "plusone",
    title: "PlusOne",
    // TODO: context (client, employer or own project).
    description:
      "A private connection layer for Kochi: post an intent, join a lot, or get matched with someone heading to the same place tonight. I built its mobile app with Capacitor, with sign-in and the full product working on the phone.",
    stack: ["Capacitor"],
    links: { live: "https://plusone.today" },
  },
  {
    slug: "parivaar-cover",
    title: "Parivaar Cover",
    context: "Hackathon, team project",
    description:
      "An AI advisor that helps families find the best mix of health policies. I built the web app, chat and dashboard, and the voice flow that pulls family details out of the conversation so nobody fills in a long form.",
    stack: ["Next.js", "FastAPI", "Sarvam AI"],
  },
];
