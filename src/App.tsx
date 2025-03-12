import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import "./styles/App.scss";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";
import ProjectDetailPage from "./pages/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about-me", element: <AboutMe /> },
      { path: "contact", element: <ContactPage /> },
      {
        path: "projects",
        element: <ProjectsPage />,
        children: [
          { path: "/projects/:projectId", element: <ProjectDetailPage /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
