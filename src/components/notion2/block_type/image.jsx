import React from 'react';

const Image = ({ data }) => (
  <img
    className={
      data.id === '60057400-1036-4d86-92c3-3e3800a9fdb8'
        ? 'notion-resume-info-image '
        : 'notion-image'
    }
    key={data.id}
    src={data.image.file.url}
  />
);
export default Image;
