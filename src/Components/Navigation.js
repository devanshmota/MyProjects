import React from "react";
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          Navbar
        </Link>
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
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>

            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Components
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/githubuserfinder" className="dropdown-item">
                    GitHub User Finder
                  </Link>
                  <Link to="/calculator" className="dropdown-item">
                    Calculator
                  </Link>
                  <Link to="/todoapp" className="dropdown-item">
                    ToDo App
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};
