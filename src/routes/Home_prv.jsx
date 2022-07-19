import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="main__background">
    <Background1 />
    <Background2 />
    <Background3 />
    <Background4 />
  </div>
);

function Background1() {
  return (
    <div className={style.main__background__1}>
      <h1 className={style.h1__name}>
        Lucia
        <br />
        Jisun
      </h1>
      <div className={style.main__background__bar__1}></div>
      <div className={style.main__background__bar__2__wrap}>
        <div className={style.main__background__bar__2}> </div>
        <button className={style.resume_img_btn}>
          <Link to="/resume" />
        </button>
      </div>
      <div className={style.main__background__bar__3}>
        <div className={style.resume}>
          <h1 className={style.welcom}>
            WELCOM <br /> TO <br />
            LUCIA&rsquo;S SAPCE!!
          </h1>
          <p className={style.long_introduce}>
            지선 / Lucia의 페이지에 오신 것을 환영합니다!
          </p>
          <p className={style.short_introduce}>
            지선 / Lucia의 페이지에 오신 것을 <br /> 환영합니다!
          </p>
          <p className={style.resume_link}>
            <Link to="/resume"> 이력서 보러가기 </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className={style.main__background__2}>
      <div className={style.main__background__bar__1}></div>
      <div className={style.main__background__bar__4}>
        <button className={style.circle_btn}>
          <img
            className={style.circle_btn}
            src={"leaning_dev.PNG"}
            alt="thumbnail"
          />
        </button>
        <button className={style.circle_btn}>
          <img
            className={style.circle_btn}
            src={"drawing.PNG"}
            alt="thumbnail"
          />
        </button>
        <button className={style.circle_btn}>
          <img
            className={style.circle_btn}
            src={"exercise.PNG"}
            alt="thumbnail"
          />
        </button>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className={style.main__background__3}>
      <button className={style.main__animal__btn}>
        <h3 className={style.main__contents__title}>침묵의 냥이 댕이</h3>
        <div className={style.main__animal__imgs}>
          <img
            className={style.main__animal__img}
            src={"IMG_0170.PNG"}
            alt="thumbnail"
          />
          <img
            className={style.main__animal__img}
            src={"IMG_0177.PNG"}
            alt="thumbnail"
          />
          <img
            className={style.main__animal__img}
            src={"IMG_0171.PNG"}
            alt="thumbnail"
          />
        </div>
      </button>
      <div className={style.main__background__bar__1}></div>
      <div className={style.main__background__bar__5}></div>
    </div>
  );
}

function Background4() {
  return (
    <div className={style.main__background__3}>
      <div className={style.main__background__bar__6}>
        <button className={style.main__find__btn}>
          <h3 className={style.main__contents__title}>루시아를 찾아라!</h3>
          <img
            className={style.main__find__img1}
            src={"IMG_0178.PNG"}
            alt="thumbnail"
          />
          <img
            className={style.main__find__img2}
            src={"IMG_0179.PNG"}
            alt="thumbnail"
          />
        </button>
      </div>
      <div className={style.main__background__bar__6}>
        <button className={style.main__taro__btn}>
          <h3 className={style.main__contents__title}>오늘의 타로점</h3>
          <img
            className={style.main__taro__img}
            src={"IMG_0180.PNG"}
            alt="thumbnail"
          />
        </button>
      </div>
    </div>
  );
}
export default Home;
