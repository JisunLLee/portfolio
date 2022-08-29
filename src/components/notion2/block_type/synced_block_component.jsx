import React, { useEffect, useState } from 'react';
import NotionService from '../../../service/notion_service';
import Blocks from '../blocks';

const SyncedBlockComponent = ({ block_id }) => {
  const [synced_block, setSyncedBlock] = useState();
  const notion = new NotionService();
  useEffect(async () => {
    await notion.onGetData(
      'page',
      `/contents?id=${block_id}`,
      'synced_block',
      setSyncedBlock
    );
  }, [block_id]);

  return (
    <div>
      {synced_block ? <Blocks data={synced_block} id={block_id} /> : 'Loading'}
    </div>
  );
};

export default SyncedBlockComponent;
