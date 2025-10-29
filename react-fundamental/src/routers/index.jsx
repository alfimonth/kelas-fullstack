import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages";
import About from "../pages/about";
import RootLayout from "../layouts/RootLayout";
import Blog from "../pages/blogs";
import SinglePost from "../pages/blogs/_id";

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
        path: "/blog/:id",
        element: <SinglePost />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
