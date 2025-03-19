import classes from "./Experience.module.scss";

type ExperienceProps = {
    exp: {
        img: string;
        name: string;
        period: string;
        role: string;
        skills: string;
    }
};

const Experience: React.FC<ExperienceProps> = ({ exp }) => {
  return (
    <li className={classes["exp-li"]}>
      <img
        className={classes["work-img"]}
        src={exp.img}
        alt={`${exp.name} logo`}
      />
      <div className={classes["work-content"]}>
        <h4>{exp.name}</h4>
        <p>{exp.period}</p>
        <p>{exp.role}</p>
        <p>
          <strong>Skills:</strong> {exp.skills}
        </p>
      </div>
    </li>
  );
}

export default Experience;