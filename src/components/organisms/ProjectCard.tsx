import React from "react";
import classes from "../../styles/organisms/ProjectCard.module.scss";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
}) => {
  return (
    <section className={classes.section}>
      <div className={classes.card}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{technologies}</p>
      </div>
    </section>
  );
};

export default ProjectCard;
