import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import './styles/App.css'
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // ErrorPage
    children: [
      { index: true, element: <HomePage /> },
      { path: "about-me", element: <AboutMe /> },
      { path: "projects", element: <ProjectsPage/>},
      { path: "contact", element: <ContactPage />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
