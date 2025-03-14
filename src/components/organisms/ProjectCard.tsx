import React from "react";
import classes from "../../styles/organisms/ProjectCard.module.scss";
import { Link } from "react-router-dom";

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
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  technologies,
}) => {
  return (
    <div className={classes.card}>
      <img src={image} alt={title} />
      <h1 className={classes["project-name"]}>{title}</h1>
      <p>
        {description} <Link to="/projects/:projectId">Ver más</Link>
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
