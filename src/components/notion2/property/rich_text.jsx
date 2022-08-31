import React from 'react';
import TextWrap from '../text_wrap';
const RichText = ({ data, id }) => {
  return (
    <div className="notion-property-rich_text" key={id}>
      <TextWrap data={{ text: data }} id={id} />
    </div>
  );
};

export default RichText;
