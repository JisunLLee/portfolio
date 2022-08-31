import React from 'react';
import BlockTypeBridge from './block_type_bridge';

const ColumnList = ({ data, children }) => (
  <div className="notion-row" key={data.id}>
    {children}
  </div>
);

export default ColumnList;
