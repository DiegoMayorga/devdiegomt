import { useLocation, useNavigate } from "react-router-dom";
import { SUPPORTED_LANGS } from "../../../i18n/config";
import { useLang } from "../../../i18n/useLang";
import classes from "./LangToggle.module.scss";

/**
 * Switches language while staying on the same page: swaps only the
 * /:lang segment of the current path, preserving the rest.
 */
export default function LangToggle() {
  const current = useLang();
  const location = useLocation();
  const navigate = useNavigate();

  const switchTo = (lang: string) => {
    if (lang === current) return;
    const rest = location.pathname.replace(/^\/(en|es)/, "");
    navigate(`/${lang}${rest}`);
  };

  return (
    <div className={classes.toggle} role="group" aria-label="Language">
      {SUPPORTED_LANGS.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => switchTo(lang)}
          aria-pressed={lang === current}
          className={lang === current ? classes.active : undefined}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
