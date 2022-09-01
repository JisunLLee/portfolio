import React from 'react';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';
import { okAlert } from '../../common/alert';
const Navbar_item = ({ toggleBtn, children }) => {
  const onClick = () => {
    okAlert('준비 중입니다.');
  };

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
        <Link to="/study">개발공부</Link>
      </li>
      <li onClick={onClick}>침묵의 냥이댕이</li>
      {/* <li onClick={onClick}>그림쟁이</li>
      <li onClick={onClick}>취미</li> */}

      <li>
        <Link to="/tarot">타로점</Link>
      </li>

      {children}
    </ul>
  );
};

export default Navbar_item;
