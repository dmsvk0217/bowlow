import React from "react";
import "./GridText.css";

function GridText(props) {
  return (
    <div className="gridText">
      <p>{props.text}</p>
    </div>
  );
}

export default GridText;
