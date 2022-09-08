import React, { useEffect, useState } from 'react';
import HomeLoading from '../components/loading/home';
import Blocks from '../components/notion2/blocks';
import Properties from '../components/notion2/property/properties';
import Title from '../components/notion2/title';
import NotionService from '../service/notion_service';

const NotionDetail2 = ({ notion_id }) => {
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  const [loading, setLoading] = useState(true);
  const notion = new NotionService();
  useEffect(async () => {
    await notion.onGetData('page', `/title?id=${notion_id}`, '제목', setTitle);
    await notion.onGetData(
      'page',
      `/contents?id=${notion_id}`,
      '내용',
      setContents
    );
  }, [notion_id]);

  useEffect(() => {
    contents && loading && setLoading(false);
  }, [contents]);

  return (
    <div className="notion">
      {loading && <HomeLoading />}
      <Title data={title} />
      <div className="notion-page">
        <Properties properties={title && title.properties} />
        <div className="notion-page-content">
          <Blocks data={contents} parents_id={notion_id} notion={notion} />
        </div>
      </div>
    </div>
  );
};

export default NotionDetail2;
