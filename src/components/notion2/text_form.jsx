import React from 'react';
import { Link } from 'react-router-dom';

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
      {data.href ? <CoverLink data={data} /> : data.plain_text}
    </span>
  );
};

const CoverLink = ({ data }) => {
  const change = data.href.split('https://www.notion.so/');
  const base_url = process.env.REACT_APP_FRONT_BASE_URL;
  const page = myPage(data.href);
  const href = page
    ? `${base_url}${page}`
    : change[0] === ''
    ? `${base_url}/notion/${change[1]}`
    : data.href;

  return (
    <a href={href} target="_blank" className="notion-link">
      {data.plain_text}
    </a>
  );
};

const myPage = (data) => {
  switch (data) {
    case 'http://bit.ly/3xCigF7':
      return `/study`;
    case 'https://www.notion.so/8db92015fc80459cb4c68c566b83dce3':
      return `/resume`;
    case '/8db92015fc80459cb4c68c566b83dce3':
      return `/resume`;
    default:
      return false;
  }
};
export default TextForm;
