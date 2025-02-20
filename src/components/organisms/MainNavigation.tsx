import { NavLink } from "react-router-dom";

import classes from "../../styles/organisms/MainNavigation.module.scss";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-me"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
