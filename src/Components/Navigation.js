import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          React Components
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="/components"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                activeClassName="active"
              >
                Components
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/githubuserfinder" className="dropdown-item" activeClassName="active">
                    GitHub User Finder
                  </NavLink>
                  <NavLink to="/calculator" className="dropdown-item" activeClassName="active">
                    Calculator
                  </NavLink>
                  <NavLink to="/todoapp" className="dropdown-item" activeClassName="active">
                    ToDo App
                  </NavLink>
                  <NavLink to="/textanalyzer" className="dropdown-item" activeClassName="active">
                    Text Analyzer
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
