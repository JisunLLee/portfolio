import React, { useEffect, useState } from 'react';
import Preview from '../preview/preview';

const Other = ({ item, data, user }) => {
  const [random, setRandom] = useState({});
  const [isChange, setIsChange] = useState(true);
  const onColorChange = () => {
    setRandom({ backgroundColor: randomColor(), borderColor: randomColor() });
  };
  const onPhotoChange = () => {
    setRandom({ photo: `${Math.floor(Math.random() * 13) + 1}.PNG` });
  };
  const onColorSet = () => {
    setRandom({
      backgroundColor: data.backgroundColor,
      borderColor: data.borderColor,
    });
  };
  const onPhotoSet = () => {
    setRandom({ photo: data.photo });
  };

  const onSet = () => {
    item === 'COLOR' ? onColorSet() : onPhotoSet();
  };

  const onRandom = () => {
    item === 'COLOR' ? onColorChange() : onPhotoChange();
  };
  isChange &&
    setTimeout(() => {
      setIsChange(false);
      onSet();
    }, 3000);

  useEffect(() => {
    isChange &&
      setTimeout(() => {
        onRandom();
      }, 500);
  }, [random]);

  return <Preview user={user} tarot={{ ...data, ...random }} />;
};

const randomColor = () => {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
};
export default Other;
