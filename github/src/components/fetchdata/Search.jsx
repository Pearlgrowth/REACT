import React, { useState } from "react";

function Search({onSearch}) {
    const[searchfield, setsearchfield] = useState('')
    
  const handleChange = (e) => setsearchfield(e.target.value);
  function handleSearch() {
    onSearch(searchfield)

  }
  return (
    <div>
      <input
        type="text"
        value={searchfield}
        onChange={handleChange}
        id="input"
      />
      <button onClick={handleSearch} id="button">
        Search User
      </button>
    </div>
  );
}

export default Search;
