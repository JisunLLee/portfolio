// import axios from "axios";
// import React, { useState, useEffect } from "react";

import React from "react";
// const client = axios.create({
//   baseURL: "http://localhost:3003",
// });

export function mkBlocks(data) {
  console.log("data: ", data);
  const data_form = data.map((v) => {
    if (v.has_children) {
      console.log("v.id", v.id);
      useGetChildren(v.id);

      return <div key={v.id}>칠드런 있답시다! 나중에 넣자아</div>;
    } else {
      return notionForm(v);
    }
  });
  console.log("data_form", data_form);
  return data_form;
}

function notionForm(v) {
  if (v.type === "divider") {
    return <div key={v.id}>-------------------------</div>;
  }
  if (v.type === "heading_1") {
    return repeatText(v.heading_1.text, v.id, "h1", "heading_1");
  }
  if (v.type === "heading_2") {
    return repeatText(v.heading_2.text, v.id, "h2", "heading_2");
  }
  if (v.type === "heading_3") {
    return repeatText(v.heading_3.text, v.id, "h3", "heading_3");
  }
  if (v.type === "paragraph") {
    return repeatText(v.paragraph.text, v.id, "div", "notion-blank");
  }
}

function mkStyle(annotations, text, idx) {
  let style = [];
  let add_class_name = [];
  let result = text;

  if (annotations.italic) style.push('fontStyle: "italic"');
  if (annotations.strikethrough)
    style.push('textDecorationLine: "line-through"');
  if (annotations.underline) style.push('textDecorationLine:"underline"');
  if (annotations.code) add_class_name.push("notion-inline-code");
  if (annotations.color !== "default")
    add_class_name.push("notion-" + annotations.color);

  if (add_class_name.length) {
    style = style.join(",");
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

function repeatText(text, id, Tag, className) {
  if (!text[0])
    return (
      <Tag className={className} key={id}>
        {text.plain_text}
      </Tag>
    );
  else {
    const paragraph_text = text.map((value, idx) => {
      return mkStyle(value.annotations, value.plain_text, idx);
    });
    return (
      <Tag className={className} key={id}>
        {paragraph_text}
      </Tag>
    );
  }
}
function useGetChildren(id) {
  //   const [blocks, setBlocks] = useState(null);
  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await client.get(
  //         "/blocks?resume=false&notionform=false&id=" + id
  //       );
  //       setBlocks(response.data);
  //     }
  //     fetchData();
  //   }, []);
  //   console.log("blocks!!", blocks);
}
