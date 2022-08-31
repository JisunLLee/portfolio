import React from 'react';
import BlockTypeBridge from './block_type_bridge';

const Column = ({ data, children }) => {
  const column =
    data.contents &&
    data.contents.map((contents_, id_) => (
      <BlockTypeBridge data={contents_} id={id_} />
    ));

  return (
    <div className="notion-column" key={data.id}>
      {column}
      {children}
    </div>
  );
};

export default Column;
