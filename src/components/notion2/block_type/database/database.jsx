import React, { useEffect, useState } from 'react';
import DB_TYPE from './DB_TYPE';
import CollectionListProperties from './collection_list_properties';
import Modal from 'react-modal';
import NotionDetail2 from '../../../../routes/NotionDetail2';

const Database = ({ data, notion }) => {
  // console.log('Database', data);
  const [body, setBody] = useState();

  useEffect(() => {
    data.children
      ? setBody(data.children)
      : getDatabase(data.id, notion, setBody);
  }, [data]);
  const title = data.child_database.title;
  const db_type = DB_TYPE(title);

  return db_type === 'COLLECTION_TABLE' ? (
    <CollectionTable title={title} body={body} />
  ) : (
    <CollectionList id={data.id} title={title} body={body} />
  );
};
export default Database;

const CollectionTable = ({ title, body }) => {
  // console.log('CollectionTable', body);
  return <div>CollectionTable</div>;
};

const CollectionList = ({ title, id, body }) => {
  return (
    <div className="notion-list-collection " key={id}>
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

  // console.log('CollectionListBody', data);
  const body =
    data &&
    data.data.map((body_) => {
      const properties =
        data.headers !== null
          ? data.headers.map((header_, id_) => {
              const properties = body_.properties[header_];
              if (properties.type !== 'title')
                return properties[properties.type] ? (
                  properties[properties.type].length !== 0 && (
                    <div className="notion-list-item-property" key={id_}>
                      <CollectionListProperties properties={properties} />
                    </div>
                  )
                ) : (
                  <div className="notion-list-item-property" key={id_}>
                    <CollectionListProperties properties={properties} />
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
          <CollectionListProperties properties={body_.title} />

          {properties && (
            <div className="notion-list-item-body">{properties}</div>
          )}
        </li>
      );
    });

  return (
    <ul className="notion-list-view ">
      {body}
      <Modal
        style={{
          content: {
            boxShadow: '10px 10px 5px var(--fg-color-1)',
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <NotionDetail2 notion_id={notion_id} />
      </Modal>
    </ul>
  );
};

const getDatabase = (id, notion, setBody) => {
  notion.onGetData('page', `/database?id=${id}`, 'HasChildren', setBody);
};
