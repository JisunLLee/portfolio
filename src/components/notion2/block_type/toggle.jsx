import React, { useState } from 'react';
import { TextWrapSpan } from '../text_wrap';

const Toggle = ({ data, id, children }) => (
  <details className="notion-toggle " key={id}>
    <summary>
      <TextWrapSpan data={data.toggle} key={id} />
    </summary>
    <div>{children}</div>
  </details>
);

export default Toggle;
