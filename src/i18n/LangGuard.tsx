import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DEFAULT_LANG, isLang } from "./config";

/**
 * Validates the :lang URL segment, keeps i18next and <html lang> in sync.
 * An unknown segment (e.g. /fr) redirects to the default language.
 */
export default function LangGuard({ children }: { children: React.ReactNode }) {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const valid = isLang(lang);

  useEffect(() => {
    if (valid && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    if (valid) {
      document.documentElement.lang = lang;
    }
  }, [lang, valid, i18n]);

  if (!valid) {
    return <Navigate to={`/${DEFAULT_LANG}`} replace />;
  }
  return <>{children}</>;
}
