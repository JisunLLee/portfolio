import React, { useState } from 'react';
import { TextWrapSpan } from '../text_wrap';

const Toggle = ({ data, key, children }) => (
  <details className="notion-toggle " key={key}>
    <summary>
      <TextWrapSpan data={data.toggle} key={key} />
    </summary>
    <div>{children}</div>
  </details>
);

export default Toggle;
