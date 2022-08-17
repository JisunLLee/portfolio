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
import ImgSize from '../../common/imgsize';

const Home2 = (props) => {
  const [isHideFirst, setIsHideFirst] = useState(false);
  const [isHideDeveloper, setIsHideDeveloper] = useState(true);
  const [isHideSilence, setIsHideSilence] = useState(true);
  const [isHideTarot, setIsHideTarot] = useState({
    version: 0,
    msg: { visible: 'hidden', effect: 'none' },
    cover: { visible: 'visible', effect: 'none' },
  });
  const [imgSize, setImgSize] = useState({
    imgW: 57,
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
      switch (v.target.classList[1]) {
        case 'first':
          v.isIntersecting ? setIsHideFirst(false) : setIsHideFirst(true);
          break;
        case 'developer':
          if (v.isIntersecting) {
            setIsHideDeveloper(false);
            onSetIsHideTarot(0);
          } else {
            setIsHideDeveloper(true);
          }
          break;
        case 'tarot':
          if (v.intersectionRatio < 0.13) {
            v.isIntersecting
              ? AddEventListener(setTarotIMGPosition)
              : RemoveEventListener(setTarotIMGPosition);
          }
          break;
        case 'silence':
          v.isIntersecting ? setIsHideSilence(false) : setIsHideSilence(true);

          break;
        default:
          break;
      }
    });
  }, []);

  const onSetIsHideTarot = (version) => {
    const hideTarot =
      version === 0
        ? {
            version: 0,
            msg: { visible: 'hidden', effect: 'none' },
            cover: { visible: 'visible', effect: 'none' },
          }
        : version === 1
        ? {
            version: 1,
            msg: { visible: 'visible', effect: 'fade' },
            cover: { visible: 'visible', effect: 'none' },
          }
        : version === 2
        ? {
            version: 2,
            msg: { visible: 'visible', effect: 'hide' },
            cover: { visible: 'visible', effect: 'hide' },
          }
        : {
            version: 3,
            msg: { visible: 'visible', effect: 'show' },
            cover: { visible: 'visible', effect: 'show' },
          };

    setIsHideTarot((e) => (e.version === version ? e : hideTarot));
  };
  const onScroll = useCallback((entry) => {
    const currentY = entry.boundingClientRect.y;
    const currentRatio = entry.intersectionRatio;
    const isIntersecting = entry.isIntersecting;
    // console.log('[currentY]', currentY);
    // console.log('[currentRatio]', currentRatio);
    if (currentY < 0) {
      if (currentRatio > 0 && isIntersecting) {
        // console.log('Scrolling down enter');
        return { top: false, enter: true };
      } else {
        // console.log('Scrolling down leave');
        return { top: false, enter: false };
      }
    } else {
      if (currentRatio < 0.01) {
        // console.log('Scrolling up leave');
        return { top: true, enter: false };
      } else {
        // console.log('Scrolling up enter');
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
    const nowPosition = window.scrollY;
    const x = roundToTwo(
      ((nowPosition - tarotTop) * 100) / (maxTarotTop - tarotTop)
    );
    return {
      tarotTop: tarotTop,
      tarotHeight: tarotHeight,
      maxTarotTop: maxTarotTop,
      nowPosition: nowPosition,
      x: x,
    };
  }, []);

  // 스크롤 옵저버 등록
  const setObserve = useCallback(() => {
    const first = firstRef.current;
    const developer = developerRef.current;
    const tarot = tarotRef.current;
    const silence = silenceRef.current;
    const observer = new IntersectionObserver(handleScrolling, {
      threshold: [0.1, 0.199, 0.2],
    });
    observer.observe(first);
    observer.observe(developer);
    observer.observe(tarot);
    observer.observe(silence);
  }, []);

  const setIsHideTarotOnObserve = (x, mousewheel) => {
    if (x > 97 && x < 99) {
      onSetIsHideTarot(1);
    }
    if (x < 97) onSetIsHideTarot(0);
    if (x > 100) {
      mousewheel.deltaY > 0 ? onSetIsHideTarot(2) : onSetIsHideTarot(3);
    }
  };
  const tarotImg = ImgSize('IMG_0178.PNG');
  console.log(tarotImg.originSize());
  const setTarotIMGPosition = (mousewheel) => {
    const { tarotTop, maxTarotTop, nowPosition, x } = tarotSize();
    if (nowPosition > tarotTop && nowPosition < maxTarotTop) {
      setImgSize({
        scale: -(x / 100) * 5.9 + 6.4,
        imgW: -(x / 100) * 15 + 57,
        imgH: -(x / 100) * -43 + 7,
      });
    }
    setIsHideTarotOnObserve(x, mousewheel);
    return 0;
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
        {isHideTarot.version !== 0 && <Frame />}
        <Tarot
          type="tarot"
          imgSize={imgSize}
          isHide={isHideTarot}
          ref={tarotRef}
        />

        <Introduce
          type="silence"
          isHide={isHideSilence}
          msg={{
            first: ' 침묵의<br/>냥이댕이!',
            second: 'SOON!',
            third: `Comming`,
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
  window.addEventListener('mousewheel', (e) => listener(e));
}

function RemoveEventListener(listener) {
  window.removeEventListener('mousewheel', (e) => listener(e));
}
