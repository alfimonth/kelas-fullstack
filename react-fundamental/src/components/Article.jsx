const Article = (props) => {
  return (
    <>
      <div>{props.name}</div>
      {props.titles?.map((title) => (
        <div>- {title}</div>
      ))}
    </>
  );
};

export default Article;
