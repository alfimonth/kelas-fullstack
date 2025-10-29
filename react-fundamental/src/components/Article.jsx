import { useContext } from "react";
import { GlobalContext } from "../context";

const Article = ({ title, date, tags, isNew }) => {
  const user = useContext(GlobalContext)
  return (
    <>
      <h3>{title}</h3>
      <small>
        {date}, tags: {tags.join(",")}, {isNew && <ArticleStatus />}
      </small>
      <div>
        <small>Witten by {user.name}</small>
      </div>
    </>
  );
};

const ArticleStatus = ({ isNew }) => {
  return <span> -- New</span>;
};
export default Article;
