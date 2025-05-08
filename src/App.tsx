import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import RootLayout from "./pages/root/Root";
import HomePage from "./pages/home/Home";
import CV from "./pages/cv/CV";
import ProjectsPage from "./pages/projects/Projects";
import ContactPage from "./pages/contact/Contact";
import ErrorPage from "./pages/error/Error";
import ProjectDetailPage from "./pages/projects/ProjectDetail";
import { FormspreeProvider } from "@formspree/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "cv", element: <CV /> },
      { path: "contact", element: <ContactPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "projects/:projectId", element: <ProjectDetailPage /> },
    ],
  },
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
