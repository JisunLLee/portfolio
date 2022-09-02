import React from 'react';
import TextWrap, { TextWrapSpan } from '../text_wrap';

export const Heading = ({ data, type, children }) => {
  const is_toggle = data[type].is_toggleable;
  const heading = (
    <GetHeading
      data={data}
      type={type}
      text_wrap_type={is_toggle ? 'span' : 'div'}
    />
  );
  return is_toggle ? (
    <ToggleableHeading id={data.id} summary={heading}>
      {children}
    </ToggleableHeading>
  ) : (
    heading
  );
};
export const Heading1 = ({ data, text_wrap_type }) => {
  const color = data.heading_1.color && 'notion-' + data.heading_1.color;
  const class_name =
    text_wrap_type === 'span'
      ? 'notion-h notion-h1 ' + color
      : 'notion-h1 ' + color;

  return (
    <h1 className={class_name} id={data.id} key={data.id}>
      {text_wrap_type === 'span' ? (
        <TextWrapSpan data={data.heading_1} id={data.id} />
      ) : (
        <TextWrap data={data.heading_1} id={data.id} />
      )}
    </h1>
  );
};

export const Heading2 = ({ data, text_wrap_type }) => {
  const color = data.heading_2.color && 'notion-' + data.heading_2.color;
  const class_name =
    text_wrap_type === 'span'
      ? 'notion-h notion-h2 ' + color
      : 'notion-h2 ' + color;

  return (
    <h2 className={class_name} id={data.id} key={data.id}>
      {text_wrap_type === 'span' ? (
        <TextWrapSpan data={data.heading_2} id={data.id} />
      ) : (
        <TextWrap data={data.heading_2} id={data.id} />
      )}
    </h2>
  );
};

export const Heading3 = ({ data, text_wrap_type }) => {
  const color = data.heading_3.color && 'notion-' + data.heading_3.color;
  const class_name =
    text_wrap_type === 'span'
      ? 'notion-h notion-h3 ' + color
      : 'notion-h3 ' + color;

  return (
    <h3 className={class_name} id={data.id} key={data.id}>
      {text_wrap_type === 'span' ? (
        <TextWrapSpan data={data.heading_3} id={data.id} />
      ) : (
        <TextWrap data={data.heading_3} id={data.id} />
      )}
    </h3>
  );
};

const GetHeading = ({ data, type, text_wrap_type }) => {
  switch (type) {
    case 'heading_1':
      return <Heading1 data={data} text_wrap_type={text_wrap_type} />;
    case 'heading_2':
      return <Heading2 data={data} text_wrap_type={text_wrap_type} />;
    case 'heading_3':
      return <Heading3 data={data} text_wrap_type={text_wrap_type} />;
  }
};
const ToggleableHeading = ({ id, summary, children }) => (
  <details className="notion-toggle " key={id}>
    <summary>{summary}</summary>
    <div>{children}</div>
  </details>
);
