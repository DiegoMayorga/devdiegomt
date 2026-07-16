import classes from "./Experience.module.scss";

type ExperienceProps = {
  exp: {
    img: string;
    name: string;
    period: string;
    role: string;
    skills: string;
  };
};

const Experience: React.FC<ExperienceProps> = ({ exp }) => {
  return (
    <li className={classes.item}>
      <span className={classes.logoChip}>
        <img src={exp.img} alt={`${exp.name} logo`} loading="lazy" />
      </span>
      <div className={classes.content}>
        <h3 className={classes.role}>{exp.role}</h3>
        <p className={classes.meta}>
          {exp.name} · {exp.period}
        </p>
        <p className={classes.skills}>{exp.skills}</p>
      </div>
    </li>
  );
};

export default Experience;
