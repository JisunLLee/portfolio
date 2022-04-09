import React from 'react';
import style from './cards.module.css';
import Tarot from '../card/card';

const Cards = ({ item, data, holdTime }) => {
  return (
    <section className={style.tarots}>
      {holdTime.main && (
        <Tarot
          key="positive"
          holdTime={holdTime.positive}
          item={item}
          position="POSITIVE"
          data={data.positive}
          message="오늘의<br/>긍정키워드"
        />
      )}
      {holdTime.main && (
        <Tarot
          key="main"
          holdTime={holdTime.main}
          item={item}
          position="MAIN"
          data={data.main}
          message="오늘의<br/>타로카드"
        />
      )}
      {holdTime.main && (
        <Tarot
          key="negative"
          holdTime={holdTime.negative}
          item={item}
          position="NEGATIVE"
          data={data.negative}
          message="오늘의<br/>주의할 점"
        />
      )}
    </section>
  );
};

export default Cards;
