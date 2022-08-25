import React from 'react';

const CollectionTableHeader = (header) => {
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

export default CollectionTableHeader;