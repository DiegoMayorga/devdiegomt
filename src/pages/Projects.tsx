import ProjectCard from "../components/organisms/ProjectCard";
import { PROJECT_ITEMS } from "../config/projects";

import classes from "../styles/pages/Projects.module.scss";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className={classes.title}>Projects</h1>
      <div className={classes.cards}>
        {PROJECT_ITEMS.map((project) => (
          <div key={project.id} className={classes[`projects ${project.id}`]}>
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
}