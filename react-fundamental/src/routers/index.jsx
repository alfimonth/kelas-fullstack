import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages";
import About from "../pages/about";
import RootLayout from "../layouts/RootLayout";
import Blog from "../pages/blogs";
import SinglePost from "../pages/blogs/_id";
import { postById, posts } from "../apis/loader";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: posts,
      },
      {
        path: "/blog/:id",
        element: <SinglePost />,
        loader: postById,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
