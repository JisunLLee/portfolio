import React, { useEffect, useState } from 'react';
import style from './home.module.css';

const HomeLoading = () => {
  const [ani1, setAni1] = useState(1);
  const [ani2, setAni2] = useState(2);
  const [ani3, setAni3] = useState(3);
  const [ani4, setAni4] = useState(4);
  const [isShow, setIsShow] = useState(true);
  const circle = (prv) => (prv === 4 ? 1 : prv + 1);

  useEffect(() => {
    setIsShow(true);
    const setCircle = setTimeout(() => {
      setAni1((prv) => circle(prv));
      setAni2((prv) => circle(prv));
      setAni3((prv) => circle(prv));
      setAni4((prv) => circle(prv));
    }, 2000);

    const setMainShow = setTimeout(() => {
      setIsShow(false);
    }, 1500);

    return () => clearTimeout(setCircle, setMainShow);
  }, [ani1]);

  return (
    <div className={style.container}>
      <div className={style.showbox}>
        <div className={style.innerbox}>
          <div className={isShow ? style.show : style.hide} />
          <div className={`${style['circle' + ani1]} ${style.study}`} />
          <div className={`${style['circle' + ani2]} ${style.drawing}`} />
          <div className={`${style['circle' + ani3]} ${style.climbing}`} />
          <div className={`${style['circle' + ani4]} ${style.coding}`} />
        </div>
      </div>
    </div>
  );
};

export default HomeLoading;
