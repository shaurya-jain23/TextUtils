import React, { useState } from "react";
// import PropTypes from 'prop-types';

export default function TextForm(props) {
  const handleUpClick = () => {
    let text1 = document.querySelector("#myBox");
    let newtext = text.toUpperCase();
    if (text1.value !== text.toUpperCase()) {
      setText(newtext);
      {
        props.showAlert(
          `Text is converted to UpperCase: ${newtext}`,
          "success"
        );
      }
    } else {
      {
        props.showAlert(`Text is already in UpperCase!!`, "info");
      }
    }
  };
  const handleLoClick = () => {
    let text1 = document.querySelector("#myBox");
    let newtext = text.toLowerCase();
    if (text1.value !== text.toLowerCase()) {
      {
        props.showAlert(
          `Text is converted to LowerCase: ${newtext}`,
          "success"
        );
      }
    } else {
      setText(newtext);
      {
        props.showAlert(`Text is already in LowerCase!!`, "info");
      }
    }
  };
  const handleReClick = () => {
    let newtext = "";
    if (text === "") {
      {
        props.showAlert(`No text to clear!!`, "warning");
      }
    } else {
      setText(newtext);
      {
        props.showAlert(`Text is Cleared!!!`, "success");
      }
    }
  };
  const handleCopyClick = async () => {
    // let text1  = document.querySelector('#myBox');
    // text1.select();
    // text1.setSelectionRange(0, 9999);
    let newtext = text;
    if (newtext !== "") {
      await navigator.clipboard.writeText(newtext);
      props.showAlert(
        `You copied the text to clipboard: ${newtext}`,
        "success"
      );
    } else {
      props.showAlert(`Nothing is copied to clipboard`, "warning");
    }
    // alert("You copied the text to clipboard: " + newtext);
  };

  const handleCaClick = () => {
    let newtext = "";
    let arr = text.split(" ");
    let c = arr.length;
    while (c !== 0) {
      newtext =
        arr[c - 1].charAt(0).toUpperCase() +
        arr[c - 1].substring(1).toLowerCase() +
        " " +
        newtext;
      c--;
    }
    setText(newtext);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleBoldClick = () => {
    let text1 = document.querySelector("#myBox");
    if (text1.style.fontWeight <= 400) {
      text1.style.fontWeight = "900";
    } else if (text1.style.fontWeight >= 400) {
      text1.style.fontWeight = "400";
    }
    let newText = text1.value;
    setText(newText);
  };
  const handleItalicClick = () => {
    let text1 = document.querySelector("#myBox");
    if (text1.style.fontStyle !== "italic") {
      text1.style.fontStyle = "italic";
    } else if (text1.style.fontStyle === "italic") {
      text1.style.fontStyle = "normal";
    }
    let newText = text1.value;
    setText(newText);
  };
  const handleNormalClick = () => {
    let text1 = document.querySelector("#myBox");
    if (text1.style.fontStyle !== "normal") {
      text1.style.fontStyle = "normal";
    } else if (text1.style.fontWeight > "400") {
      text1.style.fontWeight = "400";
    }
    let newText = text1.value;
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>{props.heading}</h2>
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#2c2d33",
            color: props.mode === "light" ? "black" : "white",
          }}
          onChange={handleOnChange}
          rows="10"
        ></textarea>
        <button className="btn btn-primary my-3 " onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-3" onClick={handleReClick}>
          Reset
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCaClick}>
          Capitalized Case
        </button>
        <button className="btn btn-primary my-3 " onClick={handleCopyClick}>
          Copy to Clipboard
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary my-3 " onClick={handleBoldClick}>
          Bold
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          onClick={handleItalicClick}
        >
          Italic
        </button>
        <button className="btn btn-primary my-3" onClick={handleNormalClick}>
          Convert to Normal
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary Here</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes required to read</p>
      </div>
    </>
  );
}

// TextForm.propTypes = {
//     heading: propTypes.string,
// };
