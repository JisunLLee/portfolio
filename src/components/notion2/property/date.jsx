import React from 'react';

const Date = ({ data }) => (
  <div className="notion-property-date">
    {data.start ? data.start + ' → ' + data.end : data}
  </div>
);

export default Date;
