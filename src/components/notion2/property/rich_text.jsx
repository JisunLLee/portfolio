import React from 'react';
import TextWrap from '../text_wrap';
const RichText = ({ data, key }) => {
  return (
    <div className="notion-property-rich_text">
      <TextWrap data={{ text: data }} key={key} />
    </div>
  );
};

export default RichText;
