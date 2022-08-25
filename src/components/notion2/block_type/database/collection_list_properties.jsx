import React from 'react';

const CollectionListProperties = ({ properties, key }) => {
  if (!properties || !properties[properties.type])
    return <span className="" key={key} />;
  else return <Properties properties={properties} />;
};

const Properties = (properties) => {
  switch (properties.type) {
    case 'title':
      return <Title properties={properties} />;
    case 'multi_select':
      return <MultiSelect properties={properties} />;
    case 'select':
      return <Select properties={properties} />;
    case 'date':
      return <Data properties={properties} />;
    case 'rich_text':
      return <RichText properties={properties} />;
    default:
      return <Default properties={properties} />;
  }
};

const Title = ({ properties }) => {
  let emoji = '';
  if (properties.icon !== null) emoji = properties.icon.emoji;
  return (
    <div className="notion_colletion_list_title" key="title">
      <span className="notion_colletion_list_emoji"> {emoji}</span>
      <span className="notion_colletion_list_title">{properties.title}</span>
    </div>
  );
};

const MultiSelect = ({ properties }) => (
  <div
    className="notion_colletion_list_property_item notion_multi_select_item"
    key={properties.id}
  >
    {properties.multi_select.map((multi_select) => (
      <p
        className={`notion_select_item notion_select_item_${multi_select.color}`}
        key={multi_select.id}
      >
         {multi_select.name} 
      </p>
    ))}
  </div>
);

const Select = ({ properties }) => (
  <div
    className={
      'notion_colletion_list_property_item notion_select_item notion_select_item_' +
      properties.select.color
    }
    key={properties.id}
  >
     {properties.select.name} 
  </div>
);

const Data = ({ properties }) => (
  <div
    className="notion_colletion_list_property_item notion_property_date "
    key={properties.id}
  >
    {properties.date.start
      ? properties.date.start + '→' + properties.date.end
      : properties.date}
  </div>
);

const RichText = ({ properties }) => (
  <div className="notion_colletion_list_property_item" key={properties.id}>
    {properties.rich_text[0] ? properties.rich_text[0].plain_text : ''}
  </div>
);

const Default = ({ properties }) => (
  <div className="notion_colletion_list_property_item" key={properties.id}>
    {properties.name}
  </div>
);

export default CollectionListProperties;
