import type { Profile } from "./types";

export const profile: Profile = {
  name: "Mohammed Siyad M A",
  role: "Full-Stack Engineer",
  headline:
    "Building web products end to end, from Figma screens to production APIs.",
  intro:
    "Full-stack engineer with about 3 years of experience, including remote work for companies in the US and UAE. I usually own products end to end as the sole developer: UI, APIs, database and deployment. I care about clean UX and shipping fast, and I use AI deliberately in my development workflow.",
  location: "Kerala, India (IST)",
  timeZone: "Asia/Kolkata",
  availability: "Open to remote roles with overlap for US/EU teams.",
  contactNote:
    "Open to remote full-stack roles. The fastest way to reach me is email.",
  email: "siyad.ma.mohammed2001@gmail.com",
  // TODO: add the GitHub profile link ({ kind: "github", ... }).
  links: [
    {
      kind: "linkedin",
      href: "https://www.linkedin.com/in/mohammedsiyad2001/",
      label: "LinkedIn",
    },
  ],
  // TODO: add resumeUrl once the resume PDF is in /public.
  education: {
    degree: "B.Tech in Computer Science",
    institution: "Vidya Academy of Science and Technology",
    location: "Thrissur",
    startYear: 2019,
    endYear: 2023,
  },
};
