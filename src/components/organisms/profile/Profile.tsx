import { CERTIFICATIONS, EDUCATION, EXPERIENCE } from "../../../config/profile";
import classes from "./Profile.module.scss";
import Experience from "../../molecules/experience/Experience";
import Education from "../../molecules/education/Education";
import Certifications from "../../molecules/certifications/Certifications";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t } = useTranslation();
  return (
    <section className={classes.profile}>
      <h2 className={classes.sectionTitle}>{t("profileSection.experience")}</h2>
      <ul className={classes.experience}>
        {EXPERIENCE.map((exp) => (
          <Experience key={exp.id} exp={exp} />
        ))}
      </ul>

      <div className={classes.columns}>
        <div>
          <h2 className={classes.sectionTitle}>
            {t("profileSection.education")}
          </h2>
          <ul className={classes.education}>
            {EDUCATION.map((edu) => (
              <Education key={edu.id} edu={edu} />
            ))}
          </ul>
        </div>
        <div>
          <h2 className={classes.sectionTitle}>
            {t("profileSection.certifications")}
          </h2>
          <ul className={classes.certifications}>
            {CERTIFICATIONS.map((crt) => (
              <Certifications key={crt.id} crt={crt} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
