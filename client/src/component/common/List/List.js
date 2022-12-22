import React from "react";
import "./List.css";

function List(props) {
  const list = props.list;

  return (
    <ul>
      <li>
        <div className="info__container">
          <div className="number">{list.number}</div>
          <div className="info">
            <div className="title">{list.title}</div>
            <div className="writer__date">
              {list.user}
              <span>| {list.date}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default List;
