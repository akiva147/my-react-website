import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Resume from "./Resume";
import PhotoAlbum from "./PhotoAlbum";
import RickRolled from "./RickRolled";
import AcademicWriting from "./AcademicWriting";
import Posts from "./Posts";
import Navbar from "./Navbar";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="posts" element={<Posts />} />
        <Route path="resume" element={<Resume />} />
        <Route path="photoalbum" element={<PhotoAlbum />} />
        <Route path="rickrolled" element={<RickRolled />} />
        <Route path="academicwriting" element={<AcademicWriting />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
