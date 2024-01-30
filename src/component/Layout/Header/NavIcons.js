import React, { useState } from "react";
import "./NavIcons.css";

const NavtIcons = (props) => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div className="nav_icons">
      <i className="fas fa-cart-plus" id="cart_btn"></i>
      <button id="accountBtn" onClick={toggleLoginForm}>
        <i className="fas fa-user"> </i>
      </button>
      {isLoginFormVisible && (
        <div id="loginForm">
          <button>Login</button>
          <button>Register</button>
        </div>
      )}
      <button
        className={`nav__toggle ${isNavVisible ? "show-menu" : ""}`}
        id="nav-toggle"
        onClick={toggleNav}
      >
        <i className="fas fa-bars menu" />
      </button>
    </div>
  );
};

export default NavtIcons;
