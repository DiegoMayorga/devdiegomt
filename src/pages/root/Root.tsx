import { Outlet } from "react-router-dom";
import classes from "./Root.module.scss";
import MainNavigation from "../../components/organisms/navigation/MainNavigation";

export default function RootLayout() {
  return (
    <div className={classes.shell}>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
}
