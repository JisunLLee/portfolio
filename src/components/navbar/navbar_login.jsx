import React from 'react';
import style from './navbar.module.css';
const Navbar_login = ({ user, openModal }) => {
  const onOpenModal = () => {
    openModal();
  };
  return (
    <div className={style.navbar__login}>
      {!user ? (
        <button onClick={onOpenModal}> 로그인 </button>
      ) : (
        <button onClick={onOpenModal}> 로그아웃 </button>
      )}
    </div>
  );
};

export default Navbar_login;
