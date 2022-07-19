import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Introduce from './introduce';
import style from './home.module.css';
import Tarot from './tarot';
import { roundToTwo } from '../../Utils';
import Frame from './frame';

const Home2 = (props) => {
  const [isHideFirst, setIsHideFirst] = useState(false);
  const [isHideDeveloper, setIsHideDeveloper] = useState(true);
  const [isHideSilence, setIsHideSilence] = useState(true);
  const [isHideTarot, setIsHideTarot] = useState(true);
  const [imgSize, setImgSize] = useState({
    imgW: 65,
    imgH: 7,
    scale: 6.4,
  });
  const first_wrapRef = useRef();
  const firstRef = useRef();
  const developerRef = useRef();
  const tarotRef = useRef();
  const silenceRef = createRef();

  const handleScrolling = useCallback((entries) => {
    entries.forEach((v) => {
      const scroll = scrollOn(v);
      switch (v.target.classList[1]) {
        case 'first':
          v.isIntersecting ? setIsHideFirst(false) : setIsHideFirst(true);
          break;
        case 'developer':
          v.isIntersecting
            ? setIsHideDeveloper(false)
            : setIsHideDeveloper(true);
          scroll.enter &&
            !scroll.top &&
            RemoveEventListener(setTarotIMGPosition);
          break;
        case 'tarot':
          scroll.enter
            ? AddEventListener(setTarotIMGPosition)
            : RemoveEventListener(setTarotIMGPosition, setIsHideTarot);
          break;
        default:
          break;
      }
    });
  }, []);

  const scrollOn = useCallback((entry) => {
    const currentY = entry.boundingClientRect.y;
    const currentRatio = entry.intersectionRatio;
    const isIntersecting = entry.isIntersecting;
    // console.log('[currentY]', currentY);
    // console.log('[currentRatio]', currentRatio);
    if (currentY < 0) {
      if (currentRatio > 0 && isIntersecting) {
        console.log('Scrolling down enter');
        return { top: false, enter: true };
      } else {
        console.log('Scrolling down leave');
        return { top: false, enter: false };
      }
    } else if (currentY > 0) {
      if (currentRatio < 0.01) {
        console.log('Scrolling up leave');
        return { top: true, enter: false };
      } else {
        console.log('Scrolling up enter');
        return { top: true, enter: true };
      }
    }
  }, []);

  useEffect(() => {
    setObserve();
  }, []);

  const tarotSize = useCallback(() => {
    const first_wrap = first_wrapRef.current;
    const tarot = tarotRef.current;

    const tarotTop = first_wrap.clientHeight + 120 + 48;
    const tarotHeight = tarot.offsetHeight;
    const maxTarotTop =
      tarotHeight + first_wrap.clientHeight - tarotHeight / 5 - 120;

    return {
      tarotTop: tarotTop,
      tarotHeight: tarotHeight,
      maxTarotTop: maxTarotTop,
    };
  }, []);

  // 스크롤 옵저버 등록
  const setObserve = useCallback(() => {
    const first = firstRef.current;
    const developer = developerRef.current;
    const tarot = tarotRef.current;
    // const silence = silenceRef.current;
    const observer = new IntersectionObserver(handleScrolling, {
      threshold: [0.01],
    });
    observer.observe(first);
    observer.observe(developer);
    observer.observe(tarot);
  }, []);

  const setTarotIMGPosition = () => {
    const tarotPosition = tarotSize();
    const { tarotTop, maxTarotTop } = tarotPosition;
    const nowPosition = window.scrollY;
    const x = roundToTwo(
      ((nowPosition - tarotTop) * 100) / (maxTarotTop - tarotTop)
    );
    if (nowPosition > tarotTop && nowPosition < maxTarotTop) {
      setImgSize({
        scale: -(x / 100) * 5.9 + 6.4,
        imgW: -(x / 100) * 15 + 65,
        imgH: -(x / 100) * -43 + 7,
      });
    }
    if (x > 97) setIsHideTarot(false);
  };

  return (
    <div className={`${style.container}`}>
      <section ref={first_wrapRef} className={style.first_wrap}>
        <div className={style.introduce}>
          <h5>WELCOME TO JISUN'S SPACE!</h5>
        </div>
        <section className={style.first}>
          <Frame />
          <Introduce
            type="first"
            isHide={isHideFirst}
            msg={{
              first: 'HELLO',
              second: '안녕하세요!',
              third: `I'M<br/>JISUN`,
            }}
            ref={firstRef}
            page="/"
          />
          <Introduce
            type="developer"
            isHide={isHideDeveloper}
            msg={{
              first: `I'M<br/>DEVELOPER`,
              second: '봐주셔유',
              third: `CLICK<br/>ME`,
            }}
            img="IMG_0378.PNG"
            ref={developerRef}
            page="/resume"
          />
        </section>
      </section>
      <section className={style.second_wrap}>
        {!isHideTarot && <Frame />}
        <Tarot type="tarot" imgSize={imgSize} ref={tarotRef} />
        <Introduce
          type="silence"
          isHide={isHideSilence}
          msg={{
            first: '쉿!',
            second: '침묵의!',
            third: `냥이 댕이!`,
          }}
          page="/"
          ref={silenceRef}
        />
      </section>
    </div>
  );
};

export default Home2;

function AddEventListener(listener) {
  window.addEventListener('scroll', listener);
}

function RemoveEventListener(listener) {
  window.removeEventListener('scroll', listener);
}
