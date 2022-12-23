import React from "react";
import "./List.css";
import { Link } from "react-router-dom";

function EventComponent(props) {
  const eventOne = props.event;

  return (
    <ul>
      <li>
        <div className="info__container">
          <div className="number">{eventOne.number}</div>
          <div className="info">
            <div className="title">
              <Link
                to={`/event/${eventOne.number}`}
                state={{
                  eventOne: eventOne,
                }}
              >
                {eventOne.title}
              </Link>
            </div>
            <div className="writer__date">
              {eventOne.user}
              <span>| {eventOne.date}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default EventComponent;
