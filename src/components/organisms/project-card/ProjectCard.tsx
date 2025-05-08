import React from "react";
import classes from "./ProjectCard.module.scss";
import { motion } from "framer-motion";
import redirectIcon from "../../../assets/icons/redirect.png";

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
      {link !== "" && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className={classes["card__link"]}
        >
          <img src={redirectIcon} alt="redirect icon" />
        </a>
      )}
      {link !== "" ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={title}
            className={classes["card__project-img"]}
          />
        </a>
      ) : (
        <img src={image} alt={title} className={classes["card__project-img"]} />
      )}
      <h1 className={classes["project-name"]}>{title}</h1>
      <p className={classes.description}>{description}</p>
      <ul className={classes.tech}>
        {technologies.map((tech) => (
          <li key={tech.id}>
            <img
              src={tech.logo}
              alt={tech.name}
              title={tech.title}
              role="img"
            />
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProjectCard;
