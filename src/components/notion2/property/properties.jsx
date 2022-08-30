import React from 'react';
import Divider from '../block_type/divider';
import PropertyBody from './property_body';
import PropertyHeader from './property_header';

const Properties = ({ properties }) => {
  const property_name = properties
    ? Object.keys(properties).filter((e) => e !== 'sort')
    : [];
  const property = property_name.map((header_, id) => {
    if (properties[header_].type !== 'title') {
      const property_ = properties[header_];
      const header = { type: properties[header_].type, name: header_ };
      return (
        <li className="notion-page-property-wrap" key={id}>
          <PropertyHeader header={header} />
          <PropertyBody property_={property_} header={header} />
        </li>
      );
    }
  });
  return (
    <>
      <ul className="notion-page-property"> {property} </ul>
      <Divider />
    </>
  );
};

export default Properties;
