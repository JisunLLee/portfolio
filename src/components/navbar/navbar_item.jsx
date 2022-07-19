import React from 'react';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';
const Navbar_item = ({ toggleBtn, children }) => {
  return (
    <ul
      className={
        toggleBtn
          ? `${style.navbar__menu} ${style.show}`
          : `${style.navbar__menu} ${style.hide}`
      }
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
        <Link to="/home">그림쟁이</Link>
      </li>
      <li>
        <Link to="/about">취미</Link>
      </li>
      <li>
        <Link to="/tarot">타로 점</Link>
      </li>
      {children}
    </ul>
  );
};

export default Navbar_item;
