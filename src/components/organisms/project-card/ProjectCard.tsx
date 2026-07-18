import React from "react";
import classes from "./ProjectCard.module.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLang } from "../../../i18n/useLang";
import type { Project } from "../../../config/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const { image, title, description, stack, demoUrl, repoUrls } = project;

  return (
    <motion.article
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={classes.card}
    >
      <img
        src={image}
        alt={`${title} screenshot`}
        className={classes.cover}
        width={800}
        height={450}
        loading="lazy"
      />
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.description}>{description[lang]}</p>
      <ul className={classes.stack} aria-label={`${title} tech stack`}>
        {stack.map((tech) => (
          <li key={tech} className={classes.chip}>
            {tech}
          </li>
        ))}
      </ul>
      {(demoUrl || repoUrls.length > 0) && (
        <div className={classes.links}>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              {t("projects.liveDemo")}
            </a>
          )}
          {repoUrls.map(({ label, url }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${classes.link} ${classes["link--secondary"]}`}
            >
              {label} ↗
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
};

export default ProjectCard;
