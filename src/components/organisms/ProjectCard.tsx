import React from "react";
import classes from "../../styles/organisms/ProjectCard.module.scss";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string;
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
      <h1>{title}</h1>
      <p>{description}</p>
      <p className={classes.tech}>{technologies}</p>
    </div>
  );
};

export default ProjectCard;
