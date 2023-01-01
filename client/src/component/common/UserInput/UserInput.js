import React from "react";
import "./UserInput.css";

function UserInput(props) {
  const name = props.name;
  const placeholder = props.placeholder;
  const type = props.type;
  const data = props.data;
  const onChange = props.onChange;

  return (
    <div className="userInput">
      <p>{name}</p>
      <input
        type={type}
        value={data}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default UserInput;
