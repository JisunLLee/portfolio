import React from 'react';

const CollectionTableProperties = ({ data }) => {
  if (!data || !data[data.type]) return <td className=""></td>;
  else return property(data);
};

const property = (data) => {
  switch (data.type) {
    case 'title':
      return <Title data={data} />;
    case 'multi_select':
      return <MultiSelect data={data} />;
    case 'select':
      return <Select data={data} />;
    case 'Date':
      return <Date data={data} />;
    case 'rich_text':
      return <RichText data={data} />;

    default:
      return <td className="notion-table-cell ">{data.name}</td>;
  }
};
const Title = ({ data }) => {
  return (
    <td className="notion-table-cell notion-table-cell-title">
      {data.title[0].plain_text}
    </td>
  );
};

const MultiSelect = ({ data }) => {
  const multi_select = data.multi_select.map((multi_select) => {
    const classname = 'notion_select_item_' + multi_select.color;
    return <span className={classname}> {multi_select.name} </span>;
  });

  return (
    <td className="notion-table-cell  notion-property-multi_select">
      {multi_select}
    </td>
  );
};

const Select = ({ data }) => {
  const classname =
    'notion-table-cell  notion-table-cell-select-item notion_select_item_' +
    data.select.color;
  return <td className={classname}> {data.select.name} </td>;
};

const Date = ({ data }) => <td className="notion-table-cell "> {data.date}</td>;

const RichText = ({ data }) => {
  let properties = '';
  properties = data.rich_text[0] ? data.rich_text[0].plane_text : '';
  return <td className="notion-table-cell "> {properties}</td>;
};
export default CollectionTableProperties;
