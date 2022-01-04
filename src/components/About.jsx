import React, { useState, useEffect } from "react";
import axios from "axios";
// import React from "react";
import "./notion-styles.css";
import { mkBlocks } from "../API/mkNotionForm";
const client = axios.create({
  baseURL: "http://localhost:3003",
});

export default function About() {
  return (
    <div className="notion">
      <div className="notion-page-content">
        <div className="notion-app">
          <Title />
          <NotionBlocks />
        </div>
      </div>
    </div>
  );
}

function Title() {
  const [title, setTitle] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await client.get("/title?resume=true");
      setTitle(response.data);
    }
    fetchData();
  }, []);
  if (!title)
    return (
      <div>
        <div className="notion-page-cover"></div>
        <div className="notion-page">
          <div className="notion-title">title loading!</div>
        </div>
      </div>
    );

  return (
    <div>
      <div className="notion-page-cover">
        <img
          className="notion-page-cover"
          src={title.cover.external.url}
          alt="page-cover"
        ></img>
      </div>
      <div className="notion-page">
        <div className="notion-page-has-cover">
          <div className="notion-page-icon-wrapper">
            <span className="notion-page-icon">{title.icon.emoji}</span>
          </div>
        </div>
        <div className="notion-title">
          {title.properties.title.title[0].plain_text}
        </div>
      </div>
    </div>
  );
}

function NotionBlocks() {
  const [blocks, setBlocks] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await client.get("/blocks?resume=true&notionform=false");
      setBlocks(mkBlocks(response.data));
    }
    fetchData();
  }, []);

  if (!blocks) return <div className="notion-page">detail loading!</div>;
  return <div className="notion-page">{blocks}</div>;
}
