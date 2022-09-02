import React from 'react';

const ChildPage = ({ data }) => {
  console.log('ChildPage', data);
  return (
    <div>
      <a>{data.child_page.title}</a>
    </div>
  );
};

export default ChildPage;
