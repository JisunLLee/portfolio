import React from 'react';
import DB_TYPE from './DB_TYPE';
import CollectionListProperties from './collection_list_properties';
const Database = ({ data }) => {
  const children = data.children;
  const title = data.child_database.title;
  const db_type = DB_TYPE(title);

  return db_type === 'COLLECTION_TABLE' ? (
    <CollectionTable title={title} children={children} />
  ) : (
    <CollectionList title={title} children={children} />
  );
};
export default Database;

const CollectionTable = ({ title, children }) => <div>CollectionTable</div>;

const CollectionList = ({ title, children }) => {
  return (
    <div className="notion-page-content" key={title}>
      <div className="notion_collection_view_block">
        <div className="notion-table-header-placeholder "></div>
        <CollectionTitle title={title} />
        <hr className="notion-hr" />
        <CollectionListBody children={children} />
      </div>
    </div>
  );
};

const CollectionTitle = ({ title }) => (
  <div className="notion_collection_title">{title}</div>
);
const CollectionListBody = ({ children }) => {
  const onView = () => console.log('onClick');
  const body = children.data.map((data_) => {
    const properties =
      children.headers !== null
        ? children.headers.map((header_, key) => {
            const properties = data_.properties[header_];
            if (properties.type !== 'title')
              return (
                <CollectionListProperties properties={properties} key={key} />
              );
          })
        : '';

    return (
      <li
        className="notion_colletion_list_tr"
        key={data_.id}
        onClick={() => onView(data_.id)}
      >
        <CollectionListProperties properties={data_.title} key="0" />;
        <div className="notion_colletion_list_properties">{properties}</div>
      </li>
    );
  });

  return <ul className="notion_colletion_list_body">{body}</ul>;
};
