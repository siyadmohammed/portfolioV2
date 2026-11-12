import type { Experience } from "./types";

export const experience: readonly Experience[] = [
  {
    id: "winbold-capital-platforms",
    company: "Winbold Capital Platforms",
    title: "Full Stack Engineer",
    period: { start: "2026-01", end: "present" },
    location: "Washington, USA (remote)",
    highlights: [
      "Sole developer of the web application for an unreleased fintech product.",
      "Own the frontend, APIs and database; turn designer mockups into a working product.",
      "Integrate the web app with services built by the ML/LLM team.",
      "Implemented authentication and access control (OAuth 2.0 / OIDC, JWT).",
    ],
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
    highlights: [
      "Led development of Build Travel, a flight booking platform, from scratch to deployment.",
      "Integrated Sabre GDS for real-time search, revalidation and fare rules.",
      "Built a pricing engine handling taxes and fare comparisons.",
      "Deployed on AWS; handed over a solid foundation that another developer now extends.",
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "React",
      "AWS (EC2, Amplify)",
      "Firebase",
    ],
  },
  {
    id: "purpose-technology",
    company: "Purpose Technology LLP",
    title: "Associate Software Engineer",
    period: { start: "2024-04", end: "2024-10" },
    location: "Kerala, India",
    highlights: [
      "Built REST API-driven web apps with Django and React; Android apps in Flutter.",
      "Built an HR operations app with automated offer letters and document-expiry alerts (Django, Celery).",
    ],
    stack: ["Django", "React", "Flutter", "Celery"],
  },
  {
    id: "wahy-lab-solutions",
    company: "Wahy Lab Solutions",
    title: "Python Developer",
    period: { start: "2023-08", end: "2024-03" },
    location: "Kochi, India",
    employmentNote: "Internship, then full-time",
    highlights: [
      "Built REST APIs with Django REST Framework and full-stack features.",
    ],
    stack: ["Django REST Framework"],
  },
];
