import "./App.css";
import HomePage from "./pages/index.jsx";
import { GlobalContext } from "./context/index.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/index.jsx";

const App = () => {
  const user = {
    name: "Alfimonth",
  };
  return (
    <>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
};

export default App;
