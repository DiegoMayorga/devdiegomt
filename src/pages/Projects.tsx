import ProjectCard from "../components/organisms/ProjectCard";
import { PROJECT_ITEMS } from "../config/projects";

import classes from "../styles/pages/Projects.module.scss";

export default function ProjectsPage() {
  return (
    <section>
      <h1 style={{justifySelf: "center"}}>Projects</h1>
      <div className={classes.cards}>
        {PROJECT_ITEMS.map((project) => (
          <p className={classes[`projects ${project.id}`]}>
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          </p>
        ))}
      </div>
    </section>
  );
}

/*
<h1>This is the project page.</h1>
  <ul>
    {PROJECT_ITEMS.map((item) => (
      <li key={item.id}>
        <ProjectCard
          title={item.title}
          description={item.description}
          technologies={item.technologies}
        />
      </li>
    ))}
  </ul>
*/
