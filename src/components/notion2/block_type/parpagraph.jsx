import React from 'react';
import TextWrap from '../text_wrap';

const Parpagraph = ({ data }) =>
  data && <TextWrap data={data.paragraph} id={data.id} />;

export default Parpagraph;
