import { useState } from 'react';
import { style } from './NotionForm';

export const Toggle = ({ data }) => {
  const [isOpen, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle((state) => !state);
  };
  console.log('Toggle Data', data);
  return (
    <div className="notion_toggle_wrap ">
      <ToggleHeader isOpen={isOpen} onoff={toggleButton} data={data} />
      {data.childrenForm && (
        <ToggleDetail isOpen={isOpen} body={data.childrenForm} />
      )}
    </div>
  );
};

const ToggleHeader = ({ isOpen, onoff, data }) => {
  const header = data.toggle.text.map((header_) => {
    return style(header_.annotations, header_.plain_text, data.idx);
  });
  return (
    <div className="notion_toggle_header" key={data.id}>
      <span className="notion_toggle_header_icon" onClick={onoff}>
        {isOpen ? ' ▼ ' : ' ►'}
      </span>
      {header}
    </div>
  );
};

const ToggleDetail = ({ isOpen, body }) => {
  return (
    <div
      className={isOpen ? 'notion_toggle_body' : 'notion_toggle_body_hide'}
      key={body.id}
    >
      {body}
    </div>
  );
};
