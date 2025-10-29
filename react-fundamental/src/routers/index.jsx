import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages";
import About from "../pages/about";
import RootLayout from "../layouts/RootLayout";
import Blog from "../pages/blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
