import React from 'react';

const TextForm = ({ data, id }) => {
  const annotations = data.annotations;
  const style = {};
  const class_name = [];
  style.fontStyle = annotations.italic && 'italic';
  style.fontWeight = annotations.bold && 'bold';
  style.strikethrough = annotations.strikethrough && 'line-through';
  style.textDecorationLine = annotations.underline && 'underline';

  annotations.code && class_name.push('notion-inline-code');
  annotations.color !== 'default' &&
    class_name.push('notion-' + annotations.color);

  const class_name_str = class_name.join(' ');
  return (
    <span style={style} key={id} className={class_name_str}>
      {data.href ? <a href={data.href}>{data.plain_text}</a> : data.plain_text}
    </span>
  );
};

export default TextForm;
