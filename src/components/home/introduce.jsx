import React from 'react';
import { okAlert } from '../../common/alert';
import style from './introduce.module.css';
import { Link } from 'react-router-dom';
const Introduce = React.forwardRef((props, ref) => {
  const { type, isHide, msg, img, page } = props;

  const onClick = () => {
    page === '/' && okAlert('만나서 반가와요!');
  };
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
      <div className={style.nasarm_wrap} onClick={onClick}>
        <img className={style.nasarm_img} src="IMG_0178.PNG" />
        <div
          className={`${style.nasarm_img__cover} ${
            isHide ? style.hide : style.show
          }`}
        >
          <Link to={page}>
            <img src={img} onClick={onClick} />
          </Link>
        </div>
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
