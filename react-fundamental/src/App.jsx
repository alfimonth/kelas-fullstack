import "./App.css";
import Article from "./components/Article.jsx";

const App = () => {
  return (
    <>
      <Article name="Alfi" titles={["NextJs", "ReactJS", "NodeJS"]} />
      <hr />
      <Article name="Hasan" titles={["NuxtJs", "VueJS", "Nginx"]} />
    </>
  );
};

export default App;
