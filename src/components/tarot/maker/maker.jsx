import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import TarotDB from '../../../service/tarot_db_service';
import Preview from '../preview/preview';
import style from './maker.module.css';
import RandomBoard from '../board/board';
Modal.setAppElement('body');
const Maker = ({ user }) => {
  console.log('user:', user);
  const [tarot, setTarot] = useState(false);
  const [rollItem, setRollItem] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tarotDB = new TarotDB();

  const controlModal = () => {
    setIsModalOpen((prv) => !prv);
  };

  const onRollDice = async (item) => {
    const result = await tarotDB.putTarotInfo(user.id, item);
    setTarot((prv) => {
      return { ...prv, ...result.data };
    });
    setRollItem({ item, data: { ...tarot, ...result.data } });
    controlModal();
  };

  const getUserTarot = async () => {
    console.log('[MAKER][getUserTarot]');
    return user && (await tarotDB.getTarotInfo(user.id));
  };

  const postUserTarot = async () => {
    console.log('[MAKER][postUserTarot]');
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
    async function startPage() {
      const isUserTarot = await getUserTarot();
      isUserTarot.result === '성공' && setTarot(isUserTarot.data);
      isUserTarot.result === '실패' &&
        isUserTarot.act === '신규' &&
        (await postUserTarot());
    }
    startPage();
  }, [user]);

  return (
    <div className={style.container}>
      <Modal
        className={style.tarots}
        isOpen={isModalOpen}
        onRequestClose={controlModal}
      >
        {rollItem && (
          <RandomBoard item={rollItem.item} data={rollItem.data} user={user} />
        )}
      </Modal>
      {tarot && user ? (
        <Preview onRollDice={onRollDice} user={user} tarot={tarot}>
          <div className={style.roll}>
            <p>
              <span> 색상 변경 </span>{' '}
              <span onClick={() => onRollDice('COLOR')}> 🎲 </span>
            </p>
            <p>
              <span> 전체 변경 </span>{' '}
              <span onClick={() => onRollDice('ALL')}> 🎲 </span>
            </p>
          </div>
        </Preview>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Maker;
