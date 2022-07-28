import { useEffect, useState } from 'react';
import '../components/notion-styles.css';
import '../components/notion/notion_style_by_lucia.css';
import { getNotion } from '../Utils';
import useAxios from '../API/useAxios';
import { Blocks, resumeInfo, resumeCareer } from '../components/notion/Blocks';
import { getTitle } from '../components/notion/Title';
import { collection_list } from '../components/notion/Database';
import { Divider } from '../components/notion/NotionForm';
import ResumeDetail from './ResumeDetail';
import Modal from 'react-modal';
export default function Resume() {
  return (
    <div className="notion">
      <div className="notion-page-content">
        <div className="notion-app">
          <ResumeTitle />
          <ResumeInfo />
          <Divider />
          <ResumeIntroduce />
          <Divider />
          <ResumeCareer />
          <ResumeGoodby />
        </div>
      </div>
    </div>
  );
}

const ResumeTitle = () => {
  const { loading, data, error } = useAxios(getNotion('resume/title'));
  console.log('[ResumeTitle data]', data);
  let title = getTitle(null);
  if (!loading) title = getTitle(data.data);
  if (error !== null) console.log('error!!', error);
  return title;
};

function ResumeInfo() {
  const { loading, data, error } = useAxios(
    getNotion('resume/contents?type=info')
  );
  let info = 'Info Loading';
  if (!loading) info = resumeInfo(data.data);
  if (error !== null) console.log('error!!', error);
  return <div className="notion-page">{info}</div>;
}

function ResumeIntroduce() {
  const { loading, data, error } = useAxios(
    getNotion('resume/contents?type=introduce')
  );
  let introduce = 'Introduce Loading';
  if (!loading)
    introduce = <Blocks data={data.data} parents_id="ResumeIntroduce" />;
  if (error !== null) console.log('error!!', error);
  return (
    <div className="notion-page" key="ResumeIntroduce">
      {introduce}
    </div>
  );
}

function ResumeCareer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [notion_id, setNotionId] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [career, setCareer] = useState('Career Loading');

  Modal.setAppElement('body');

  const onView = (id) => {
    setNotionId(id);
    setModalIsOpen(true);
  };
  const { loading, data, error } = useAxios(
    getNotion('resume/contents?type=career')
  );

  if (!loading) if (isLoading) setIsLoading(false);
  useEffect(() => {
    if (!isLoading) {
      const career_data = resumeCareer(data.data);
      const db = career_data.map((data) => {
        const title = data.title;
        const children = data.children;
        return collection_list({ title, children, onView });
      });
      setCareer(<div>{db}</div>);
    }
  }, [isLoading]);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'visible';
  }, [modalIsOpen]);

  if (error !== null) console.log('error!!', error);
  return (
    <div className="notion-page">
      {career}
      <Modal
        style={{
          overlay: {
            backgroundColor: 'rgba(108, 126, 126, 0.7)',
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <ResumeDetail notion_id={notion_id} />
      </Modal>
    </div>
  );
}

function ResumeGoodby() {
  const { loading, data, error } = useAxios(
    getNotion('resume/contents?type=goodby')
  );
  let goodby = 'Goodby Loading';
  if (!loading) goodby = <Blocks data={data.data} parents_id="ResumeGoodby" />;
  if (error !== null) console.log('error!!', error);
  return (
    <div className="notion-page" key="ResumeGoodby">
      {goodby}
    </div>
  );
}
