import React from 'react';
import BlockTypeBridge from '../block_type/block_type_bridge';

const Introduce = ({ data }) => {
  const column =
    data &&
    data.children.map((children_) => <BlockTypeBridge data={children_} />);

  return <div className="notion-row"> {column} </div>;
};

export default Introduce;
