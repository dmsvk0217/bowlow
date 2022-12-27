import React from "react";
import "./List.css";
import { Link } from "react-router-dom";

function EventComponent(props) {
  const eventOne = props.event;

  return (
    <ul>
      <li>
        <div className="info__container">
          <div className="number">{eventOne.id}</div>
          <div className="info">
            <div className="title">
              <Link to={`/event/${eventOne.id}`}>{eventOne.title}</Link>
            </div>
            <div className="writer__date">
              {eventOne.user_name}
              <span> | {eventOne.date}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default EventComponent;
