import cvEn from "../assets/cv/DiegoMayorgaCV-EN.pdf";
import cvEs from "../assets/cv/DiegoMayorgaCV-ES.pdf";
import type { Lang } from "../i18n/config";

export const CV_FILES: Record<Lang, string> = {
  en: cvEn,
  es: cvEs,
};
