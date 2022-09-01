import React from 'react';

const Divider = ({ key }) => {
  return (
    <div className="notion-block" key={key}>
      <div className="notion-blank " />
      <hr className="notion-hr" />
      <div className="notion-blank " />
    </div>
  );
};

export default Divider;
