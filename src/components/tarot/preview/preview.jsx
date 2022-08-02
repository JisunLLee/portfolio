import React from 'react';
import style from './preview.module.css';
const Preview = ({ user, tarot, onRollDice, children, isDice }) => {
  const { photo, negative, positive, main, backgroundColor, borderColor } =
    tarot;
  document.documentElement.style.setProperty('--main-color', backgroundColor);
  document.documentElement.style.setProperty('--border-color', borderColor);

  return (
    <div>
      <div className={style.container}>
        <section className={style.card}>
          <h1 className={style.h1}>
            {user === 'TESTER' ? '체험 중' : user.username}
          </h1>
          <div className={style.img_wrap}>
            <p></p>
            <img
              className={style.img}
              src={`https://silencecatdog.s3.ap-northeast-2.amazonaws.com/tarot/user/origin/${photo}`}
              alt="user profile"
            />
            {isDice ? (
              <p className={style.img_btn} onClick={() => onRollDice('PHOTO')}>
                🎲
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <div className={style.random_wrap}>
            <div className={style.result_row}>
              <p></p>
              <div className={style.result_wrap}>
                <h2 className={style.h2}>메인 타로</h2>
                <h3 className={style.description}>
                  {main.description.split('.').map((v, i) => (
                    <span key={i}>{v}</span>
                  ))}
                </h3>
              </div>
              {isDice ? (
                <p
                  className={style.dice_btn}
                  onClick={() => onRollDice('MAIN')}
                >
                  🎲
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <div className={style.result_row}>
              <p></p>
              <div className={style.result_wrap}>
                <h2 className={style.h2}>긍정 키워드</h2>
                <h3 className={style.tag}>
                  {positive.tarotTag.map((v, i) => (
                    <span key={i}>#{v.tag}</span>
                  ))}
                </h3>
              </div>
              {isDice ? (
                <p
                  className={style.dice_btn}
                  onClick={() => onRollDice('POSITIVE')}
                >
                  🎲
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <div className={style.result_row}>
              <p></p>
              <div className={style.result_wrap}>
                <h2 className={style.h2}>부정 키워드</h2>
                <h3 className={style.tag}>
                  {negative.tarotTag.map((v, i) => (
                    <span key={i}>#{v.tag}</span>
                  ))}
                </h3>
              </div>
              {isDice ? (
                <p
                  className={style.dice_btn}
                  onClick={() => onRollDice('NEGATIVE')}
                >
                  🎲
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </section>
      </div>
      {children}
    </div>
  );
};

export default Preview;
