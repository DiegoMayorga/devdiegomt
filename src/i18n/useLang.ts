import { useParams } from "react-router-dom";
import { DEFAULT_LANG, isLang, type Lang } from "./config";

/** Current language from the URL (/:lang), falling back to the default. */
export function useLang(): Lang {
  const { lang } = useParams();
  return isLang(lang) ? lang : DEFAULT_LANG;
}

/** Prefixes a path with the active language, e.g. localePath("/cv", "es") -> "/es/cv". */
export function localePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${clean === "/" ? "" : clean}`;
}
