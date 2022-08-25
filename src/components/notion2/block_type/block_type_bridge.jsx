import React from 'react';
import Divider from './divider';
import { Heading1, Heading2, Heading3 } from './heading';
import Parpagraph from './parpagraph';
import Image from './image';
import Database from './database/database';
import ListItem from './list_item';
import TableOfContents from './table_of_contents';
import ColumnList from './column_list';
import Column from './column';
import BlocksComponent from './blocks_component';
import Toggle from './toggle';

const BlockTypeBridge = ({ data, id }) => {
  switch (data.type) {
    case 'divider':
      return <Divider key={id} />;

    case 'heading_1':
      return <Heading1 data={data} />;

    case 'heading_2':
      return <Heading2 data={data} />;

    case 'heading_3':
      return <Heading3 data={data} />;

    case 'paragraph':
      return <Parpagraph data={data} />;

    case 'image':
      return <Image data={data} />;

    case 'child_database':
      return <Database data={data} />;

    case 'synced_block': {
      const synced_from_id = data.synced_block.synced_from.block_id;
      return <BlocksComponent key={data.id} block_id={synced_from_id} />;
    }
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return <ListItem data={data} list_type={data.type} />;

    case 'table_of_contents':
      return <TableOfContents parents_id={id} />;

    case 'toggle':
      return <Toggle key={data.id} data={data} />;

    case 'column_list':
      return <ColumnList data={data} />;

    case 'column':
      return <Column data={data} />;

    default:
      console.log(data.type, ':', data);
      return (
        <h2 className="heading_3" key={data.id}>
          {data.type} 데이터 넣어줘야 함
        </h2>
      );
  }
};

export default BlockTypeBridge;
