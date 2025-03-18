import { NavLink } from "react-router-dom";
import classes from "../../organisms/navigation/MainNavigation.module.scss";
import React from "react";
import { motion } from "motion/react";

interface NavItemProps {
  to: string;
  end?: boolean;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, end, children }) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end={end}
      >
        {({ isActive }) => (
          <div className={classes.navItem}>
            {children}
            {isActive && (
              <motion.div
                layoutId="tab-indicator"
                className={classes["active-tab"]}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        )}
      </NavLink>
    </>
  );
};

export default NavItem;
