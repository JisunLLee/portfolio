import React from 'react';

const CollectionTableHeader = (header) => {
  let src;
  switch (header.type) {
    case 'title': {
      src = 'aa.svg';
      break;
    }
    case 'select': {
      src = 'arrow.svg';
      break;
    }
    case 'multi_select': {
      src = 'list.svg';
      break;
    }
    case 'date': {
      src = 'calender.svg';
      break;
    }
    case 'rich_text': {
      src = 'article.svg';
      break;
    }
    default:
      src = 'question.svg';
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

export default CollectionTableHeader;