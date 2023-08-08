import React, { useState } from "react";
import "./Calculator.css";
import * as math from "mathjs";

export function Calculator() {
  var [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleResult = () => {
    try {
      const result = math.evaluate(input).toFixed(2);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };
  const handleClear = () => {
    setInput("");
  };

  return (
    <>
      <div className="full">
        <div className="container text-center calculator">
          <input className="calcInput" type="text" value={input} readOnly /> <br />
          <div className="button-row">
            <button
              onClick={() => {
                handleClick(7);
              }}
            >
              7
            </button>
            <button
              onClick={() => {
                handleClick(8);
              }}
            >
              8
            </button>
            <button
              onClick={() => {
                handleClick(9);
              }}
            >
              9
            </button>
            <button
              onClick={() => {
                handleClick("/");
              }}
            >
              /
            </button>
          </div>
          <div className="button-row">
            <button
              onClick={() => {
                handleClick(4);
              }}
            >
              4
            </button>
            <button
              onClick={() => {
                handleClick(5);
              }}
            >
              5
            </button>
            <button
              onClick={() => {
                handleClick(6);
              }}
            >
              6
            </button>
            <button
              onClick={() => {
                handleClick("*");
              }}
            >
              *
            </button>
          </div>
          <div className="button-row">
            <button
              onClick={() => {
                handleClick(1);
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                handleClick(2);
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                handleClick(3);
              }}
            >
              3
            </button>
            <button
              onClick={() => {
                handleClick("-");
              }}
            >
              -
            </button>
          </div>
          <div className="button-row">
            <button
              onClick={() => {
                handleClick(0);
              }}
            >
              0
            </button>
            <button onClick={handleClear}>C</button>
            <button onClick={handleResult}>=</button>
            <button
              onClick={() => {
                handleClick("+");
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


