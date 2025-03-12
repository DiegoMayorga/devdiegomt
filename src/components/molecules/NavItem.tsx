import { NavLink } from "react-router-dom";
import classes from "../../styles/organisms/MainNavigation.module.scss";
import React from "react";

interface NavItemProps {
  to: string;
  end?: boolean;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, end, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? classes.active : undefined)}
      end={end}
    >
      {children}
    </NavLink>
  );
};

export default NavItem;