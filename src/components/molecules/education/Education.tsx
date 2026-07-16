import classes from "./Education.module.scss";

type EducationProps = {
  edu: {
    title: string;
    place: string;
    period: string;
  };
};

const Education: React.FC<EducationProps> = ({ edu }) => {
  return (
    <li className={classes.item}>
      <h3 className={classes.title}>{edu.title}</h3>
      <p className={classes.meta}>
        {edu.place} · {edu.period}
      </p>
    </li>
  );
};

export default Education;
