import React from "react";

const SearchBox = ({ onFilter }) => {
  function handleCats(event) {
    const searchtext = event.target.value;
    onFilter(searchtext);
  }
  return (
    <div>
      <input className="my-input" onChange={handleCats} />
    </div>
  );
};

export default SearchBox;
