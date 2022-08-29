import React from 'react';
import TextForm from './text_form';

const TextWrap = ({ data, key }) => (
  <div className="notion-text" key={key}>
    {data && data.text.map((text_, id) => <TextForm data={text_} id={id} />)}
  </div>
);

export const TextWrapSpan = ({ data, key }) => (
  <span className="notion-text" key={key}>
    {data && data.text.map((text_, id) => <TextForm data={text_} id={id} />)}
  </span>
);

export default TextWrap;
