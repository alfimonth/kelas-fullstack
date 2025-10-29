import posts from "../posts.json";
import Article from "../components/Article";

const HomePage = () => {
  return (
    <>
      <h1>Simple Blog</h1>
      <div>
        Cari Article: <input></input>
      </div>
      {posts.map((blog) => (
        <Article {...blog} />
      ))}
    </>
  );
};

export default HomePage;
