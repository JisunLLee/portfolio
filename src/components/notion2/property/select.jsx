import React from 'react';

const Select = ({ data }) => {
  const classname = data
    ? 'notion-' + data.color + '_background notion-property-select-item'
    : 'notion_property_body_null';
  const body = data ? data.name : '';
  const id = data ? data.id : 0;

  return (
    <div className={classname} key={id}>
       {body} 
    </div>
  );
};

export default Select;
