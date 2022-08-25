import React from 'react';
import TextWrap from '../text_wrap';

const Parpagraph = ({ data }) =>
  data && <TextWrap data={data.paragraph} key={data.id} />;
export default Parpagraph;
