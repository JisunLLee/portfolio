import React from 'react';
import TextWrap from '../text_wrap';

export const Heading1 = ({ data }) => (
  <h2 className="notion-h1" id={data.id} key={data.id}>
    <TextWrap data={data.heading_1} />
  </h2>
);

export const Heading2 = ({ data }) => (
  <h2 className="notion-h2" id={data.id} key={data.id}>
    <TextWrap data={data.heading_2} />
  </h2>
);

export const Heading3 = ({ data }) => (
  <h2 className="notion-h3" id={data.id} key={data.id}>
    <TextWrap data={data.heading_3} />
  </h2>
);
