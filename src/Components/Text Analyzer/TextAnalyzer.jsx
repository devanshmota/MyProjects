import { useState, useEffect } from "react";
import './TextAnalyzer.css'
const TextAnalyzer = () => {
  const [text, setText] = useState("");
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

  const HandleOnChange = (e) => {
    setText(e.target.value);
  };
  
  const Uppercase = () => {
    if(text.trim() === ''){
      alert('Please enter your text')
      return
    }
    setText(text.toUpperCase());
  };

  const Lowercase = () => {
    if(text.trim() === ''){
      alert('Please enter your text')
      return
    }
    setText(text.toLowerCase());
  };

  const CapitalizedCase = () => {
    if (text.trim() === '') {
      alert('Please enter your text');
      return;
    }
    const words = text.split(' ').filter(word => word !== '');
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    const capitalizedParagraph = capitalizedWords.join(' ');
    setText(capitalizedParagraph);
  };

  const Copy = async () => {
    if(text.trim() === ''){
      alert('Please enter your text')
      return
    }
    await navigator.clipboard.writeText(text);
    alert('Text copied to clipboard')
  };

  const Clear = () => {
    if(text.trim() === ''){
      alert('Input field is already cleared')
      return
    }
    setText("");
    const inputField = document.getElementById("textbox");
    inputField.focus();
  }
  return (

    <div className="text-analyzer pt-4 dark">
      <div className="container">

        <div className="row">
          <div className="col-sm-12">
            <div className="heading-dark"><h1 className="mb-3">Enter Your Text To Analayze</h1>
              <div className="form-check form-switch dark_toggle">
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
            <button
              type="button"
              className="btn btn-success mt-3 ms-2"
              onClick={Copy}
            >
              Copy To Clipboard
            </button>
            <button
              type="button"
              className="btn btn-success mt-3 ms-2"
              onClick={Clear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAnalyzer;
