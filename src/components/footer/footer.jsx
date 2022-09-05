import React from 'react';

import style from './footer.module.css';

const Footer = () => {
  return (
    <section className={style.container}>
      <div className={style.button_wrap}>
        <button className={style.btn} />
        <button className={style.btn} />
        <button className={style.btn} />
      </div>
      <div className={style.msg_wrap}>
        <div>이지선의 포트폴리오 페이지 입니다</div>
        <div>만나서 반가워요!</div>
        <div></div>
      </div>
    </section>
  );
};

export default Footer;
