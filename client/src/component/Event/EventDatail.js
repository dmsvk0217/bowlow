import React from "react";
import "./EventDetail.css";
import { useLocation, useNavigate } from "react-router-dom";

function EventDatail(props) {
  const location = useLocation(); // 추가된 부분
  const navigate = useNavigate();
  const event = location.state?.eventOne; // 추가된 부분

  return (
    <div className="container">
      <div className="content">
        <div className="event_top">
          <div className="event_title">{event.title}</div>
          <div className="event_writerAndDate">
            {event.user} | {event.date}
          </div>
        </div>
        <div className="event_content">{event.content}</div>
        <button className="event_button" onClick={() => navigate(-1)}>
          List
        </button>
      </div>
    </div>
  );
}

export default EventDatail;
