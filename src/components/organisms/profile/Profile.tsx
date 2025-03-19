import { EDUCATION, EXPERIENCE } from "../../../config/profile";
import classes from "./Profile.module.scss";
import umbLogo from "../../../assets/edu/umb.png";

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
            <li key={edu.id}>
              <h4>{edu.title}</h4>
              <p>{edu.place}</p>
              <p>{edu.period}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <h3>Work experience</h3>
      <ul className={classes.experience}>
        {EXPERIENCE.map((exp) => (
          <li className={classes["exp-li"]} key={exp.id}>
            <img
              className={classes["work-img"]}
              src={exp.img}
              alt={`${exp.name} logo`}
            />
            <div className={classes["work-content"]}>
              <h4>{exp.name}</h4>
              <p>{exp.period}</p>
              <p>{exp.role}</p>
              <p><strong>Skills:</strong> {exp.skills}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
