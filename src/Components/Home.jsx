import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import { ImArrowRight2 } from 'react-icons/im';

export function Home() {
  return (
    <>
      
        <div className="container my-5">
          <div className="row row-gap-4">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="main_card">
                <img src="gituserfinder.jpg" className="card_img" alt="Github User Finder" />
                <div className="card_content">
                  <h5 className="card_title">Github User Finder</h5>
                  <Link to="/githubuserfinder" className="card_btn_wrap">
                    <span className="card_btn">Check It Out</span>
                    <ImArrowRight2 color='white' />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="main_card">
                <img src="calculator.jpg" className="card_img" alt="..." />
                <div className="card_content">
                  <h5 className="card_title">Calculator</h5>
                  <Link to="/calculator" className="card_btn_wrap">
                    <span className="card_btn">Check It Out</span>
                    <ImArrowRight2 color='white' />
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="main_card">
                <img src="todo.jpg" className="card_img" alt="ToDo" />
                <div className="card_content">
                  <h5 className="card_title">ToDo App</h5>
                  <Link to="/todoapp" className="card_btn_wrap">
                    <span className="card_btn">Check It Out</span>
                    <ImArrowRight2 color='white' />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="main_card">
                <img src="textanalyzer.jpg" className="card_img" alt="..." />
                <div className="card_content">
                  <h5 className="card_title">Text Analyzer</h5>
                  <Link to="/textanalyzer" className='card_btn_wrap'>
                    <span className="card_btn">Check It Out</span>
                    <ImArrowRight2 color='white' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

