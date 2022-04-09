export const okAlert = (message) => {
  alert(message);
};

export const loginAlert = (result) => {
  alert(`${result.act} 성공!
    ${result.data.username}님 반갑습니다!`);
};

export const failAlert = (act, reason = null) => {
  alert(
    `${act} 실패!
    다시 시도해 주세요 ㅜㅜ` + reason
      ? `\n ${reason}`
      : ''
  );
};
