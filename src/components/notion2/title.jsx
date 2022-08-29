import React from 'react';

const Title = ({ data }) => {
  return data ? (
    <section>
      <img
        className="notion-page-cover"
        src={
          data.cover
            ? data.cover.external.url
            : 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600'
        }
      />
      <div className="notion-page">
        <div className="notion-page-has-cover">
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
  ) : (
    <section>Loading</section>
  );
};

export default Title;
