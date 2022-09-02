import React from 'react';
import TextWrap from '../text_wrap';
import hljs from 'highlight.js/lib/common';

const Code = ({ data }) => {
  console.log('Code', data.code.language, data.code);
  const code = hljs.highlight('<h1>Hello World!</h1>', {
    language: 'xml',
  }).value;

  return (
    <div key={data.id} className="notion-code">
      <TextWrap data={data.code} id={data.id} />

      {/* {highlightedCode} */}
    </div>
  );
};

export default Code;
