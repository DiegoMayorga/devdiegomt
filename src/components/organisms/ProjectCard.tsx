import React from "react";
import classes from "../../styles/organisms/ProjectCard.module.scss";
/* import { Link } from "react-router-dom"; */

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: {
    id: string;
    name: string;
    logo: string;
    title: string;
  }[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  technologies,
  link,
}) => {
  return (
    <div className={classes.card}>
      <a href={link}>
        <img src={image} alt={title} />
      </a>
      <h1 className={classes["project-name"]}>{title}</h1>
      <p>
        {description} {/* <Link to={`/projects/${title}`}>Ver más</Link> */}
      </p>
      <ul className={classes.tech}>
        {technologies.map((tech) => (
          <li key={tech.id}>
            <img src={tech.logo} alt={tech.name} title={tech.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
