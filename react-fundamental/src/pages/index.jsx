import posts from "../posts.json";
import Article from "../components/Article";
import { useState } from "react";

const HomePage = () => {
  const [keyword, setKeyword] = useState();

  const filterHandler = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <div>
        Find Article: <input onChange={filterHandler} />
      </div>
      {keyword && <small>0 result for keyword {keyword}</small>}
      {posts.map((blog, index) => (
        <Article key={index} {...blog} />
      ))}
    </>
  );
};

export default HomePage;
