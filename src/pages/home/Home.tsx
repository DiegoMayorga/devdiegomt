import { Link } from "react-router-dom";
import ProjectCard from "../../components/organisms/project-card/ProjectCard";
import Profile from "../../components/organisms/profile/Profile";
import { PROJECT_ITEMS } from "../../config/projects";
import classes from "./Home.module.scss";

const FEATURED_COUNT = 4;

export default function HomePage() {
  return (
    <section className={classes.home}>
      <h1 className={classes.headline}>
        I build full-stack products with React &amp; TypeScript
      </h1>
      <p className={classes.lede}>
        Software engineer from Colombia. From multi-tenant SaaS platforms to
        AI-powered PWAs — designed, built and shipped end-to-end.
      </p>

      <div className={classes.sectionHead}>
        <h2>Featured projects</h2>
        <Link to="/projects" className={classes.viewAll}>
          View all →
        </Link>
      </div>
      <div className={classes.grid}>
        {PROJECT_ITEMS.slice(0, FEATURED_COUNT).map((project) => (
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

      <Profile />
    </section>
  );
}
