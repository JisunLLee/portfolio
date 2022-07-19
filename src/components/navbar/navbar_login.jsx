import React from 'react';
import style from './navbar.module.css';
const Navbar_login = (user, openModal) => {
  return (
    <div className={style.navbar__login}>
      {!user ? (
        <button onClick={openModal}> 로그인 </button>
      ) : (
        <button onClick={openModal}> 로그아웃 </button>
      )}
    </div>
  );
};

export default Navbar_login;
