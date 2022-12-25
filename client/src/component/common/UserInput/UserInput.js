import React from "react";
import "./UserInput.css";

function UserInput(props) {
  const name = props.name;
  const placeholder = props.placeholder;
  const type = props.type;
  const data = props.data;

  const textHandler = (e) => {
    props.setData(e.currentTarget.value);
  };

  return (
    <div className="userInput">
      <p>{name}</p>
      <input
        type={type}
        value={data}
        placeholder={placeholder}
        onChange={textHandler}
      />
    </div>
  );
}

export default UserInput;
