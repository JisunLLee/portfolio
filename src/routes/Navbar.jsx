import React, { useState } from "react";
import { Link } from "react-router-dom";

import style from "./Navbar.module.css";

function Navbar() {
  const [toggleBtn, setToggleBtn] = useState(false);
  const showToggleMenue = () => setToggleBtn(!toggleBtn);

  return (
    <nav className={style.navbar}>
      <ul className={style.navbar__logo}>
        <li className={style.navbar__logo__main}>
          <Link to="/">Home</Link>
        </li>
        <li className={style.navbar__logo__sub}>
          <Link to="/">Frontend Developer</Link>
        </li>
      </ul>
      <ul
        className={toggleBtn ? style.navbar__menu.active : style.navbar__menu}
      >
        <li>
          <Link to="/resume">이력서</Link>
        </li>
        <li>
          <Link to="/resume">개발공부</Link>
        </li>
        <li>
          <Link to="/silence">침묵의 냥이댕이</Link>
        </li>
        <li>
          <Link to="/silence/write">그림쟁이</Link>
        </li>
        <li>
          <Link to="/about">취미</Link>
        </li>
        <li>
          <Link to="/resume">게임</Link>
        </li>
      </ul>
      <div className={style.navbar__emptyspace}></div>

      <button className={style.navbar__toggleBtn}>
        {toggleBtn ? (
          <i className={style.showToggleMenue} onClick={showToggleMenue}></i>
        ) : (
          <i className={style.showToggleMenue} onClick={showToggleMenue}></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
