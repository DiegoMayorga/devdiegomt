import ProjectCard from "../../components/organisms/project-card/ProjectCard";
import { PROJECT_ITEMS } from "../../config/projects";

import classes from "./Projects.module.scss";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className={classes.title}>Projects</h1>
      <div className={classes.cards}>
        {PROJECT_ITEMS.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            stack={project.stack}
            demoUrl={project.demoUrl}
            repoUrls={project.repoUrls}
          />
        ))}
      </div>
    </section>
  );
}
