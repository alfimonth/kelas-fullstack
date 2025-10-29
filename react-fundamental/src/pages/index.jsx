import postsData from "../posts.json";
import Article from "../components/Article";
import { useState } from "react";
import Search from "../components/Search";

const HomePage = () => {
  const [posts, setPosts] = useState(postsData);
  const filterHandler = (keyword) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setPosts(filteredPosts);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <Search filterHandler={filterHandler} totalPosts={posts.length} />
      {posts.map((blog, index) => (
        <Article key={index} {...blog} />
      ))}
    </>
  );
};

export default HomePage;
