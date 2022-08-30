import React, { useEffect, useState } from 'react';
import DB_TYPE from './DB_TYPE';
import CollectionListProperties from './collection_list_properties';
import Modal from 'react-modal';
import ResumeDetail2 from '../../../../routes/ResumeDetail2';
const Database = ({ data }) => {
  const body = data.children;
  const title = data.child_database.title;
  const db_type = DB_TYPE(title);

  return db_type === 'COLLECTION_TABLE' ? (
    <CollectionTable title={title} body={body} />
  ) : (
    <CollectionList title={title} body={body} />
  );
};
export default Database;

const CollectionTable = ({ title, body }) => <div>CollectionTable</div>;

const CollectionList = ({ title, body }) => {
  return (
    <div className="notion-list-collection ">
      <CollectionTitle title={title} />

      <hr className="notion-hr" />
      <CollectionListBody data={body} />
    </div>
  );
};

const CollectionTitle = ({ title }) => (
  <div className="notion-collection-header ">
    <div className="notion-collection-header-title">{title}</div>
  </div>
);

const CollectionListBody = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [notion_id, setNotionId] = useState();

  const onView = (id) => {
    setModalIsOpen(true);
    setNotionId(id);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'visible';
  }, [modalIsOpen]);

  const body = data.data.map((body_) => {
    const properties =
      data.headers !== null
        ? data.headers.map((header_, key) => {
            const properties = body_.properties[header_];
            if (properties.type !== 'title')
              return (
                <div className="notion-list-item-property">
                  <CollectionListProperties properties={properties} key={key} />
                </div>
              );
          })
        : '';

    return (
      <li
        className="notion-list-item notion-table-of-contents-item"
        key={body_.id}
        onClick={() => onView(body_.id)}
      >
        <CollectionListProperties properties={body_.title} key="0" />

        <div className="notion-list-item-body">{properties}</div>
      </li>
    );
  });

  return (
    <ul className="notion-list-view ">
      {body}
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <ResumeDetail2 notion_id={notion_id} />
      </Modal>
    </ul>
  );
};
