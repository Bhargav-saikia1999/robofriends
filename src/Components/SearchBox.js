import React from "react";

const SearchBox = (props) => {
  return (
    <div className="tc ma3">
      <input
        className="search-box"
        type="search"
        placeholder="Search Robots"
        onChange={(e) => props.changeHandler(e)}
        value={props.value}
        autoFocus={true}
      />
    </div>
  );
};

export default SearchBox;
