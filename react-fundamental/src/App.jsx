import "./App.css";
import HomePage from "./pages/index.jsx";

const App = () => {
  const value = true;
  return (
    <>
      <HomePage />
      {value ? "bner" : "salah"}
    </>
  );
};

export default App;
