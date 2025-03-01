import { NavItem } from "../molecules/NavItem";
import classes from "../../styles/organisms/MainNavigation.module.scss";
import { NAV_ITEMS } from "../../config/navigation";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
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
    </header>
  );
}
