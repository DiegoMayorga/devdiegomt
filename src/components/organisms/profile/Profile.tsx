import classes from "./Profile.module.scss";

export default function Profile() {
  return (
    <div className={classes.profile}>
      <h1>My profile</h1>
      <p>Profile description</p>
    </div>
  );
}
