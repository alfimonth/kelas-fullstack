import { useState } from "react";

const Search = ({ filterHandler, totalPosts }) => {
  const [keyword, setKeyword] = useState();

  const onSearchChange = () => {
    filterHandler(keyword);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <>
      <div>
        Find Article:{" "}
        <input
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={onSearchChange}>Search</button>
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
