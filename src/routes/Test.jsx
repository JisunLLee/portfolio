// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "../components/notion-styles.css";
import ResumeDetail from "./ResumeDetail";
export default function Test() {
  return (
    <div
      style={{
        backgroundColor: "tomato",
        height: "100vh",
      }}
    >
      <Click />
    </div>
  );
}

const Click = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement("body");
  return (
    <div>
      <button onClick={() => setModalIsOpen((prv) => !prv)}>클릭!!!!!!</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          console.log("Close handled");
          setModalIsOpen(false);
        }}
      >
        <ResumeDetail notion_id="beef57b9688e41ba8784885469f94c34" />
      </Modal>
      ;
    </div>
  );
};
