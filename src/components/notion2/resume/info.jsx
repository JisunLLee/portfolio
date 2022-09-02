import React from 'react';
import BlockTypeBridge from '../block_type/block_type_bridge';

const Info = ({ data }) => {
  // console.log('data', data);
  const column =
    data &&
    data.children.map((children_) => (
      <BlockTypeBridge data={children_} id={data.id} />
    ));

  return (
    <div className="notion-row" key={data.id}>
      {column}
    </div>
  );
};

export default Info;
