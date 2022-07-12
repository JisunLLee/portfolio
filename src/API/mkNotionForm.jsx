import axios from 'axios';
import React from 'react';

// import React from "react";
const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function mkBlocks(data) {
  console.log('mkBlocks', data);

  const data_form = data.map((data_form_) => {
    if (!data_form_.has_children) {
      return notionForm(data_form_);
    } else {
      if (data_form_.children.length) {
        const children = data_form_.children.map((children_) => {
          const children_contents = children_.contents.map(
            (children_contents_) => {
              return notionForm(children_contents_);
            }
          );
          return (
            <div className="notion-equation-block " key={children_.id}>
              {children_contents}
            </div>
          );
        });
        return (
          <div className="notion-row" key={data_form_.id}>
            {children}
          </div>
        );
      } else {
        <div key={data_form_.id}> Missing children_contents_</div>;
      }
    }
  });

  return <div>{data_form}</div>;
}

export function notionForm(v) {
  switch (v.type) {
    case 'divider': {
      return <hr className="notion-hr" />;
    }
    case 'heading_1': {
      return repeatText(v.heading_1.text, v.id, 'h1', 'heading_1');
    }
    case 'heading_2': {
      return repeatText(v.heading_2.text, v.id, 'h2', 'heading_2');
    }
    case 'heading_3': {
      return repeatText(v.heading_3.text, v.id, 'h3', 'heading_3');
    }
    case 'paragraph': {
      return repeatText(v.paragraph.text, v.id, 'p', 'notion-blank');
    }
    case 'image': {
      console.log('image', v);
      return <img className="notion-image" key={v.id} src={v.image.file.url} />;
    }
    case 'child_database': {
      return (
        <div className="notion-collection-header">
          <div className="notion-collection-header-title" key={v.id}>
            {v.child_database.title}
          </div>
        </div>
      );
    }
  }
}

function mkStyle(annotations, text, idx) {
  let style = [];
  let add_class_name = [];
  let result = text;
  if (annotations) {
    if (annotations.italic) style.push('fontStyle: "italic"');
    if (annotations.strikethrough)
      style.push('textDecorationLine: "line-through"');
    if (annotations.underline) style.push('textDecorationLine:"underline"');
    if (annotations.code) add_class_name.push('notion-inline-code');
    if (annotations.color !== 'default')
      add_class_name.push('notion-' + annotations.color);

    if (add_class_name.length) {
      style = style.join(',');
      add_class_name.forEach((v, i) => {
        if (i === 0)
          result = (
            <span className={v} style={{ style }}>
              {result}
            </span>
          );
        else result = <span className={v}> {result} </span>;
      });
    }
    if (annotations.bold) return <b key={idx}>{result}</b>;
    else return <span key={idx}>{result}</span>;
  }
  return result;
}

function repeatText(text, id, Tag, className) {
  let paragraph_text = mkStyle(text.annotations, text.plain_text, id);
  if (text[0]) {
    paragraph_text = text.map((value, idx) => {
      return mkStyle(value.annotations, value.plain_text, idx);
    });
  }
  return (
    <Tag className={className} key={id}>
      {paragraph_text}{' '}
    </Tag>
  );
}

export async function getChildren(id) {
  const data = await client.get(
    '/blocks?resume=false&notionform=false&id=' + id
  );
  console.log('[getChildren]', data);
  return data.data;
}

export function getTitle(title) {
  return (
    <div>
      <div className="notion-page-cover">
        <img
          className="notion-page-cover"
          src={title.cover.external.url}
          alt="page-cover"
        ></img>
      </div>
      <div className="notion-page">
        <div className="notion-page-has-cover">
          <div className="notion-page-icon-wrapper">
            <span className="notion-page-icon">{title.icon.emoji}</span>
          </div>
        </div>
        <div className="notion-title">
          {title.properties.title.title[0].plain_text}
        </div>
      </div>
    </div>
  );
}
