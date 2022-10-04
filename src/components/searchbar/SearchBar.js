import React from "react";

const SearchBar = ({...props}) => {
  return (
    <div className="searchbar">
    

<form action="">

  <input  {...props} type="search"  required />
  <i className="fa fa-search"></i>
</form>
    </div>
  );
};

export default SearchBar;
