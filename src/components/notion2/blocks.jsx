import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import BlockTypeBridge from './block_type/block_type_bridge';
import {
  BulletedListItem,
  ListItem,
  NumberedListItem,
} from './block_type/list_item';

const Blocks = ({ data }) => {
  const blocks = [];
  const list = { type: '', list_item: [] };
  const onMakeBlocks = (data, type, id) => {
    console.log('onMakeBlocks', type);
    type === 'bulleted_list_item' || type === 'numbered_list_item'
      ? onAddList(data, type, id)
      : onAddBlocks(data, id);
  };

  const onAddBlocks = (data, id) => {
    if (list.type === '') {
      blocks.push(<BlockTypeBridge data={data} id={id} />);
    } else {
      console.log('list_item', list.list_item);
      list.type === 'bulleted_list_item'
        ? blocks.push(
            <BulletedListItem id={id}>
              {list.list_item.map((v) => v)}
            </BulletedListItem>
          )
        : blocks.push(
            <NumberedListItem id={id}>
              {list.list_item.map((v) => v)}
            </NumberedListItem>
          );
      list.type = '';
      list.list_item = [];
    }
  };

  const onAddList = (data, type, id) => {
    if (list.type === '') {
      list.type = type;
      list.list_item.push(<ListItem data={data} list_type={type} />);
    } else {
      if (list.type === type)
        list.list_item.push(<ListItem data={data} list_type={type} />);
      else onAddBlocks(data, id);
    }
  };

  data && data.forEach((data_, id) => onMakeBlocks(data_, data_.type, id));
  return <div>{blocks.map((v) => v)}</div>;
};

export default Blocks;
