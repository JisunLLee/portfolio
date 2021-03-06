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
            {user === 'TESTER' ? 'μ²΄ν μ€' : user.username}
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
                π²
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <div className={style.random_wrap}>
            <div className={style.result_row}>
              <p></p>
              <div className={style.result_wrap}>
                <h2 className={style.h2}>λ©μΈ νλ‘</h2>
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
                  π²
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <div className={style.result_row}>
              <p></p>
              <div className={style.result_wrap}>
                <h2 className={style.h2}>κΈμ  ν€μλ</h2>
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
                  π²
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <div className={style.result_row}>
              <p></p>
              <div className={style.result_wrap}>
                <h2 className={style.h2}>λΆμ  ν€μλ</h2>
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
                  π²
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
