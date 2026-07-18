import { NavLink } from "react-router-dom";
import classes from "../../organisms/navigation/MainNavigation.module.scss";
import React from "react";
import { motion } from "framer-motion";
import { useLang, localePath } from "../../../i18n/useLang";

interface NavItemProps {
  to: string;
  end?: boolean;
  children: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, end, children }) => {
  const lang = useLang();
  return (
    <NavLink
      to={localePath(to, lang)}
      className={({ isActive }) => (isActive ? classes.active : undefined)}
      end={end}
    >
      {({ isActive }) => (
        <div className={classes.navItem}>
          {children}
          {isActive && (
            <motion.div
              data-testid="tab-indicator"
              layoutId="tab-indicator"
              className={classes["active-tab"]}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      )}
    </NavLink>
  );
};

export default NavItem;
