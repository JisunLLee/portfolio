import { Database } from './Database';
import { Toggle } from './Toggle';
import Blocks from './Blocks';
import { getNotion } from '../../Utils';
import { TableOfContents } from './TableOfContents';
import useAxios from '../..//API/useAxios';

export const NotionContentsForm = ({ v, parents_id }) => {
  switch (v.type) {
    case 'divider': {
      return <hr className="notion-hr" key={v.id} />;
    }
    case 'heading_1': {
      return (
        <h1 className="notion-h1" id={v.id} key={v.id}>
          {repeatText(v.heading_1.text)}
        </h1>
      );
    }
    case 'heading_2': {
      return (
        <h2 className="notion-h2" id={v.id} key={v.id}>
          {repeatText(v.heading_2.text)}
        </h2>
      );
    }
    case 'heading_3': {
      return (
        <h3 className="notion-h3" id={v.id} key={v.id}>
          {repeatText(v.heading_3.text)}
        </h3>
      );
    }
    case 'paragraph': {
      return (
        <div className="notion-blank" key={v.id}>
          {repeatText(v.paragraph.text)}
          <div className="notion_children" key={v.id}>
            {v.childrenForm}
          </div>
        </div>
      );
    }
    case 'image': {
      return <img className="notion_image" key={v.id} src={v.image.file.url} />;
    }
    case 'child_database': {
      const children = v.children;
      const title = v.child_database.title;
      const child = Database({ title, children });
      return child;
    }
    case 'synced_block': {
      const synced_from_id = v.synced_block.synced_from.block_id;
      return <BlocksComponent block_id={synced_from_id} />;
    }
    case 'bulleted_list_item':
    case 'numbered_list_item': {
      return (
        <li key={v.id}>
          {repeatText(v[v.type].text)}
          <div className="notion_children" key={v.id}>
            {v.childrenForm}
          </div>
        </li>
      );
    }
    case 'table_of_contents': {
      console.log('table_of_contents:', v);
      return <TableOfContents parents_id={parents_id} />;
    }
    case 'toggle': {
      return <Toggle data={v} />;
    }
    case 'column_list': {
      return (
        <div className="notion_row" key={v.id}>
          {v.childrenForm}
        </div>
      );
    }
    case 'column': {
      return (
        <div className="notion_row_item" key={v.id}>
          {v.childrenForm}
        </div>
      );
    }
    default:
      console.log(v.type, ':', v);
      return (
        <h2 className="heading_3" key={v.id}>
          {v.type} 데이터 넣어줘야 함
        </h2>
      );
  }
};

export const column_listForm = (data_form_) => {
  if (data_form_.children.length) {
    const children = data_form_.children.map((children_) => {
      const children_contents = children_.contents.map((children_contents_) => {
        return NotionContentsForm(children_contents_);
      });
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
    return <div key={data_form_.id}> Missing children_contents_</div>;
  }
};

export function style(annotations, text, idx, href) {
  if (!annotations) return text;
  let style = [];
  let add_class_name = [];
  let result = text;

  if (annotations.italic) style.push('fontStyle: "italic"');
  if (annotations.strikethrough)
    style.push('textDecorationLine: "line-through"');
  if (annotations.underline) style.push('textDecorationLine: "underline"');
  if (annotations.code) add_class_name.push('notion-inline-code');
  if (annotations.color !== 'default')
    add_class_name.push('notion-' + annotations.color);

  if (add_class_name.length) {
    style = style.join(',');
    add_class_name.forEach((v, i) => {
      if (i === 0)
        result = (
          <span className={v} key={i} style={{ style }}>
            {result}
          </span>
        );
      else
        result = (
          <span className={v} key={i}>
            {result}
          </span>
        );
    });
  }
  if (href)
    result = (
      <a href={href} target="_blank" className="notion-link ">
        {result}
      </a>
    );
  if (annotations.bold) return <b key={idx}>{result}</b>;
  else return <span key={idx}>{result}</span>;
}

export function repeatText(text) {
  let paragraph_text;
  if (text[0]) {
    paragraph_text = text.map((value, idx) => {
      return style(value.annotations, value.plain_text, idx, value.href);
    });
  } else
    paragraph_text = style(
      text.annotations,
      text.plain_text,
      text.id,
      text.href
    );
  return paragraph_text;
}

function BlocksComponent({ block_id }) {
  const { loading, data, error } = useAxios(
    getNotion(`contents?id=${block_id}`)
  );
  let block_data = 'is Loading';
  if (!loading) block_data = <Blocks data={data.data} parents_id={block_id} />;
  if (error !== null) console.log('error!!', error);
  return <div key={block_id}>{block_data}</div>;
}

export const Divider = () => {
  return (
    <div className="notion-page">
      <div className="notion-blank " />
      <hr className="notion-hr" />
      <div className="notion-blank " />
    </div>
  );
};
