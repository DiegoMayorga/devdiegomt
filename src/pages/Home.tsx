import profileImg from "../assets/images/profile.png";
import classes from "../styles/pages/Home.module.scss";

export default function HomePage() {
  return (
    <div className={classes.home}>
      <img src={profileImg} alt="Profile image" />
      <div className={classes.box}>
        <h1>Diego Mayorga Torres</h1>
        <p>@devdiegomt</p>
      </div>
    </div>
  );
}
