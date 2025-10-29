import { useState } from "react";

const Search = ({ filterHandler }) => {
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
      {keyword && <small>0 result for keyword {keyword}</small>}
    </>
  );
};

export default Search;
