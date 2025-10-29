import postsData from "../posts.json";
import Article from "../components/Article";
import { useEffect, useState } from "react";
import Search from "../components/Search";

const HomePage = () => {
  const [posts, setPosts] = useState(postsData);
  const [externalPosts, setExternalPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setExternalPosts(json));
  }, []);

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
      <hr />
      {externalPosts.map((item, index) => (
        <div key={index}>- {item.title}</div>
      ))}
    </>
  );
};

export default HomePage;
