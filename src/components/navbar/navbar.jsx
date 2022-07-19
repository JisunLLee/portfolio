import React, { useState } from 'react';

import style from './navbar.module.css';
import Navbar_item from './navbar_item';
import Navbar_login from './navbar_login';
import { Link } from 'react-router-dom';
function Navbar({ user, openModal }) {
  const [toggleBtn, setToggleBtn] = useState(false);
  const showToggleMenue = () => setToggleBtn((prv) => !prv);

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
      <Navbar_item toggleBtn={toggleBtn}>
        <Navbar_login openModal={openModal} user={user} />
      </Navbar_item>

      <button className={style.navbar__toggleBtn} onClick={showToggleMenue}>
        <img className={toggleBtn ? style.show : style.hide} />
      </button>
    </nav>
  );
}

export default Navbar;
