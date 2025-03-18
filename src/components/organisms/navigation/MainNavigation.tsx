// Image
import profileImg from "../../../assets/images/profile.png";

// Components
import Social from "../../molecules/social/Social";
import NavItem from "../../molecules/navigation/NavItem";

// Styles
import classes from "./MainNavigation.module.scss";
import { motion } from "framer-motion";

// Data
import { SOCIAL_IMAGES } from "../../../config/social-images";
import { NAV_ITEMS } from "../../../config/navigation";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <img className={classes.profile} src={profileImg} alt="Profile image" />
      <div className={classes.box}>
        <h2>
          {[..."Diego Mayorga Torres"].map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.1,
                delay: index * 0.1,
              }}
              style={char === " " ? { display: "inline-block", width: "8px" } : {}}
            >
              {char}
            </motion.span>
          ))}
        </h2>
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
