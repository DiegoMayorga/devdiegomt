import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/root/Root";
import HomePage from "./pages/home/Home";
import AboutMe from "./pages/about/AboutMe";
import ProjectsPage from "./pages/projects/Projects";
import ContactPage from "./pages/contact/Contact";
import ErrorPage from "./pages/error/Error";
import ProjectDetailPage from "./pages/projects/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about-me", element: <AboutMe /> },
      { path: "contact", element: <ContactPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "projects/:projectId", element: <ProjectDetailPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
