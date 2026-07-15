// Project covers (replace SVG placeholders with real screenshots when available)
import carwashCover from "../assets/projects-images/carwash.svg";
import mambaCover from "../assets/projects-images/mamba.svg";
import herinCover from "../assets/projects-images/herin.svg";
import ifanidadoCover from "../assets/projects-images/ifanidado.svg";
import mundoGatunoCover from "../assets/projects-images/mundo-gatuno.svg";
import schoolCover from "../assets/projects-images/school.svg";

export type RepoLink = {
  label: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  /** Live site URL. Leave empty to hide the Demo button. */
  demoUrl: string;
  /** Public repositories. Leave empty when the codebase is private. */
  repoUrls: RepoLink[];
};

export const PROJECT_ITEMS: Project[] = [
  {
    id: "herin",
    title: "Herin",
    description:
      "Dynamic product catalog with a full-CRUD admin panel, per-product image galleries and row-level security: public reads for active products, authenticated writes.",
    stack: ["React 19", "Vite", "Tailwind CSS 4", "Supabase"],
    image: herinCover,
    demoUrl: "https://herinoficial.vercel.app/",
    repoUrls: [{ label: "Code", url: "https://github.com/devdiegomt/Herin" }],
  },
  {
    id: "ifanidado",
    title: "ifanidado.com",
    description:
      "Multilingual (ES/EN) educational content site built with Content Collections, covering five technical verticals: React, CSS, Python, Arduino and AI. 13+ published articles.",
    stack: ["Astro 5", "Tailwind CSS 4", "MDX"],
    image: ifanidadoCover,
    demoUrl: "https://ifanidado.vercel.app/",
    repoUrls: [],
  },
  {
    id: "carwash",
    title: "Carwash SaaS",
    description:
      "Multi-tenant management platform for car wash businesses: billing, service and customer modules on a custom REST API. Migrated the entire codebase (84 files) from JavaScript to TypeScript with strict feature parity.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    image: carwashCover,
    demoUrl: "", // Not deployed yet
    repoUrls: [
      {
        label: "Frontend",
        url: "https://github.com/devdiegomt/lavadero-front",
      },
      { label: "Backend", url: "https://github.com/devdiegomt/lavadero-back" },
    ],
  },
  {
    id: "mamba",
    title: "Mamba",
    description:
      "AI-powered personal coaching and habit-tracking PWA: OTP authentication, web push notifications (VAPID + cron jobs) and LLM-generated coaching messages on top of a 16-table database schema. Private codebase.",
    stack: ["Next.js", "TypeScript", "Supabase", "Groq / Llama"],
    image: mambaCover,
    demoUrl: "",
    repoUrls: [],
  },
  {
    id: "mundo-gatuno",
    title: "Mundo Gatuno",
    description:
      "E-commerce platform designed to simplify the purchase and delivery of cat products, with a tested component library.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Vitest"],
    image: mundoGatunoCover,
    demoUrl: "https://mundogatuno.vercel.app/",
    repoUrls: [],
  },
  {
    id: "school",
    title: "School Platform",
    description:
      "Subscription-based school platform (PWA) that centralizes and manages the needs of a school community.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: schoolCover,
    demoUrl: "https://schoolpt.vercel.app/",
    repoUrls: [],
  },
];
