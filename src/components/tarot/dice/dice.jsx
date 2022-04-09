import React from 'react';
import style from './dice.module.css';
const Dice = ({ onRollDice }) => {
  return (
    <section className={style.container}>
      <div className={style.random_wrap}>
        <h2 className={style.h1}>전체 돌리기 </h2>
        <p className={style.dice_btn} onClick={() => onRollDice('ALL')}>
          🎲
        </p>
      </div>
      <div className={style.random_wrap}>
        <h1 className={style.h2}>메인 키워드</h1>
        <p className={style.dice_btn} onClick={() => onRollDice('MAIN')}>
          🎲
        </p>
      </div>
      <div className={style.random_wrap}>
        <h1 className={style.h2}>긍정 키워드</h1>
        <p className={style.dice_btn} onClick={() => onRollDice('POSITIVE')}>
          🎲
        </p>
      </div>
      <div className={style.random_wrap}>
        <h1 className={style.h2}>부정 키워드</h1>
        <p className={style.dice_btn} onClick={() => onRollDice('NEGATIVE')}>
          🎲
        </p>
      </div>
    </section>
  );
};
export default Dice;
