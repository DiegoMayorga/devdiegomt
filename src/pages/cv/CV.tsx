import classes from "./CV.module.scss";
import cvIcon from "../../assets/cv/cv.png";
import { CV_FILES } from "../../config/cv-files";
import { useTranslation } from "react-i18next";
import { useLang } from "../../i18n/useLang";

export default function CV() {
  const { t } = useTranslation();
  const lang = useLang();
  const cvFile = CV_FILES[lang];
  const highlights = t("cv.highlights", { returnObjects: true }) as string[];

  return (
    <section className={classes.page}>
      <h1 className={classes.title}>{t("cv.title")}</h1>
      <div className={classes.grid}>
        <div className={classes.card}>
          <img className={classes.icon} src={cvIcon} alt="" aria-hidden="true" />
          <p className={classes.blurb}>{t("cv.blurb")}</p>
          <div className={classes.actions}>
            <a href={cvFile} download className={classes.primary}>
              {t("cv.downloadPdf")}
            </a>
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.secondary}
            >
              {t("cv.viewBrowser")}
            </a>
          </div>
        </div>

        <div className={classes.card}>
          <h2 className={classes.subtitle}>{t("cv.atAGlance")}</h2>
          <ul className={classes.highlights}>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
