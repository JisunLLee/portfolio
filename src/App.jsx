import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTitle } from "./API/useTings";
import Home from "./routes/Home";
import About from "./routes/About";
import Resume from "./routes/Resume";
import Navbar from "./routes/Navbar";
import Test from "./routes/Test";
import ResumeDetail from "./routes/ResumeDetail";
import "./components/style.css";
import "./components/notion-styles.css";
import "./components/notion/notion_style_by_lucia.css";
import "./routes/Silence.css";
import SilenceCatDog from "./routes/SilenceCatDog";
import SilenceWrite from "./routes/SilenceWrite";

export default function App() {
  const titleUpdater = useTitle("Hello!");
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/silence" element={<SilenceCatDog />} />
          <Route path="/silence/write" element={<SilenceWrite />} />
          <Route path="/test" element={<Test />} />
          <Route path="/resume/detail/:notion_id" element={<ResumeDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
