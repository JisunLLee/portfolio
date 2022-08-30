import React from 'react';
import Date from './date';
import MultiSelect from './multi_select';
import RichText from './rich_text';
import Select from './select';

const PropertyBody = ({ property_, header }) => {
  switch (property_.type) {
    case 'multi_select': {
      const multi_select = property_.multi_select.map((data) => (
        <MultiSelect data={data} />
      ));
      return <div className="notion-page-property-body">{multi_select}</div>;
    }

    case 'select': {
      return (
        <div className="notion-page-property-body">
          {property_.select && <Select data={property_.select} />}
        </div>
      );
    }

    case 'date': {
      return (
        <div className="notion-page-property-body">
          {property_.date && <Date data={property_.date} />}
        </div>
      );
    }

    case 'rich_text': {
      return (
        <div className="notion-page-property-body">
          {property_.rich_text && (
            <RichText data={property_.rich_text} key={property_.id} />
          )}
        </div>
      );
    }

    default: {
      return <div>default</div>;
    }
  }
};

export default PropertyBody;
