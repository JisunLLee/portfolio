import React from 'react';

export const Heading1 = ({ data }) => (
  <h2 className="notion-h1" id={data.id} key={data.id}>
    {/* {repeatText(data.heading_1.text)} */}
  </h2>
);

export const Heading2 = ({ data }) => (
  <h2 className="notion-h2" id={data.id} key={data.id}>
    {/* {repeatText(data.heading_2.text)} */}
  </h2>
);

export const Heading3 = ({ data }) => (
  <h2 className="notion-h3" id={data.id} key={data.id}>
    {/* {repeatText(data.heading_2.text)} */}
  </h2>
);
