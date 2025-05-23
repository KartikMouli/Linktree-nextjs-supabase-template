import { type LinkItem } from "@/types/link";

export const githubRepoName = "AtotheY.github.io";

export const imageBaseUrl =
  process.env.NODE_ENV === "production" ? "" : `/${githubRepoName}`;
export const name = "@anthonysistilli";
export const description = "Founder @ Hyrd.dev & Sr SWE";

export const socialLinks = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/asistilli/" },
  { platform: "Twitter", url: "https://x.com/SistilliAnthony" },
  { platform: "Mail", url: "mailto:sistilli.business@gmail.com" },
  { platform: "Tiktok", url: "https://tiktok.com/@anthonysistilli" },
  {
    platform: "Youtube",
    url: "https://www.youtube.com/channel/UCoYzQqZNCRqqAomJwJ6yEdg",
  },
  { platform: "Discord", url: "https://discord.gg/JNc6uPUqUU" },
  { platform: "Instagram", url: "https://instagram.com/asistilli" },
  {
    platform: "GitHub",
    url: "https://github.com/AtotheY",
  },
];

export const items: LinkItem[] = [
  {
    type: "link",
    title: "Try the PLAUD NotePin!",
    url: "https://spn.so/iyi1yt99",
  },
  {
    type: "youtube",
    title: "Latest Youtube Video",
    youtubeId: "lMFQj_ilzJA",
  },
  { type: "category", title: "My projects / companies" },
  {
    type: "link",
    title: "Github code reviewer made with SpinAI.dev",
    url: "https://github.com/Fallomai/spinai/tree/main/templates/github-code-review-agent",
  },
  {
    type: "link",
    title: "SpinAI.dev - Observable AI Agents ‍made easy",
    url: "https://docs.spinai.dev/",
  },
  {
    type: "link",
    title: "Hyrd - Generate a new ATS resume for each job you apply to",
    url: "https://hyrd.dev/",
  },
  { type: "category", title: "My Stuff" },
  {
    type: "link",
    title: "Buy me a coffee :)",
    url: "http://buymeacoffee.com/anthonysistilli",
  },
  {
    type: "link",
    title: "Startup notes & coding resources (mind map)",
    url: "https://map.sistilli.dev/",
  },
  {
    type: "link",
    title: "Linktree clone (NextJS & Supabase)",
    url: "https://github.com/AtotheY/Linktree-nextjs-supabase-template",
  },
  {
    type: "link",
    title: "My saas landing page boilerplate on Github",
    url: "https://github.com/AtotheY/saas-landingpage",
  },
  { type: "category", title: "Resources" },
  {
    type: "link",
    title: "Software Engineer's Resume Checklist",
    url: "https://map.sistilli.dev/public/coding/Software+Engineer's+Resume+Checklist",
  },
  {
    type: "link",
    title:
      "Try Scrimba - learning to code from the future (an extra 20% off using my link)",
    url: "https://v2.scrimba.com?via=AnthonySistilli",
  },
];
