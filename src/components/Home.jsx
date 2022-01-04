import React from "react";
import "./Home.css";
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
    <div className="main__background__1">
      <h1 className="h1__name">
        Lucia
        <br />
        Jisun
      </h1>
      <div className="main__background__bar__1"></div>
      <div className="main__background__bar__2__wrap">
        <div className="main__background__bar__2"> </div>
        <button className="resume_img_btn">
          <Link to="/about" />
        </button>
      </div>
      <div className="main__background__bar__3">
        <div className="resume">
          <h1 className="welcom">
            WELCOM <br /> TO <br />
            LUCIA&rsquo;S SAPCE!!
          </h1>
          <p className="long_introduce">
            지선 / Lucia의 페이지에 오신 것을 환영합니다!
          </p>
          <p className="short_introduce">
            지선 / Lucia의 페이지에 오신 것을 <br /> 환영합니다!
          </p>
          <p className="resume_link">
            <Link to="/about"> 이력서 보러가기 </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="main__background__2">
      <div className="main__background__bar__1"></div>
      <div className="main__background__bar__4">
        <button className="circle_btn">
          <img className="circle_btn" src={"leaning_dev.PNG"} alt="thumbnail" />
        </button>
        <button className="circle_btn">
          <img className="circle_btn" src={"drawing.PNG"} alt="thumbnail" />
        </button>
        <button className="circle_btn">
          <img className="circle_btn" src={"exercise.PNG"} alt="thumbnail" />
        </button>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="main__background__3">
      <button className="main__animal__btn">
        <h3 className="main__contents__title">침묵의 냥이 댕이</h3>
        <div className="main__animal__imgs">
          <img
            className="main__animal__img"
            src={"IMG_0170.PNG"}
            alt="thumbnail"
          />
          <img
            className="main__animal__img"
            src={"IMG_0177.PNG"}
            alt="thumbnail"
          />
          <img
            className="main__animal__img"
            src={"IMG_0171.PNG"}
            alt="thumbnail"
          />
        </div>
      </button>
      <div className="main__background__bar__1"></div>
      <div className="main__background__bar__5"></div>
    </div>
  );
}

function Background4() {
  return (
    <div className="main__background__3">
      <div className="main__background__bar__6">
        <button className="main__find__btn">
          <h3 className="main__contents__title">루시아를 찾아라!</h3>
          <img
            className="main__find__img1"
            src={"IMG_0178.PNG"}
            alt="thumbnail"
          />
          <img
            className="main__find__img2"
            src={"IMG_0179.PNG"}
            alt="thumbnail"
          />
        </button>
      </div>
      <div className="main__background__bar__6">
        <button className="main__taro__btn">
          <h3 className="main__contents__title">오늘의 타로점</h3>
          <img
            className="main__taro__img"
            src={"IMG_0180.PNG"}
            alt="thumbnail"
          />
        </button>
      </div>
    </div>
  );
}
export default Home;
