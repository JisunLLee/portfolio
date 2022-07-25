import useConfirm from '../../API/useConfirm';

const NoUser = (openModal, setUser, count, setCount) => {
  useConfirm(
    count === 1
      ? '회원만 이용 가능합니다. 로그인/회원가입 하시겠습니까?'
      : '그럼 맛보기로 타로만 보실래요?',
    () => (count === 1 ? openModal() : setUser('TESTER')),
    () => setCount(count + 1)
  );
};
export default NoUser;
