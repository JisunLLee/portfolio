export const getProperty = (properties) => {
  if (!properties) return;
  const property = Object.keys(properties).filter(
    (e) => e !== '\bsort' && e !== 'sort'
  );
  console.log('property', property);
  const property_lines = property.map((header_) => {
    if (properties[header_].type !== 'title') {
      const property_ = properties[header_];
      const header = { type: properties[header_].type, name: header_ };
      return mkPoperty({ property_, header });
    }
  });
  return <PropertyTable bundle_li={property_lines} />;
};

const mkPoperty = ({ property_, header }) => {
  let properties;
  switch (property_.type) {
    case 'multi_select': {
      let multi_select = property_.multi_select.map((multi_select) => {
        return <MultiSelectItem multi_select={multi_select} />;
      });
      if (multi_select.length === 0) {
        multi_select = <MultiSelectItem />;
      }
      properties = (
        <PropertyLine header={header} key={property_.id} body={multi_select} />
      );
      break;
    }
    case 'select': {
      let classname = 'notion_property_body notion_property_body_null';
      let body = '비어 있음';
      if (property_.select) {
        classname =
          'notion_property_body notion_select_item notion_select_item_' +
          property_.select.color;
        body = property_.select.name;
      }
      properties = (
        <PropertyLine header={header} key={property_.id} body={body} />
      );
      break;
    }
    case 'date': {
      let date = '비어 있음';
      if (property_.date) {
        if (property_.date.start)
          date = property_.date.start + '→' + property_.date.end;
        else date = property_.date;
      }

      properties = (
        <PropertyLine header={header} key={property_.id} body={date} />
      );
      break;
    }
    case 'rich_text': {
      let rich_text = '';

      if (property_.rich_text[0]) rich_text = property_.rich_text[0].plain_text;
      properties = (
        <PropertyLine header={header} key={property_.id} body={rich_text} />
      );
      break;
    }

    default:
      properties = (
        <PropertyLine
          header={header}
          key={property_.id}
          body={property_.type + '만들어야 함'}
        />
      );
  }
  return properties;
};

const MultiSelectItem = ({ multi_select }) => {
  let classname = 'notion_property_body_null';
  let body = '비어있음';
  let id = 0;
  if (multi_select) {
    classname =
      'notion_multi_select_item notion_select_item notion_select_item_' +
      multi_select.color;
    body = multi_select.name;
    id = multi_select.id;
  }
  return (
    <p className={classname} key={id}>
       {body} 
    </p>
  );
};

const PropertyLine = ({ header, body, key }) => {
  return (
    <li className="notion_property_line">
      <PropertyHeader header={header} />
      <PropertyBody key={key} body={body} />
    </li>
  );
};
const PropertyTable = ({ bundle_li }) => {
  return <ul className="notion_property_table"> {bundle_li} </ul>;
};
const PropertyHeader = ({ header }) => {
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
    <div className="notion_property_header">
      <img className="notion_property_header_icon" src={src} />
      <span className="notion-property_header-title">{header.name}</span>
    </div>
  );
};
const PropertyBody = ({ key, body }) => {
  let classname = 'notion_property_body';
  if (body === '비어 있음')
    classname = ' notion_property_body notion_property_body_null';
  return (
    <div className={classname} key={key}>
      {body}
    </div>
  );
};
