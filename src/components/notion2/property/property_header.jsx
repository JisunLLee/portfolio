import React from 'react';

const PropertyHeader = ({ header }) => {
  const src = property_header_icon[header.type]
    ? property_header_icon[header.type]
    : property_header_icon.default;

  return (
    <div className="notion-page-property-header">
      <img className="notion-page-property-header_icon" src={src} />
      <span className="notion-page-propert-header_title">{header.name}</span>
    </div>
  );
};

const property_header_icon = {
  title: 'aa.png',
  select: 'arrow.png',
  multi_select: 'list.png',
  date: 'calender.png',
  rich_text: 'article.png',
  default: 'question.png',
};
export default PropertyHeader;
