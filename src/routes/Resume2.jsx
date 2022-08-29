import React, { useEffect, useState } from 'react';
import ColumnList from '../components/notion2/block_type/column_list';
import Title from '../components/notion2/title';
import NotionService from '../service/notion_service';
import '../components/notion2/notion_styles_l.css';
import Blocks from '../components/notion2/blocks';
const Resume2 = (props) => {
  const notion = new NotionService();
  const main_url = 'resume';
  const [title, setTitle] = useState({
    cover: {
      external: {
        url: '',
      },
    },
    icon: {
      emoji: '🏄🏻‍♀️',
    },
    title: {
      title: [{ plain_text: '이지선 | RESUME' }],
    },
  });
  const [info, setInfo] = useState();
  const [introduce, setIntroduce] = useState();
  const [career, setCareer] = useState();
  const [goodby, setGoodby] = useState();

  useEffect(async () => {
    await notion.onGetData(main_url, '/title', '제목', setTitle);
    await notion.onGetData(main_url, '/contents?type=info', 'INFO', setInfo);
    await notion.onGetData(
      main_url,
      '/contents?type=introduce',
      '소개',
      setIntroduce
    );
    await notion.onGetData(
      main_url,
      '/contents?type=career',
      '경력',
      setCareer
    );
    await notion.onGetData(
      main_url,
      '/contents?type=goodby',
      '마무리',
      setGoodby
    );
  }, []);

  return (
    <div className="notion">
      <Title data={title} />
      <div className="notion-page">
        <div className="notion-page-content">
          <ColumnList data={info} />
          <Blocks data={introduce} />
          <Blocks data={career} />
          <Blocks data={goodby} />
        </div>
      </div>
    </div>
  );
};

export default Resume2;
