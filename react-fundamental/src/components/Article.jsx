const Article = ({ title, date, tags, isNew }) => {
  return (
    <>
      <h3>{title}</h3>
      <small>
        {date}, tags: {tags.join(",")}, {isNew && <ArticleStatus />}
      </small>
    </>
  );
};

const ArticleStatus = ({ isNew }) => {
  return <span> -- New</span>;
};
export default Article;
