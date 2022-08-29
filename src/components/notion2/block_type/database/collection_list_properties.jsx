import React from 'react';

const CollectionListProperties = ({ properties }) => {
  if (!properties || !properties[properties.type]) {
    return <span className="" key={properties.id} />;
  } else return <Properties properties={properties} />;
};

const Properties = ({ properties }) => {
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
    <div
      className="notion-list-item-title notion-collection-column-title"
      key="title"
    >
      <span className="notion-collection-column-title-icon"> {emoji}</span>
      <span className="">{properties.title}</span>
    </div>
  );
};

const MultiSelect = ({ properties }) => (
  <div className="notion-property-multi_select" key={properties.id}>
    {properties.multi_select.map((multi_select) => (
      <p
        className={`notion-property-multi_select-item notion-${multi_select.color}_background`}
        key={multi_select.id}
      >
         {multi_select.name} 
      </p>
    ))}
  </div>
);

const Select = ({ properties }) => (
  <div className={'notion-property-select-item'} key={properties.id}>
    <div className={'notion-' + properties.select.color + '_background'}>
       {properties.select.name} 
    </div>
  </div>
);

const Data = ({ properties }) => (
  <div className="notion-property-date" key={properties.id}>
    {properties.date.start
      ? properties.date.start + '→' + properties.date.end
      : properties.date}
  </div>
);

const RichText = ({ properties }) => (
  <div className="notion-property" key={properties.id}>
    {properties.rich_text[0] ? properties.rich_text[0].plain_text : ''}
  </div>
);

const Default = ({ properties }) => (
  <div className="notion-property" key={properties.id}>
    {properties.name}
  </div>
);

export default CollectionListProperties;
