import React from 'react';
import TextWrap from '../text_wrap';

const Quote = ({ data }) => (
  <div className="notion-quote" key={data.id}>
    <TextWrap data={data.quote} id={data.id} />
  </div>
);

export default Quote;
