import React from 'react';

import style from './footer.module.css';

const Footer = () => {
  return (
    <section className={style.container}>
      <div className={style.button_wrap}>
        <button>instagram</button>
        <button>email</button>
        <button>resume</button>
      </div>
      <div className="style.msg_wrap">
        <div>안녕하세요</div>
        <div>안녕하세요</div>
        <div>안녕하세요</div>
      </div>
    </section>
  );
};

export default Footer;
