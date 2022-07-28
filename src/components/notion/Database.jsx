import { Link } from 'react-router-dom';

const DB_TYPE = (key) => {
  switch (key) {
    case '데일리 회고 DB':
    case 'Thanks To Today':
    case '1일 루틴':
    case '기술 퀴즈':
    case '오늘의 테스크': {
      return 'COLLECTION_TABLE';
    }
    default:
      return 'LIST';
  }
};

export const Database = ({ title, children, DetailModal }) => {
  const db_type = DB_TYPE(title);
  const contents =
    db_type === 'COLLECTION_TABLE'
      ? collection_table({ title, children, DetailModal })
      : collection_list({ title, children, DetailModal });

  return contents;
};

const collection_table = ({ title, children, DetailModal }) => {
  const headers = children.header.map((header_, i) => {
    return collection_table_header(children.headers[header_]);
  });

  const body = children.data.map((data_) => {
    const row = children.header.map((header_) => {
      return collection_table_properties(data_.properties[header_]);
    });
    return <tr> {row} </tr>;
  });

  return (
    <div className="notion-table-view ">
      <div className="notion-table-header-placeholder "></div>
      <div className="notion_collection_title">{title}</div>
      <table className="notion-table ">
        <thead className="notion-table-header ">
          <tr className="notion-table-header-inner">{headers}</tr>
        </thead>
        <tbody className="notion-table-header-placeholder "></tbody>
        <tbody className="notion-table-body">{body}</tbody>
      </table>
    </div>
  );
};

const collection_table_header = (header) => {
  let src;
  switch (header.type) {
    case 'title': {
      src = 'aa.png';
      break;
    }
    case 'select': {
      src = 'arrow.png';
      break;
    }
    case 'multi_select': {
      src = 'list.png';
      break;
    }
    case 'date': {
      src = 'calender.png';
      break;
    }
    case 'rich_text': {
      src = 'article.png';
      break;
    }
    default:
      src = 'question.png';
  }
  return (
    <th className="notion-table-th">
      <p className="notion-table-view-header-cell-inner notion-collection-column-title-body">
        <img className="notion_collection_table_icon" src={src} />
        <span className="notion-table-cell-title">{header.header}</span>
      </p>
    </th>
  );
};

const collection_table_properties = (data) => {
  if (!data || !data[data.type]) return <td className=""></td>;
  let property;
  switch (data.type) {
    case 'title':
      property = (
        <td className="notion-table-cell notion-table-cell-title">
          {data.title[0].plain_text}
        </td>
      );
      break;
    case 'multi_select': {
      const multi_select = data.multi_select.map((multi_select) => {
        const classname = 'notion_select_item_' + multi_select.color;
        return <span className={classname}> {multi_select.name} </span>;
      });

      property = (
        <td className="notion-table-cell  notion-property-multi_select">
          {multi_select}
        </td>
      );
      break;
    }
    case 'select': {
      const classname =
        'notion-table-cell  notion-table-cell-select-item notion_select_item_' +
        data.select.color;
      property = <td className={classname}> {data.select.name} </td>;
      break;
    }
    case 'Date': {
      property = <td className="notion-table-cell "> {data.date}</td>;
      break;
    }
    case 'rich_text': {
      let properties = '';
      if (data.rich_text[0]) properties = data.rich_text[0].plane_text;
      property = <td className="notion-table-cell "> {properties}</td>;
      break;
    }
    default:
      property = <td className="notion-table-cell ">{data.name}</td>;
  }
  return property;
};
export const collection_list = ({ title, children, onView }) => {
  const body = children.data.map((data_) => {
    const properties =
      children.headers !== null
        ? children.headers.map((header_, key) => {
            const properties = data_.properties[header_];
            if (properties.type !== 'title')
              return collection_list_properties(properties, key);
          })
        : '';
    const row_title = collection_list_properties(data_.title, 0);
    return (
      <li
        className="notion_colletion_list_tr"
        key={data_.id}
        onClick={() => onView(data_.id)}
      >
        {row_title}
        <div className="notion_colletion_list_properties">{properties}</div>
      </li>
    );
  });

  return (
    <div className="notion-page-content" key={title}>
      <div className="notion_collection_view_block">
        <div className="notion-table-header-placeholder "></div>
        <div className="notion_collection_title">{title}</div>
        <hr className="notion-hr" />
        <ul className="notion_colletion_list_body">{body}</ul>
      </div>
    </div>
  );
};

const collection_list_properties = (properties, key) => {
  if (!properties || !properties[properties.type])
    return <span className="" key={key}></span>;
  let property;

  switch (properties.type) {
    case 'title':
      let emoji = '';
      if (properties.icon !== null) emoji = properties.icon.emoji;
      property = (
        <div className="notion_colletion_list_title" key="title">
          <span className="notion_colletion_list_emoji"> {emoji}</span>
          <span className="notion_colletion_list_title">
            {properties.title}
          </span>
        </div>
      );

      break;
    case 'multi_select': {
      const multi_select = properties.multi_select.map((multi_select) => {
        const classname =
          'notion_select_item notion_select_item_' + multi_select.color;
        return (
          <p className={classname} key={multi_select.id}>
             {multi_select.name} 
          </p>
        );
      });
      property = (
        <div
          className="notion_colletion_list_property_item notion_multi_select_item"
          key={properties.id}
        >
          {multi_select}
        </div>
      );
      break;
    }
    case 'select': {
      const classname =
        'notion_colletion_list_property_item notion_select_item notion_select_item_' +
        properties.select.color;
      property = (
        <div className={classname} key={properties.id}>
           {properties.select.name} 
        </div>
      );
      break;
    }
    case 'date': {
      let date = '';
      if (properties.date.start)
        date = properties.date.start + '→' + properties.date.end;
      else date = properties.date;

      property = (
        <div
          className="notion_colletion_list_property_item notion_property_date "
          key={properties.id}
        >
          {date}
        </div>
      );
      break;
    }
    case 'rich_text': {
      let rich_text = '';

      if (properties.rich_text[0])
        rich_text = properties.rich_text[0].plain_text;
      property = (
        <div
          className="notion_colletion_list_property_item"
          key={properties.id}
        >
          {rich_text}
        </div>
      );
      break;
    }
    default:
      property = (
        <div
          className="notion_colletion_list_property_item"
          key={properties.id}
        >
          {properties.name}
        </div>
      );
  }
  return property;
};
