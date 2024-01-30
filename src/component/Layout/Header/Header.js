import React from "react";
import logo from "./logo.png";
import classes from "./Header.module.css";
import Search from "./Search";
import NavtIcons from "./NavIcons";

const Header = () => {
  return (
    <header>
      <div className={classes.header}>
        <a href="/index.html"  className={classes.logo}>
          <img src={logo} alt="logo"  />
        </a>
      <Search/>
      <NavtIcons/>
      </div>
    </header>
  );
};

export default Header;
