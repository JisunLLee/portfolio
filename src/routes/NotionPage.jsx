import React from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import NotionDetail2 from './NotionDetail2';

const NotionPage = ({ notion_id }) => {
  //   const navigate = useNavigate();

  const match = useMatch('notion/:id');
  console.log('NotionPage', match);
  const id = match ? match.params.id : notion_id;
  //   return <div></div>;
  return <NotionDetail2 notion_id={id} />;
};

export default NotionPage;
