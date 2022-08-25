import React from 'react';
import TextForm from '../text_form';

const Parpagraph = ({ data }) => {
  const text = data.paragraph.text.map((text_, idx) => (
    <TextForm data={text_} id={idx} />
  ));

  return (
    <div className="notion-text" key={data.id}>
      {text}
    </div>
  );
};
export default Parpagraph;
