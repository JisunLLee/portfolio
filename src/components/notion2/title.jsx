import React from 'react';

const Title = ({ data }) => {
  return (
    <section>
      <img className="notion-page-cover" src={data.cover.external.url} />
      <div className="notion-page">
        <div
          className={
            data.cover ? 'notion-page-has-cover' : 'notion-page-no-cover'
          }
        >
          {data.icon ? (
            <div className="notion-page-icon-wrapper">
              <span className="notion-page-icon">{data.icon.emoji}</span>
            </div>
          ) : (
            <div className="notion-page-no-icon" />
          )}
        </div>
        <div className="notion-title">{data.title.title[0].plain_text}</div>
      </div>
    </section>
  );
};
export default Title;
