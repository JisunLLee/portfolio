import React from 'react';
import BlockTypeBridge from './block_type_bridge';

const Column = ({ data }) => {
  const contents = data.contents.map((contents_) => (
    <BlockTypeBridge data={contents_} />
  ));

  return (
    <div className="notion-column" key={data.id}>
      {contents}
    </div>
  );
};

export default Column;
