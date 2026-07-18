import classes from "./Education.module.scss";
import { useLang } from "../../../i18n/useLang";
import type { EducationItem } from "../../../config/profile";

const Education: React.FC<{ edu: EducationItem }> = ({ edu }) => {
  const lang = useLang();
  return (
    <li className={classes.item}>
      <h3 className={classes.title}>{edu.title[lang]}</h3>
      <p className={classes.meta}>
        {edu.place} · {edu.period}
      </p>
    </li>
  );
};

export default Education;
