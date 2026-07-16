import classes from "./CV.module.scss";
import myCV from "../../assets/cv/DiegoMayorgaCV.pdf";
import cvIcon from "../../assets/cv/cv.png";

const HIGHLIGHTS = [
  "4 end-to-end full-stack projects (React, TypeScript, Node.js, Supabase)",
  "Frontend experience on a banking product at NTT DATA",
  "B.S. in Software Engineering — Universidad Manuela Beltrán (2024)",
  "English B2 (certified) · Spanish native",
];

export default function CV() {
  return (
    <section className={classes.page}>
      <h1 className={classes.title}>Curriculum</h1>
      <div className={classes.grid}>
        <div className={classes.card}>
          <img className={classes.icon} src={cvIcon} alt="" aria-hidden="true" />
          <p className={classes.blurb}>
            One page, ATS-friendly, with direct links to live demos and
            repositories.
          </p>
          <div className={classes.actions}>
            <a href={myCV} download className={classes.primary}>
              Download PDF
            </a>
            <a
              href={myCV}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.secondary}
            >
              View in browser ↗
            </a>
          </div>
        </div>

        <div className={classes.card}>
          <h2 className={classes.subtitle}>At a glance</h2>
          <ul className={classes.highlights}>
            {HIGHLIGHTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
