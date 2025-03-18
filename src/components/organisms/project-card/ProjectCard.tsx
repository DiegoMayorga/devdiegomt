import React from "react";
import classes from "./ProjectCard.module.scss";
import { motion } from "motion/react";

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
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className={classes.card}
    >
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
    </motion.div>
  );
};

export default ProjectCard;
