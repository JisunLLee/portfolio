import React, { useEffect, useState } from 'react';
import ColumnList from '../components/notion2/block_type/column_list';
import Title from '../components/notion2/title';
import NotionService from '../service/notion_service';
import '../components/notion2/notion-styles.css';
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
    await onGetData('title', '제목', setTitle);
    await onGetData('contents?type=info', 'INFO', setInfo);
    await onGetData('contents?type=introduce', '소개', setIntroduce);
    await onGetData('contents?type=career', '경력', setCareer);
    await onGetData('contents?type=goodby', '마무리', setGoodby);
  }, []);
  const onGetData = async (sub_url, type, setState) =>
    await notion
      .get(main_url, sub_url, type)
      .then((data) => onResultBranch(data, setState))
      .catch((e) => console.log(e));
  const onResultBranch = (data, setState) => {
    data.result === '성공' && setState(data.data);
    data.result === '실패' && setState(`${data.act}정보 불러오기 오류`);
  };
  return (
    <div className="notion">
      <Title data={title} />
      <div className="notion-page">
        <ColumnList data={info} />
        <Blocks data={introduce} />
        <Blocks data={career} />
        <Blocks data={goodby} />
      </div>
    </div>
  );
};

export default Resume2;
