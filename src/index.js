import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./Components/Home";
import { Navigation } from "./Components/Navigation";
import { GithubUserFinder } from "./Components/GithubUserFinder";
import { Calculator } from "./Components/Calculator/Calculator";
import { ToDoApp } from "./Components/ToDoApp/ToDoApp";
import TextAnalyzer from "./Components/Text Analyzer/TextAnalyzer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Data/store";

// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));

// ReactDOM.render(
//   ,
//   document.getElementById("root")
// );

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/githubuserfinder" element={<GithubUserFinder />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todoapp" element={<ToDoApp />} />
        <Route path="/textanalyzer" element={<TextAnalyzer />} />
      </Routes>
    </BrowserRouter>
  </Provider>

);
