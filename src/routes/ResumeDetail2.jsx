import React, { useEffect, useState } from 'react';
import Blocks from '../components/notion2/blocks';
import Title from '../components/notion2/title';
import NotionService from '../service/notion_service';

const ResumeDetail2 = ({ notion_id }) => {
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  console.log('ResumeDetail2', notion_id);
  const notion = new NotionService();
  useEffect(async () => {
    await notion.onGetData('page', `/title?id=${notion_id}`, '제목', setTitle);
    await notion.onGetData(
      'page',
      `/contents?id=${notion_id}`,
      '제목',
      setContents
    );
  }, [notion_id]);
  return (
    <div className="notion">
      <Title data={title} />
      <div className="notion-page">
        <div className="notion-page-content">
          <Blocks data={contents} />
        </div>
      </div>
    </div>
  );
};

export default ResumeDetail2;
