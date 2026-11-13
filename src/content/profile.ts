import type { Profile } from "./types";

export const profile: Profile = {
  name: "Mohammed Siyad M A",
  role: "Full-Stack Engineer",
  headline:
    "I build web products end to end, from the first Figma screen to the production API.",
  bio: [
    "For about three years I've shipped software for companies in the US, the UAE and India, mostly remote and usually as the only developer on the product. That means I own all of it: the interface, the APIs, the database and the deploy.",
    "I care about interfaces that feel obvious and about getting real things into production quickly.",
  ],
  current:
    "Sole engineer on an unreleased fintech product at Winbold Capital Platforms.",
  location: "Kerala, India (IST)",
  timeZone: "Asia/Kolkata",
  availability: "Open to remote roles with overlap for US/EU teams.",
  contactNote:
    "I'm open to remote full-stack roles. Email is the fastest way to reach me.",
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
