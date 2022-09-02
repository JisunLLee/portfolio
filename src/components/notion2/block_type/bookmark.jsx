import React from 'react';

const Bookmark = ({ data }) => (
  <div className="notion-bookmark ">
    <a href={data.bookmark.url}>{data.bookmark.url}</a>
  </div>
);
export default Bookmark;
