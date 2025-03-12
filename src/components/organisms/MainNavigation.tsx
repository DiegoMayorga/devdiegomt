// Image
import profileImg from "../../assets/images/profile.png";

// Components
import Social from "../molecules/Social";
import NavItem from "../molecules/NavItem";

// Styles
import classes from "../../styles/organisms/MainNavigation.module.scss";

// Data
import { SOCIAL_IMAGES } from "../../config/social-images";
import { NAV_ITEMS } from "../../config/navigation";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <img src={profileImg} alt="Profile image" />
      <div className={classes.box}>
        <h1>Diego Mayorga Torres</h1>
        <p>@devdiegomt</p>
        <div className={classes.social}>
          {SOCIAL_IMAGES.map((social) => (
            <Social
              key={social.id}
              social={social}
              className={classes.iconBckg}
            />
          ))}
        </div>
        <nav>
          <ul className={classes.list}>
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavItem to={item.to} end={item.end}>
                {item.text}
              </NavItem>
            </li>
          ))}
        </ul>
        </nav>
      </div>
    </header>
  );
}
