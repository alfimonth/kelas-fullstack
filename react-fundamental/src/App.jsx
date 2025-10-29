import "./App.css";
import HomePage from "./pages/index.jsx";
import { GlobalContext } from "./context/index.js";

const App = () => {
  const user = {
    name: "Alfimonth",
  };
  return (
    <>
      <GlobalContext.Provider value={user}>
        <HomePage />
      </GlobalContext.Provider>
    </>
  );
};

export default App;
