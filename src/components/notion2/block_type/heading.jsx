import React from 'react';
import TextWrap from '../text_wrap';

export const Heading1 = ({ data }) => {
  const color = data.heading_1.color && 'notion-' + data.heading_1.color;
  const class_name = 'notion-h1 ' + color;
  return (
    <h2 className={class_name} id={data.id} key={data.id}>
      <TextWrap data={data.heading_1} id={data.id} />
    </h2>
  );
};

export const Heading2 = ({ data }) => {
  const color = data.heading_2.color && 'notion-' + data.heading_2.color;
  const class_name = 'notion-h2 ' + color;

  return (
    <h2 className={class_name} id={data.id} key={data.id}>
      <TextWrap data={data.heading_2} id={data.id} />
    </h2>
  );
};

export const Heading3 = ({ data }) => {
  const color =
    data.heading_3 && data.heading_3.color && 'notion-' + data.heading_3.color;
  const class_name = 'notion-h3 ' + color;

  return (
    <h2 className={class_name} id={data.id} key={data.id}>
      <TextWrap data={data.heading_3} id={data.id} />
    </h2>
  );
};
