import { CERTIFICATIONS, EDUCATION, EXPERIENCE } from "../../../config/profile";
import classes from "./Profile.module.scss";
import Experience from "../../molecules/experience/Experience";
import Education from "../../molecules/education/Education";
import Certifications from "../../molecules/certifications/Certifications";

export default function Profile() {
  return (
    <section className={classes.profile}>
      <h2 className={classes.sectionTitle}>Experience</h2>
      <ul className={classes.experience}>
        {EXPERIENCE.map((exp) => (
          <Experience key={exp.id} exp={exp} />
        ))}
      </ul>

      <div className={classes.columns}>
        <div>
          <h2 className={classes.sectionTitle}>Education</h2>
          <ul className={classes.education}>
            {EDUCATION.map((edu) => (
              <Education key={edu.id} edu={edu} />
            ))}
          </ul>
        </div>
        <div>
          <h2 className={classes.sectionTitle}>Certifications</h2>
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
