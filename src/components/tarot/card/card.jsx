import React, { useEffect, useRef, useState } from 'react';
import { BombAni, SparkAni } from '../../../service/lottie_servise';
import style from './card.module.css';

const Tarot = ({ item, position, holdTime, message, data }) => {
  const [cardState, setCardState] = useState('back');
  const sparkRef = useRef();
  const tarot_base_url = process.env.REACT_APP_TAROTCARD_BASE_URL;
  const icon_url = `${tarot_base_url}/icon/${data.num}.png`;
  const icon_style = data.tarotTag
    ? data.tarotTag[0].forward === 1
      ? { backgroundImage: `url(${icon_url})` }
      : { backgroundImage: `url(${icon_url})`, transform: 'rotate(0.5turn)' }
    : { backgroundImage: `url(${icon_url})` };
  useEffect(async () => {
    switch (item) {
      case 'ALL':
      case position: {
        await setTimeout(() => onCardReverse(), holdTime);
        break;
      }
      default: {
        setCardState('front');
      }
    }
  }, [item]);

  const onCardReverse = async () => {
    const spark = SparkAni(sparkRef);
    spark.play();
    await setTimeout(() => {
      spark.destroy();
      BombAni(sparkRef);
    }, 1000);

    await setTimeout(() => {
      setCardState('reverse');
    }, 2000);
    await setTimeout(() => setCardState('front'), 4000);
  };
  return (
    <div
      className={
        style.cardState === 'reverse' ? style.flipContainer : style.container
      }
    >
      <div
        style={{
          position: 'absolute',
          zIndex: '5',
          width: '280px',
          height: '500px',
        }}
        ref={sparkRef}
      ></div>

      <div
        className={
          cardState === 'back'
            ? style.back
            : cardState === 'reverse'
            ? style.backReverse
            : style.backHide
        }
      ></div>
      <div
        className={
          cardState === 'front'
            ? style.front
            : cardState === 'reverse'
            ? style.frontReverse
            : style.frontHide
        }
      >
        <section
          className={
            cardState === 'front'
              ? style.front
              : cardState === 'reverse'
              ? style.frontReverse
              : style.frontHide
          }
        >
          <div className={style.icon} style={icon_style}></div>
          <h1 className={style.num}> {data.num} </h1>
          <div className={style.main}>
            <h1 className={style.title}>
              {message.split('<br/>').map((str) => (
                <p>{str}</p>
              ))}
            </h1>
            {position === 'MAIN' ? (
              <h2 className={style.description}>
                {data.description.split('.').map((str) => (
                  <p>{str}</p>
                ))}
              </h2>
            ) : (
              <h2 className={style.tag_wrap}>
                {data.tarotTag.map((v, i) => (
                  <p key={i} className={style.tag}>
                    #{v.tag}
                  </p>
                ))}
              </h2>
            )}
          </div>
          <h1 className={style.keyword}>{data.keyword.toUpperCase()}</h1>
        </section>
      </div>
    </div>
  );
};

export default Tarot;
