import React from 'react';
import BlockTypeBridge from './block_type_bridge';

const ColumnList = ({ children }) => {
  console.log('ColumnList', children);
  return <div className="notion-row"> {children} </div>;
};

export default ColumnList;
