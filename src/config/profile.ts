import cintelLogo from "../assets/work/cintel.png";
import nttLogo from "../assets/work/ntt.png";
import glaLogo from "../assets/work/gla.png";

import aecLogo from "../assets/certificates/aec.png";
import microsoftLogo from "../assets/certificates/microsoft.png";
import scrumSLogo from "../assets/certificates/scrums.png";
import udemyLogo from "../assets/certificates/udemy.png";

import type { Lang } from "../i18n/config";

type Localized = Record<Lang, string>;

export type ExperienceItem = {
  id: string;
  img: string;
  name: string;
  period: Localized;
  role: Localized;
  skills: Localized;
};

export type EducationItem = {
  id: string;
  title: Localized;
  place: string;
  period: string;
};

export type CertificationItem = {
  id: string;
  img: string;
  name: Localized;
  place: string;
  year: string;
};

export const EDUCATION: EducationItem[] = [
  {
    id: "e1",
    title: {
      en: "Software Engineering",
      es: "Ingeniería de Software",
    },
    place: "Manuela Beltrán University",
    period: "2017 - 2024",
  },
  {
    id: "e2",
    title: {
      en: "Digital Marketing Diploma",
      es: "Diplomado en Marketing Digital",
    },
    place: "Manuela Beltrán University",
    period: "2024",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "x1",
    img: glaLogo,
    name: "Gimnasio Los Arrayanes Bilingüe",
    period: { en: "May 2023 - Present", es: "May. 2023 - Actualidad" },
    role: {
      en: "Bilingual IT Teacher (Programming & Robotics)",
      es: "Profesor de Informática Bilingüe (Programación y Robótica)",
    },
    skills: {
      en: "Python, Web Development, AI, Robotics",
      es: "Python, Desarrollo Web, IA, Robótica",
    },
  },
  {
    id: "x2",
    img: nttLogo,
    name: "NTT DATA",
    period: { en: "Aug 2022 - Feb 2023", es: "Ago. 2022 - Feb. 2023" },
    role: {
      en: "Web & Mobile Development Intern",
      es: "Practicante de Desarrollo Web y Móvil",
    },
    skills: {
      en: "React, Ionic, Atomic Design, BEM, Scrum",
      es: "React, Ionic, Atomic Design, BEM, Scrum",
    },
  },
  {
    id: "x3",
    img: cintelLogo,
    name: "CINTEL",
    period: { en: "Jul 2021 - Aug 2022", es: "Jul. 2021 - Ago. 2022" },
    role: {
      en: "Mobile Device Homologation Technician",
      es: "Técnico en Homologación de Equipos",
    },
    skills: {
      en: "Project Leadership, Technical Documentation",
      es: "Liderazgo de Proyecto, Documentación Técnica",
    },
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "c1",
    img: udemyLogo,
    name: { en: "React - Complete Guide", es: "React - Guía Completa" },
    place: "Udemy",
    year: "2025",
  },
  {
    id: "c2",
    img: scrumSLogo,
    name: { en: "SCRUM Fundamentals", es: "Fundamentos de SCRUM" },
    place: "SCRUMStudy",
    year: "2020",
  },
  {
    id: "c3",
    img: microsoftLogo,
    name: {
      en: "Microsoft Azure Fundamentals",
      es: "Fundamentos de Microsoft Azure",
    },
    place: "Microsoft",
    year: "2020",
  },
  {
    id: "c4",
    img: aecLogo,
    name: { en: "B2 English Certificate", es: "Certificado de Inglés B2" },
    place: "American English Company",
    year: "2017",
  },
];
