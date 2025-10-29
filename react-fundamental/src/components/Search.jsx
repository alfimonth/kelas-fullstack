import { useState } from "react";

const Search = ({ filterHandler, totalPosts }) => {
  const [keyword, setKeyword] = useState();

  const onSearchChange = (e) => {
    setKeyword(e.target.value);
    filterHandler(e.target.value);
  };

  return (
    <>
      <div>
        Find Article: <input onChange={onSearchChange} />
      </div>
      {keyword && (
        <small>
          {totalPosts} result for keyword {keyword}
        </small>
      )}
    </>
  );
};

export default Search;
