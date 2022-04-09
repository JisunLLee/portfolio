import React from 'react';
import style from './login.module.css';

const Login = ({ user, logIn, logOut, secession }) => {
  const onLogIn = (event) => {
    logIn(event.currentTarget.textContent);
  };
  const onLogOut = () => {
    logOut();
  };
  const onSecession = () => {
    secession();
  };
  return (
    <section className={style.loginform}>
      <header className={style.header}>{user ? 'Logout' : 'Login'}</header>
      {user ? (
        <section className={style.loginwrap}>
          <ul className={style.button_wrap}>
            <li className={style.btn_li}>
              <button className={style.btn} onClick={onLogOut}>
                로그아웃
              </button>
            </li>
            <li>
              <button className={style.btn} onClick={onSecession}>
                회원탈퇴
              </button>
            </li>
          </ul>
        </section>
      ) : (
        <section className={style.loginwrap}>
          <ul>
            <li>
              <button onClick={onLogIn}>Google</button>
            </li>
            <li>
              <button onClick={onLogIn}>Github</button>
            </li>
          </ul>
        </section>
      )}

      <footer className={style.footer}>Jisun Lucia Lee's space!</footer>
    </section>
  );
};

export default Login;
