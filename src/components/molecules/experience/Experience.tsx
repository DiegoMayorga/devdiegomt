import classes from "./Experience.module.scss";
import { useLang } from "../../../i18n/useLang";
import type { ExperienceItem } from "../../../config/profile";

const Experience: React.FC<{ exp: ExperienceItem }> = ({ exp }) => {
  const lang = useLang();
  return (
    <li className={classes.item}>
      <span className={classes.logoChip}>
        <img src={exp.img} alt={`${exp.name} logo`} loading="lazy" />
      </span>
      <div className={classes.content}>
        <h3 className={classes.role}>{exp.role[lang]}</h3>
        <p className={classes.meta}>
          {exp.name} · {exp.period[lang]}
        </p>
        <p className={classes.skills}>{exp.skills[lang]}</p>
      </div>
    </li>
  );
};

export default Experience;
