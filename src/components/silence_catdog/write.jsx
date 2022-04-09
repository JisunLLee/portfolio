import React, { useRef, useEffect, useState } from "react";
import useAxios from "../../API/useAxios";

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

  const [imges, setImages] = useState(src);
  const [formData, setFormData] = useState();
  const [isSending, setIsSending] = useState(false);
  const input_ref = useRef(null);
  const isMounted = useRef(true);
  //이미지 찾기 클릭
  const loadImgClick = () => {
    input_ref.current?.click();
  };

  //이미지 선택
  const loadImg = (event) => {
    const img = event.target.files[0];
    const file = new FormData();
    file.append("file", img);
    file.append("type", category);
    setFormData(file);
    const reader = new FileReader();
    reader.onload = () => setImages(reader.result);
    reader.readAsDataURL(img);
  };

  //저장

  const useSave = () => {
    const info = {
      method: "post",
      url: "http://localhost:3003/silence/contents",
      headers: {
        "Content-Type": "file.type",
      },
      data: formData,
    };
    const { loading, data, error } = useAxios(info);
  };

  return (
    <div className="silence_write_wrap">
      <img className="silence_write_img border-grad" src={imges} />
      <div className="silence_write_btn_wrap">
        <div className="silence_write_btn btn-grad " onClick={loadImgClick}>
          사진선택
          <input
            type="file"
            id="silence_write_input"
            className="silence_write_input"
            accept="img/*"
            ref={input_ref}
            onChange={loadImg}
          />
        </div>
        <button className="silence_write_btn  btn-grad" onClick={useSave}>
          올리기
        </button>
      </div>
    </div>
  );
}
