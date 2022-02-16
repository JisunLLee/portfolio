import React, { useRef } from "react";

export default function Write({ category, src }) {
  if (!src)
    switch (category) {
      case "CAT":
        src = "IMG_0170.PNG";
        break;
      case "DOG":
        src = "IMG_0171.PNG";
        break;
      default:
        src = "IMG_0177.PNG";
        break;
    }

  const input_ref = useRef(null);
  const handleClick = () => {
    input_ref.current?.click();
    console.log("Click");
  };
  return (
    <div className="silence_write_img_wrap">
      <img className="silence_write_img" src={src} />
      <div className="silence_write_btn" onClick={() => handleClick()}>
        사진올리기
        <input
          type="file"
          className="silence_write_input"
          accept="img/*"
          ref={input_ref}
        />
      </div>
    </div>
  );
}
