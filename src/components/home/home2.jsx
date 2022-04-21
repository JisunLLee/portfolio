import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Introduce from './introduce';
import style from './home.module.css';
const Home2 = (props) => {
  const [isHideFirst, setIsHideFirst] = useState(false);
  const [isHideDeveloper, setIsHideDeveloper] = useState(true);
  const [isHideThird, setIsHideThird] = useState(true);
  const firstRef = createRef();
  const developerRef = createRef();
  const thirdRef = createRef();
  const handleScrolling = useCallback((entries) => {
    console.log('[entries]', entries);
    entries.forEach((v) => {
      switch (v.target.classList[1]) {
        case 'first':
          console.log('fistRef');
          v.isIntersecting ? setIsHideFirst(false) : setIsHideFirst(true);
          break;
        case 'developer':
          v.isIntersecting
            ? setIsHideDeveloper(false)
            : setIsHideDeveloper(true);
          break;
        default:
          break;
      }
    });
  }, []);

  useEffect(() => {
    const first = firstRef.current;
    const developer = developerRef.current;
    const third = thirdRef.current;
    const observer = new IntersectionObserver(handleScrolling, {
      threshold: 0.7,
    });
    observer.observe(first);
    observer.observe(developer);
    observer.observe(third);
  }, [handleScrolling]);
  return (
    <div className={`${style.container}`}>
      <section className={style.first_wrap}>
        <div className={style.introduce}>
          <h5>WELCOME TO JISUN'S SPACE!</h5>
        </div>
        <section className={style.first}>
          <div className={style.frame_wrap}>
            <div className={style.frame}></div>
          </div>
          <Introduce
            type="first"
            isHide={isHideFirst}
            msg={{
              first: 'HELLO',
              second: '안녕하세요!',
              third: `I'M<br/>JISUN`,
            }}
            ref={firstRef}
          />
          <Introduce
            type="developer"
            isHide={isHideDeveloper}
            msg={{
              first: `I'M<br/>DEVELOPER`,
              second: '봐주셔유',
              third: `CLICK<br/>ME`,
            }}
            ref={developerRef}
          />
        </section>
      </section>
      <section className={style.second}>
        <Introduce
          type="third"
          isHide={isHideThird}
          msg={{
            first: 'HELLO',
            second: '안녕하세요!',
            third: `I'M<br/>JISUN`,
          }}
          ref={thirdRef}
        />
      </section>
    </div>
  );
};

export default Home2;
