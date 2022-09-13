import React, { useEffect, useState } from 'react';
import style from './coding.module.css';

const CodingLoading = (props) => {
  const [show, setShow] = useState({
    0: 1,
    1: 'show',
    2: 'hide',
    3: 'hide',
    4: 'hide',
    5: 'hide',
    main: 0,
  });
  const main_imgs = ['IMG_0593.svg', 'IMG_0599.svg', 'IMG_0600.svg'];
  useEffect(() => {
    const setVisible = setTimeout(() => {
      const now = show[0];
      const next = now === 5 ? 1 : show[0] + 1;
      const change = { 0: next };
      change[now] = 'hide';
      change[next] = 'show';
      change.main = show.main === 2 ? 0 : show.main + 1;
      setShow((prv) => {
        return { ...prv, ...change };
      });
    }, 800);

    return () => clearTimeout(setVisible);
  }, [show]);
  return (
    <div className={style.container}>
      <div className={style.showbox}>
        <img
          className={`${style.sub} ${style.sub1} ${style[show[1]]}`}
          src="IMG_0597.svg"
        />
        <img
          className={`${style.sub} ${style.sub2} ${style[show[2]]}`}
          src="IMG_0598.svg"
        />
        <img
          className={`${style.sub} ${style.sub1} ${style[show[3]]}`}
          src="IMG_0594.svg"
        />
        <img
          className={`${style.sub} ${style.sub3} ${style[show[4]]}`}
          src="IMG_0596.svg"
        />
        <img
          className={`${style.sub} ${style.sub2} ${style[show[5]]}`}
          src="IMG_0595.svg"
        />
        <img className={style.main} src={main_imgs[show.main]} />
      </div>
    </div>
  );
};

export default CodingLoading;
