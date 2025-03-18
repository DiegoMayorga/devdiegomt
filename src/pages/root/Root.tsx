import { Outlet } from "react-router-dom";
import classes from "./Root.module.scss";
import MainNavigation from "../../components/organisms/navigation/MainNavigation";

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
