import React, { useEffect, useState } from 'react';
import NotionService from '../../../service/notion_service';
const TableOfContents = ({ parents_id }) => {
  const [heading, setHeading] = useState();
  const notion = new NotionService();
  useEffect(async () => {
    notion.onGetData(
      'contents',
      `/table_of_contents?id=${parents_id}`,
      '목차',
      setHeading
    );
  }, [parents_id]);

  console.log('TableOfContents', heading);
  return (
    <div className="" key={parents_id}>
      {heading && <TableForm data={heading} />}
    </div>
  );
};

const TableForm = ({ data }) => {
  const indent = [0, 0];
  const table_of_contents = data.map((data_) => {
    switch (data_.type) {
      case 'heading_1': {
        indent[0] = 10;
        indent[1] = 10;
        return <Table indent="0" data={data_} />;
      }
      case 'heading_2': {
        indent[1] = indent[0] + 10;
        return <Table indent={indent[0]} data={data_} />;
      }
      case 'heading_3': {
        return <Table indent={indent[1]} data={data_} />;
      }
    }
  });
  return table_of_contents;
};

const Table = ({ indent, data }) => {
  const onScroll = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView();
  };

  return (
    <div
      className="notion-table-of-contents"
      style={{ textIndent: indent + 'px' }}
      onClick={() => onScroll(data.id)}
      key={data.id}
    >
      {data.text}
    </div>
  );
};

export default TableOfContents;
