import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending && "pending"
        }
      >
        Home
      </NavLink>{" "}
      | <NavLink to="/blog">Blog</NavLink> |{" "}
      <NavLink to="/about">About</NavLink>
      <p />
      <Outlet />
    </>
  );
};

export default RootLayout;
