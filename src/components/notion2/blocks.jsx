import React from 'react';
import BlockTypeBridge from './block_type/block_type_bridge';
import HasChildren from './block_type/has_children';
import {
  BulletedListItem,
  ListItem,
  NumberedListItem,
} from './block_type/list_item';

const Blocks = ({ data, notion, parents_id }) => {
  const blocks = [];
  const list = { type: '', list_item: [] };

  const onMakeBlocks = (data_, type, id) => {
    const children = data_.has_children && (
      <HasChildren id={data_.id} notion={notion} />
    );

    if (type === 'bulleted_list_item' || type === 'numbered_list_item') {
      onAddList(data_, type, id, children);
      const last_index = data.length - 1;
      if (last_index === id) {
        onAddBlocks({ id });
      }
    } else {
      onAddBlocks({ data_, id, children });
    }
  };

  const onAddBlocks = ({ data_, id, children }) => {
    if (list.type !== '') {
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
    data_ &&
      blocks.push(
        <BlockTypeBridge
          data={data_}
          id={parents_id}
          children={children}
          notion={notion}
        />
      );
  };

  const onAddList = (data_, type, id, children) => {
    if (list.type === '') {
      list.type = type;
      list.list_item.push(
        <ListItem data={data_} list_type={type} children={children} />
      );
    } else {
      if (list.type === type)
        list.list_item.push(
          <ListItem data={data_} list_type={type} children={children} />
        );
      else onAddBlocks({ data_, id });
    }
  };

  data && data.forEach((data_, id) => onMakeBlocks(data_, data_.type, id));
  return <div className="notion-block">{blocks.map((v) => v)}</div>;
};

export default Blocks;
