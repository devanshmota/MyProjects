import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-2 home allcards">
            <div className="row">
              <div className="col-sm-6 d-flex align-items-center justify-content-center mt-4">
                <div className="home card">
                  <img src={process.env.PUBLIC_URL + "/gituserfinder.jpg"} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Github User Finder</h5>
                    <Link to="/githubuserfinder" class="btn btn-primary">See More</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 d-flex align-items-center justify-content-center mt-4">
                <div className="home card">
                  <img src={process.env.PUBLIC_URL + "/calculator.jpg"} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Calculator</h5>
                    <Link to="/calculator" class="btn btn-primary">See More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 d-flex align-items-center justify-content-center mt-4">
                <div className="home card">
                  <img src={process.env.PUBLIC_URL + "/todo.jpg"} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">ToDo App</h5>
                    <Link to="/todoapp" class="btn btn-primary">See More</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 d-flex align-items-center justify-content-center mt-4">
                <div className="home card">
                  <img src={process.env.PUBLIC_URL + "/textanalyzer.jpg"} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Text Analyzer</h5>
                    <Link to="/textanalyzer" class="btn btn-primary">See More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

