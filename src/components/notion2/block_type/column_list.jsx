import React from 'react';
import BlockTypeBridge from './block_type_bridge';

const ColumnList = ({ data }) => {
  const children =
    data &&
    data.children.map((children_) => <BlockTypeBridge data={children_} />);

  return <div className="notion-row"> {children} </div>;
};

export default ColumnList;
