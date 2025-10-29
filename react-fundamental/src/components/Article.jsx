const Article = () => {
  const name = "Alfimonth";
  const titleS = ["Tutorial ReactJS", "Tutorial NextJS", "Tutorial NodeJS"];

  return (
    <>
      <div>
        {titleS.map((title) => (
          <div>{title}</div>
        ))}
      </div>
    </>
  );
};

export default Article;
