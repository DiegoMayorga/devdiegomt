import ProjectCard from "../components/organisms/ProjectCard";
import { PROJECT_ITEMS } from "../config/navigation";

export default function ProjectsPage() {
  return (
    <>
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
    </>
  );
}
