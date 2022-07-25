import React, { useRef, useState } from 'react';
import style from './tarot.module.css';

const Tarot = React.forwardRef((props, ref) => {
  const { scale, imgW, imgH } = props.imgSize;
  document.documentElement.style.setProperty('--scale', scale);
  document.documentElement.style.setProperty('--position_width', imgW + '%');
  document.documentElement.style.setProperty('--position_height', imgH + '%');
  return (
    <section ref={ref} className={`${style.container} tarot`}>
      <div className={style.background_wrap}>
        <div className={style.background}>
          {/* <canvas ref={canvas} className={style.background} /> */}
          <img src="IMG_0382.PNG" className={style.background} />
        </div>
      </div>
    </section>
  );
});

export default Tarot;
