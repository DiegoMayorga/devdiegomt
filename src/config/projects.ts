// Project covers (replace SVG placeholders with real screenshots when available)
import carwashCover from "../assets/projects-images/carwash.png";
import herinCover from "../assets/projects-images/herin.png";
import ifanidadoCover from "../assets/projects-images/ifanidado.png";
import mundoGatunoCover from "../assets/projects-images/mundo-gatuno.png";
import schoolCover from "../assets/projects-images/school.png";
import type { Lang } from "../i18n/config";

export type RepoLink = {
  label: string;
  url: string;
};

type Localized = Record<Lang, string>;

export type Project = {
  id: string;
  title: string;
  description: Localized;
  stack: string[];
  image: string;
  demoUrl: string;
  repoUrls: RepoLink[];
};

export const PROJECT_ITEMS: Project[] = [
  {
    id: "carwash",
    title: "Carwash SaaS",
    description: {
      en: "Multi-tenant management platform for car wash businesses: billing, service and customer modules on a custom REST API. Migrated the entire codebase (84 files) from JavaScript to TypeScript with strict feature parity.",
      es: "Plataforma multi-tenant de gestión para lavaderos: módulos de facturación, servicios y clientes sobre una API REST propia. Migré el codebase completo (84 archivos) de JavaScript a TypeScript con paridad funcional estricta.",
    },
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    image: carwashCover,
    demoUrl: "https://lavadero-front.vercel.app/",
    repoUrls: [
      { label: "Frontend", url: "https://github.com/devdiegomt/lavadero-front" },
      { label: "Backend", url: "https://github.com/devdiegomt/lavadero-back" },
    ],
  },
  {
    id: "herin",
    title: "Herin",
    description: {
      en: "Dynamic product catalog with a full-CRUD admin panel, per-product image galleries and row-level security: public reads for active products, authenticated writes.",
      es: "Catálogo de productos dinámico con panel de administración (CRUD completo), galería de imágenes por producto y seguridad a nivel de fila (RLS): lectura pública, escritura autenticada.",
    },
    stack: ["React 19", "Vite", "Tailwind CSS 4", "Supabase"],
    image: herinCover,
    demoUrl: "https://herinoficial.vercel.app/",
    repoUrls: [{ label: "Code", url: "https://github.com/devdiegomt/Herin" }],
  },
  {
    id: "ifanidado",
    title: "ifanidado.com",
    description: {
      en: "Multilingual (ES/EN) educational content site built with Content Collections, covering five technical verticals: React, CSS, Python, Arduino and AI. 13+ published articles.",
      es: "Sitio de contenido educativo multilingüe (ES/EN) construido con Content Collections, cubriendo cinco verticales técnicas: React, CSS, Python, Arduino e IA. 13+ artículos publicados.",
    },
    stack: ["Astro 5", "Tailwind CSS 4", "MDX"],
    image: ifanidadoCover,
    demoUrl: "https://ifanidado.vercel.app/",
    repoUrls: [],
  },
  {
    id: "mundo-gatuno",
    title: "Mundo Gatuno",
    description: {
      en: "E-commerce platform designed to simplify the purchase and delivery of cat products, with a tested component library.",
      es: "Plataforma de e-commerce diseñada para simplificar la compra y entrega de productos para gatos, con una librería de componentes probada.",
    },
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Vitest"],
    image: mundoGatunoCover,
    demoUrl: "https://mundogatuno.vercel.app/",
    repoUrls: [],
  },
  {
    id: "school",
    title: "School Platform",
    description: {
      en: "Subscription-based school platform (PWA) that centralizes and manages the needs of a school community.",
      es: "Plataforma escolar por suscripción (PWA) que centraliza y gestiona las necesidades de una comunidad educativa.",
    },
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: schoolCover,
    demoUrl: "https://schoolpt.vercel.app/",
    repoUrls: [],
  },
];
