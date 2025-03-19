import classes from "./CV.module.scss";
import myCV from "../../assets/cv/DiegoMayorgaCV.pdf";
import cv from "../../assets/cv/cv.png";

export default function CV() {
  return (
    <section>
      <h1 className={classes.title}>Download CV</h1>
      <div className={classes.cv}>
        <a href={myCV} target="_blank" rel="noopener noreferrer">
          <img src={cv} alt="CV icon" />
        </a>
      </div>
    </section>
  );
}
