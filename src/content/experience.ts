import type { Experience } from "./types";

export const experience: readonly Experience[] = [
  {
    id: "winbold-capital-platforms",
    company: "Winbold Capital Platforms",
    title: "Full Stack Engineer",
    period: { start: "2026-01", end: "present" },
    location: "Washington, USA (remote)",
    summary:
      "The only engineer on the web app for an unreleased fintech product. I own the frontend, APIs and database, turn the designer's mockups into a working product, connect it to services from the ML/LLM team, and built its authentication and access control on OAuth 2.0, OIDC and JWT.",
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Supabase/PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    id: "soft-touch-network",
    company: "Soft Touch Network and Communication",
    title: "Software Developer",
    period: { start: "2025-05", end: "2026-01" },
    location: "Abu Dhabi, UAE (remote)",
    summary:
      "Led Build Travel, a flight booking platform, from scratch to production. Integrated Sabre GDS for live search, revalidation and fare rules, wrote the pricing engine for taxes and fare comparison, and deployed it on AWS. Another developer now builds on that foundation.",
    stack: [
      "Node.js",
      "TypeScript",
      "React",
      "AWS (EC2, Amplify)",
      "Firebase",
    ],
  },
  {
    id: "codecraft-ventures",
    company: "CodeCraft Ventures",
    title: "Co-Founder",
    period: { start: "2024-10", end: "2025-05" },
    location: "Kochi, India",
    summary:
      "Co-founded a software studio that built end-to-end web and mobile products for clients. I worked directly with clients to turn their requirements into product scope, delivered projects in an agile workflow from planning to release, and built web apps with React, TypeScript and Django and mobile apps with Flutter, including authentication and core application logic.",
    stack: ["React", "TypeScript", "Django", "Flutter"],
  },
  {
    id: "purpose-technology",
    company: "Purpose Technology LLP",
    title: "Associate Software Engineer",
    period: { start: "2024-04", end: "2024-10" },
    location: "Kerala, India",
    summary:
      "Built REST API-driven web apps with Django and React, and Android apps in Flutter. One of them was an HR operations app that generates offer letters and flags expiring documents on its own.",
    stack: ["Django", "React", "Flutter", "Celery"],
  },
  {
    id: "wahy-lab-solutions",
    company: "Wahy Lab Solutions",
    title: "Python Developer",
    period: { start: "2023-08", end: "2024-03" },
    location: "Kochi, India",
    employmentNote: "Internship, then full-time",
    summary:
      "Joined as an intern and stayed on full-time, building REST APIs with Django REST Framework and full-stack features around them.",
    stack: ["Django REST Framework"],
  },
];
