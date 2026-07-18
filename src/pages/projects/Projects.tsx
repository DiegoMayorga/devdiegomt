import ProjectCard from "../../components/organisms/project-card/ProjectCard";
import { PROJECT_ITEMS } from "../../config/projects";
import { useTranslation } from "react-i18next";
import classes from "./Projects.module.scss";

export default function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <section style={{ width: "100%" }}>
      <h1 className={classes.title}>{t("projects.title")}</h1>
      <div className={classes.cards}>
        {PROJECT_ITEMS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
