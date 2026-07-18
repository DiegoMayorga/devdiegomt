import { Link } from "react-router-dom";
import ProjectCard from "../../components/organisms/project-card/ProjectCard";
import Profile from "../../components/organisms/profile/Profile";
import { PROJECT_ITEMS } from "../../config/projects";
import { useTranslation } from "react-i18next";
import { useLang, localePath } from "../../i18n/useLang";
import classes from "./Home.module.scss";

const FEATURED_COUNT = 4;

export default function HomePage() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section className={classes.home}>
      <h1 className={classes.headline}>{t("home.headline")}</h1>
      <p className={classes.lede}>{t("home.lede")}</p>

      <div className={classes.sectionHead}>
        <h2>{t("home.featured")}</h2>
        <Link to={localePath("/projects", lang)} className={classes.viewAll}>
          {t("home.viewAll")}
        </Link>
      </div>
      <div className={classes.grid}>
        {PROJECT_ITEMS.slice(0, FEATURED_COUNT).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Profile />
    </section>
  );
}
