import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggleBtn, setToggleBtn] = useState(false);
  const showToggleMenue = () => setToggleBtn(!toggleBtn);

  return (
    <nav className="navbar">
      <ul className="navbar__logo">
        <li className="navbar__logo__main">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__logo__sub">
          <Link to="/">Frontend Developer</Link>
        </li>
      </ul>
      <ul className={toggleBtn ? "navbar__menu active" : "navbar__menu"}>
        <li>
          <Link to="/about">이력서</Link>
        </li>
        <li>
          <Link to="/about">개발공부</Link>
        </li>
        <li>
          <Link to="/about">침묵의 냥이댕이</Link>
        </li>
        <li>
          <Link to="/about">그림쟁이</Link>
        </li>
        <li>
          <Link to="/about">취미</Link>
        </li>
        <li>
          <Link to="/about2">게임</Link>
        </li>
      </ul>
      <div className="navbar__emptyspace"></div>

      <button className="navbar__toggleBtn">
        {toggleBtn ? (
          <i className="fas fa-times" onClick={showToggleMenue}></i>
        ) : (
          <i className="fas fa-bars" onClick={showToggleMenue}></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
