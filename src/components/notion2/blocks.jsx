import React from 'react';
import BlockTypeBridge from './block_type/block_type_bridge';

const Blocks = ({ data }) => {
  const blocks =
    data && data.map((data_, id) => <BlockTypeBridge data={data_} id={id} />);
  return <div>{blocks}</div>;
};

export default Blocks;
