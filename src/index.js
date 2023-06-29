import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./Components/Home";
import { Navigation } from "./Components/Navigation";
import { GithubUserFinder } from "./Components/GithubUserFinder";
import { Calculator } from "./Components/Calculator/Calculator";
import { ToDoApp } from "./Components/ToDoApp/ToDoApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));

// ReactDOM.render(
//   ,
//   document.getElementById("root")
// );

root.render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/githubuserfinder" element={<GithubUserFinder />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/todoapp" element={<ToDoApp />} />

    </Routes>
  </BrowserRouter>
);
