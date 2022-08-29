import React from 'react';
import { TextWrapSpan } from '../text_wrap';

export const ListItem = ({ data, list_type, children }) => (
  <li className="notion-list" key={data.id}>
    <TextWrapSpan data={data[list_type]} key={data.id} />
    {children}
  </li>
);

export const BulletedListItem = ({ id, children }) => (
  <ul className="notion-list-disc" key={id}>
    {children}
  </ul>
);

export const NumberedListItem = ({ id, children }) => (
  <ol className="notion-list-numbered " key={id}>
    {children}
  </ol>
);
