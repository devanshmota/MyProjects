import { useState, useEffect } from "react";
import './TextAnalyzer.css'
const TextAnalyzer = () => {
  const [toggle, setToggle] = useState(false);


  const handleToggle = (e) => {
    const isChecked = e.target.checked;
    setToggle(isChecked);
  };



  useEffect(() => {
    const textAnalyzerElem = document.querySelector(".text-analyzer");

    if (textAnalyzerElem) {
      toggle
        ? textAnalyzerElem.classList.add("darkMode")
        : textAnalyzerElem.classList.remove("darkMode");
    }
  }, [toggle]);


  const [text, setText] = useState("");
  const HandleOnChange = (e) => {
    setText(e.target.value);
  };
  const Uppercase = () => {
    setText(text.toUpperCase());
  };
  const Lowercase = () => {
    setText(text.toLowerCase());
  };
  const CapitalizedCase = () => {
    const words = text.split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedParagraph = capitalizedWords.join(" ");
    setText(capitalizedParagraph);
  };
  return (
    <div className="text-analyzer p-4 dark">
      <div className="heading-dark"><h1 className="mb-3">Enter Your Text To Analayze</h1>
        <div className="form-check form-switch">
          <input
            className="form-check-input me-2"
            checked={toggle}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={handleToggle}
          />
          <label
            className={`form-check-label ${toggle ? "text-white" : "text-black"
              }`}
            htmlFor="flexSwitchCheckDefault"
          >
            Dark Mode
          </label>
        </div>
      </div>


      <textarea
        className={`form-control ${toggle ? "darkMode" : ""}`}
        value={text}
        id="textbox"
        rows="8"
        onChange={HandleOnChange}
      ></textarea>

      <button
        type="button"
        className="btn btn-success mt-3"
        onClick={Uppercase}
      >
        UPPERCASE
      </button>
      <button
        type="button"
        className="btn btn-success mt-3 mx-2"
        onClick={Lowercase}
      >
        lowercase
      </button>
      <button
        type="button"
        className="btn btn-success mt-3"
        onClick={CapitalizedCase}
      >
        Capitalized Case
      </button>
    </div>
  );
};

export default TextAnalyzer;
