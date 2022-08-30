import React, { useEffect, useState } from 'react';
import NotionService from '../../../service/notion_service';
import Blocks from '../blocks';

const HasChildren = ({ id, notion }) => {
  const [children, setChildren] = useState();

  useEffect(async () => {
    notion.onGetData('page', `/contents?id=${id}`, 'HasChildren', setChildren);
  }, [id]);
  return <Blocks data={children} notion={notion} />;
};

export default HasChildren;
