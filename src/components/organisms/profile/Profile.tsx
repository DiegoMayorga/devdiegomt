import { CERTIFICATIONS, EDUCATION, EXPERIENCE } from "../../../config/profile";
import classes from "./Profile.module.scss";
import umbLogo from "../../../assets/edu/umb.png";
import Experience from "../../molecules/experience/Experience";
import Education from "../../molecules/education/Education";
import Certifications from "../../molecules/certifications/Certifications";

export default function Profile() {
  return (
    <div className={classes.profile}>
      <h1>Professional Profile</h1>
      <p>Software engineer</p>
      <hr />
      <h3>Education</h3>
      <div className={classes.edu}>
        <img
          className={classes["umb-img"]}
          src={umbLogo}
          alt="Manuela Beltrán University"
        />
        <ul>
          {EDUCATION.map((edu) => (
            <Education key={edu.id} edu={edu} />
          ))}
        </ul>
      </div>
      <hr />
      <h3>Work experience</h3>
      <ul className={classes.experience}>
        {EXPERIENCE.map((exp) => (
          <Experience key={exp.id} exp={exp} />
        ))}
      </ul>
      <hr />
      <h3>Certifications</h3>
      <ul className={classes.certifications}>
        {CERTIFICATIONS.map((crt) => (
          <Certifications key={crt.id} crt={crt} />
        ))}
      </ul>
    </div>
  );
}
