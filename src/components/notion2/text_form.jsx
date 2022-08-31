import React from 'react';

const TextForm = ({ data, id }) => {
  const annotations = data.annotations;
  const style = {};
  const class_name = [];
  style.fontStyle = annotations.italic && 'italic';
  style.strikethrough = annotations.strikethrough && 'line-through';
  style.textDecorationLine = annotations.underline && 'underline';

  annotations.bold && class_name.push('notion-b');
  annotations.code && class_name.push('notion-inline-code');
  annotations.color !== 'default' &&
    class_name.push('notion-' + annotations.color);

  const class_name_str = class_name.join(' ');
  // console.log('TextForm', id);
  return (
    <span style={style} className={class_name_str} key={id}>
      {data.href ? (
        <a href={data.href} className="notion-link">
          {data.plain_text}
        </a>
      ) : (
        data.plain_text
      )}
    </span>
  );
};

export default TextForm;
