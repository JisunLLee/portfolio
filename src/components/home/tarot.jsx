import React from 'react';
import { Link } from 'react-router-dom';
import style from './tarot.module.css';

const Tarot = React.forwardRef(({ imgSize, isHide }, ref) => {
  const { scale, imgW, imgH } = imgSize;
  const isHideMSG = isHide.msg;
  const isHideCover = isHide.cover;
  document.documentElement.style.setProperty('--scale', scale);
  document.documentElement.style.setProperty('--position_width', imgW + '%');
  document.documentElement.style.setProperty('--position_height', imgH + '%');
  return (
    <section ref={ref} className={`${style.container} tarot`}>
      <div className={style.background_wrap}>
        <div className={style.background}>
          <div className={style.contants_wrap}>
            <div className={style.nasarm_wrap}>
              <img className={style.nasarm_img} src="IMG_0178.PNG" />
              <div
                className={`${style.nasarm_img__cover_wrap} ${
                  style[isHideCover.visible]
                } ${style[isHideCover.effect]}`}
              >
                <Link to="tarot">
                  <img
                    className={`${style.nasarm_img__cover}   `}
                    src="IMG_0380.PNG"
                  />
                </Link>
              </div>
            </div>
            <div className={style.bubble_wrap}>
              <div
                className={`${style.bubble} ${style.bubble__1} ${
                  style[isHideMSG.visible]
                } ${style[isHideMSG.effect]} ${style.first}`}
              >
                후후후
              </div>
              <div
                className={`${style.bubble} ${style.bubble__2} ${
                  style[isHideMSG.visible]
                } ${style[isHideMSG.effect]} ${style.second}`}
              >
                오늘의 운세?
              </div>
              <div
                className={`${style.bubble} ${style.bubble__3} ${
                  style[isHideMSG.visible]
                } ${style[isHideMSG.effect]} ${style.third}`}
              >
                보여주지!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Tarot;
