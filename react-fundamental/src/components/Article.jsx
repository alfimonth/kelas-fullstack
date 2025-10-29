const Article = ({ title, date, tags }) => {
  return (
    <>
      <h3>{title}</h3>
      <small>
        {date}, tags: {tags.join(",")}
      </small>
    </>
  );
};

export default Article;
