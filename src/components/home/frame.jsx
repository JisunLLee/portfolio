import React from 'react';
import style from './frame.module.css';
const Frame = (props) => {
  return (
    <div className={style.frame_wrap}>
      <div className={style.frame}>
        <div className={style.browser}>
          <div className={style.browser_icon}></div>
          <div className={style.browser_icon}></div>
          <div className={style.browser_icon}></div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
