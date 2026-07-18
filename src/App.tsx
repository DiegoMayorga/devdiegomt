import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import RootLayout from "./pages/root/Root";
import HomePage from "./pages/home/Home";
import CV from "./pages/cv/CV";
import ProjectsPage from "./pages/projects/Projects";
import ContactPage from "./pages/contact/Contact";
import ErrorPage from "./pages/error/Error";
import { FormspreeProvider } from "@formspree/react";
import { DEFAULT_LANG } from "./i18n/config";
import LangGuard from "./i18n/LangGuard";

const router = createBrowserRouter([
  {
    path: "/:lang",
    element: (
      <LangGuard>
        <RootLayout />
      </LangGuard>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "cv", element: <CV /> },
      { path: "contact", element: <ContactPage /> },
      { path: "projects", element: <ProjectsPage /> },
    ],
  },
  // Redirect the bare root and any unprefixed path to the default language
  { path: "/", element: <Navigate to={`/${DEFAULT_LANG}`} replace /> },
  { path: "*", element: <Navigate to={`/${DEFAULT_LANG}`} replace /> },
]);

export default function App() {
  return (
    <>
      <FormspreeProvider>
        <RouterProvider router={router} />
      </FormspreeProvider>
      <Analytics />
    </>
  );
}
