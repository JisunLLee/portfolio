import React, { useEffect, useRef, useState } from 'react';
import { BombAni, DiceAni } from '../../../service/lottie_servise';
import Cards from '../cards/cards';
import style from './board.module.css';
import Other from '../cards/other';

const Board = ({ item, data, user }) => {
  const [holdTime, setHoldTime] = useState({});
  const boardRef = useRef();
  useEffect(() => {
    function aniPlay() {
      const ani = DiceAni(boardRef);
      ani.play();
      setTimeout(() => {
        ani.destroy();
        BombAni(boardRef);
      }, 3200);
    }
    switch (item) {
      case 'COLOR': {
        setHoldTime({ card: false, main: 2500 });
        break;
      }
      case 'PHOTO': {
        setHoldTime({ card: false, main: 3000 });
        break;
      }
      case 'MAIN': {
        setHoldTime({ card: true, main: 5000, positive: 3000, negative: 3000 });
        break;
      }
      case 'POSITIVE': {
        setHoldTime({ card: true, main: 3000, positive: 5000, negative: 3000 });
        break;
      }
      case 'NEGATIVE': {
        setHoldTime({ card: true, main: 3000, positive: 3000, negative: 5000 });
        break;
      }
      case 'ALL':
      default: {
        setHoldTime({ card: true, main: 3000, positive: 5000, negative: 7000 });
      }
    }
    aniPlay();
  }, [item]);

  return (
    <div className={style.board}>
      <div className={style.dice_ani} ref={boardRef}></div>
      {holdTime.main && holdTime.card ? (
        <Cards item={item} data={data} holdTime={holdTime} />
      ) : (
        <Other item={item} data={data} holdTime={holdTime} user={user} />
      )}
    </div>
  );
};

export default Board;
