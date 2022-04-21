import React, { useEffect, useState } from 'react';
import style from './introduce.module.css';
const Introduce = React.forwardRef((props, ref) => {
  const { type, isHide, msg } = props;
  console.log('[', type, '] isHide', isHide);
  return (
    <section ref={ref} className={`${style.container} ${type}`}>
      <div
        className={`${style.bubble} ${style.bubble__left_bottom} ${
          isHide ? style.hide : style.show
        } ${style.first}`}
      >
        {msg.first.split('<br/>').map((v, i) => (
          <p className={style.text} key={i}>
            {v}
          </p>
        ))}
      </div>
      <div className={style.nasarm_wrap}>
        <img className={style.nasarm_img} src="IMG_0178.PNG" />
        <img
          className={`${style.nasarm_img__cover} ${
            isHide ? style.hide : style.show
          }`}
          src="IMG_0378.PNG"
        />
      </div>
      <div
        className={`${style.bubble} ${style.bubble__left_top} ${
          isHide ? style.hide : style.show
        } ${style.second}`}
      >
        {msg.second}
      </div>
      <div
        className={`${style.bubble} ${style.bubble__right_top} ${
          isHide ? style.hide : style.show
        } ${style.third}`}
      >
        {msg.third.split('<br/>').map((v, i) => (
          <p className={style.text} key={i}>
            {v}
          </p>
        ))}
      </div>
    </section>
  );
});
export default Introduce;
