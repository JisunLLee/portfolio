
const DB_TYPE = (key) => {
  switch (key) {
    case '데일리 회고 DB':
    case 'Thanks To Today':
    case '1일 루틴':
    case '기술 퀴즈':
    case '오늘의 테스크': {
      return 'COLLECTION_TABLE';
    }
    default:
      return 'LIST';
  }
};
export default DB_TYPE;