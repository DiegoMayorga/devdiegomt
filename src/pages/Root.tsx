import { Outlet } from "react-router-dom";
import MainNavigation from "../components/organisms/MainNavigation";

import classes from "../styles/pages/Root.module.scss";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.root}>
        <Outlet />
      </main>
    </>
  );
}
