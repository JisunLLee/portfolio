import React, { useEffect, useState } from 'react';

import Modal from 'react-modal';
import TarotDB from '../../../service/tarot_db_service';
import Preview from '../preview/preview';
import style from './maker.module.css';
import RandomBoard from '../board/board';
import NoUser from '../noUser';
import { useNavigate } from 'react-router-dom';
import HomeLoading from '../../loading/home';
Modal.setAppElement('body');
const Maker = ({ user, openModal, setUser, count, setCount }) => {
  const [tarot, setTarot] = useState(false);
  const [rollItem, setRollItem] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const tarotDB = new TarotDB();
  const navigate = useNavigate();
  const onNoUser = () => NoUser(openModal, setUser, count, setCount, navigate);
  const controlModal = () => {
    setIsModalOpen((prv) => !prv);
  };

  const onRollDice = async (item) => {
    const result =
      user === 'TESTER'
        ? await tarotDB.item(item)
        : await tarotDB.putTarotInfo(user.id, item);
    setTarot((prv) => {
      return { ...prv, ...result.data };
    });
    setRollItem({ item, data: { ...tarot, ...result.data } });
    controlModal();
  };

  const getUserTarot = async () => {
    return user && (await tarotDB.getTarotInfo(user.id));
  };

  const postUserTarot = async () => {
    return (
      user.id &&
      (await tarotDB
        .postTarotInfo({
          userId: user.id,
        })
        .then(
          (res) =>
            res.result === '성공' &&
            (setRollItem({ item: 'ALL', data: res.data }),
            setTarot(() => res.data))
        )
        .then(controlModal()))
    );
  };

  useEffect(() => {
    // console.log('MAKER count', count);
    async function startPage() {
      const isUserTarot = await getUserTarot();
      isUserTarot.result === '성공' && setTarot(isUserTarot.data);
      isUserTarot.result === '실패' &&
        isUserTarot.act === '신규' &&
        (await postUserTarot());
    }

    user && user === 'TESTER' ? onRollDice('ALL') : startPage();
    if (!user && count) {
      onNoUser();
    }
  }, [user, count]);

  useEffect(() => {
    tarot && loading && setLoading(false);
  }, [tarot]);

  useEffect(() => {
    return () => setCount(1);
  }, []);
  return (
    <div className={style.container}>
      {user && loading && <HomeLoading />}
      <Modal
        className={style.tarots}
        isOpen={isModalOpen}
        onRequestClose={controlModal}
      >
        {rollItem && (
          <RandomBoard item={rollItem.item} data={rollItem.data} user={user} />
        )}
      </Modal>
      {user && tarot ? (
        <Preview
          onRollDice={onRollDice}
          user={user}
          tarot={tarot}
          isDice={true}
        >
          <div className={style.roll}>
            <p>
              <span> 색상 변경 </span>
              <span onClick={() => onRollDice('COLOR')}> 🎲 </span>
            </p>
            <p>
              <span> 전체 변경 </span>
              <span onClick={() => onRollDice('ALL')}> 🎲 </span>
            </p>
          </div>
        </Preview>
      ) : (
        <div>회원만 이용 가능합니다</div>
      )}
    </div>
  );
};

export default Maker;
