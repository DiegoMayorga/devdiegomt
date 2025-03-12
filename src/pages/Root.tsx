import { Outlet } from "react-router-dom";
import MainNavigation from "../components/organisms/MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
