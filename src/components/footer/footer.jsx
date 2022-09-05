import React from 'react';

import style from './footer.module.css';

const Footer = () => {
  const onClick = (type) => {
    console.log('onClick', type);
    window.location.href = getSite(type);
  };

  const getSite = (type) => {
    switch (type) {
      case 'instagram':
        return 'https://www.instagram.com/na_sarm/';
      case 'email':
        return 'mailto:luciajisunlee@gmail.com';
      case 'resume':
        return '/resume';
    }
  };
  return (
    <section className={style.container}>
      <div className={style.button_wrap}>
        <button
          className={style.btn}
          onClick={() => onClick('instagram')}
          type="button"
        />
        <button className={style.btn} onClick={() => onClick('email')} />
        <button className={style.btn} onClick={() => onClick('resume')} />
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
