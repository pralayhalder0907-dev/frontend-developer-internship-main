export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export interface SocialLink {
  label: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Twitter", href: "https://twitter.com/" },
];

export type ProjectCategory = "Frontend" | "Fullstack" | "Mobile";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
}

// NOTE: liveUrl/repoUrl are placeholders ("#") for the sample projects below.
// Replace them with real deployment/repo links once available; the links are
// safely inert ("#" clicks are suppressed) until then.
export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Nimbus Dashboard",
    description:
      "An analytics dashboard with live charts, dark mode, and role-based access built for a SaaS product.",
    category: "Frontend",
    tags: ["React", "TypeScript", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "p2",
    title: "Marketplace API + Storefront",
    description:
      "A full order-to-checkout flow with a Node/Express API, PostgreSQL, and a React storefront.",
    category: "Fullstack",
    tags: ["React", "Node.js", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=60",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "p3",
    title: "Trailhead Fitness",
    description:
      "A cross-platform workout tracker with offline-first sync and animated progress rings.",
    category: "Mobile",
    tags: ["React Native", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=60",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "p4",
    title: "Foglight Docs",
    description:
      "A documentation site generator with MDX support, full-text search, and versioned releases.",
    category: "Frontend",
    tags: ["React", "Vite", "MDX"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=60",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "p5",
    title: "Ledgerly Finance API",
    description:
      "A budgeting API with double-entry accounting logic, JWT auth, and automated test coverage.",
    category: "Fullstack",
    tags: ["Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "p6",
    title: "Wanderlist Trips",
    description:
      "A mobile trip-planning app with collaborative itineraries and native map integration.",
    category: "Mobile",
    tags: ["React Native", "Expo"],
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=60",
    liveUrl: "#",
    repoUrl: "#",
  },
];

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  summary: string;
  skills: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "e1",
    role: "Frontend Developer Intern",
    org: "Just Internship",
    period: "2026 — Present",
    summary:
      "Built a 7-milestone production-ready web app covering configuration, layout, interactive UI, and deployment using React, TypeScript and Tailwind CSS.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    id: "e2",
    role: "Diploma in Computer Science & Technology",
    org: "APC Roy Polytechnic (WBSCTE)",
    period: "2024 — 2027",
    summary:
      "Coursework in data structures, C programming, and web fundamentals, with hands-on lab projects compiled into reusable modular codebases.",
    skills: ["C", "Data Structures", "Problem Solving"],
  },
  {
    id: "e3",
    role: "Independent Projects",
    org: "Self-directed",
    period: "Ongoing",
    summary:
      "Practiced component-driven UI design, form validation patterns, and responsive layout systems across small personal builds.",
    skills: ["Component Design", "Responsive UI", "Git"],
  },
];

export interface SkillTech {
  name: string;
  level: number; // 0-100
}

export const CORE_TECH_SKILLS: SkillTech[] = [
  { name: "React", level: 88 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "Git & GitHub", level: 82 },
  { name: "Responsive Design", level: 90 },
];
