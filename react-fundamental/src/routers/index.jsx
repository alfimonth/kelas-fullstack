import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages";
import About from "../pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
