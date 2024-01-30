import React from "react";
import "./Search.css";
const Search = () => {
  return (
    <nav className="nav__menu" id="nav-menu">
        <form className="example" onSubmit={''}>
          <input type="text" placeholder="Search..." name="search" />
          <button type="submit">
            <i className="fa fa-search search"></i>
          </button>
        </form>
    </nav>
  );
};

export default Search;
