import React from "react";
import "../components/notion-styles.css";
import "../components/notion/notion_style_by_lucia.css";
import { getNotion } from "../Utils";
import useAxios from "../API/useAxios";
import { getTitle } from "../components/notion/Title";
import { Blocks } from "../components/notion/Blocks";
import { getProperty } from "../components/notion/Property";
import { Divider } from "../components/notion/NotionForm";

export default function ResumeDetail({ notion_id }) {
  return (
    <div className="notion">
      <div className="notion-page-content">
        <div className="notion-app">
          <Title notion_id={notion_id} />
          <Property notion_id={notion_id} />
          <Divider />
          <Contents notion_id={notion_id} />
        </div>
      </div>
    </div>
  );
}

const Title = ({ notion_id }) => {
  const params = "/title?id=" + notion_id;
  const { loading, data, error } = useAxios(getNotion(params));
  let title = getTitle(null);
  if (!loading) title = getTitle(data.data);
  if (error !== null) console.log("error!!", error);
  return title;
};

const Property = ({ notion_id }) => {
  const params = "/title?id=" + notion_id;
  const { loading, data, error } = useAxios(getNotion(params));
  let property = "Property...Loading";
  if (!loading) property = getProperty(data.data.properties);
  if (error !== null) console.log("error!!", error);
  return <div className="notion-page">{property}</div>;
};

const Contents = ({ notion_id }) => {
  const params = "/contents?id=" + notion_id;
  let contents = "Contents...Loading";
  const { loading, data, error } = useAxios(getNotion(params));
  if (!loading) contents = <Blocks data={data.data} parents_id={notion_id} />;
  if (error !== null) console.log("error!!", error);
  return <div className="notion-page">{contents}</div>;
};
