import Profile from "../../components/organisms/profile/Profile";
import classes from "./Home.module.scss";

export default function HomePage() {
  return (
    <section>
      <h1 className={classes.title}>Home</h1>
      <div className={classes.profile}>
        <Profile />
      </div>
    </section>
  );
}
