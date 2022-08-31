import React from 'react';
import TextForm from './text_form';

const TextWrap = ({ data, id }) => (
  <div className="notion-text" key={id}>
    {data &&
      data.text.map((text_, id_) => <TextForm data={text_} id={id + id_} />)}
  </div>
);

export const TextWrapSpan = ({ data, id }) => (
  <span className="notion-text" key={id}>
    {data &&
      data.text.map((text_, id_) => <TextForm data={text_} id={id + id_} />)}
  </span>
);

export default TextWrap;
