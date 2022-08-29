import React from 'react';

export const onResultBranch = (data, setState) => {
    data.result === '성공' && setState(data.data);
    data.result === '실패' && setState(`${data.act}정보 불러오기 오류`);
  };
