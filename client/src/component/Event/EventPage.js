import React from "react";
import EventComponent from "../common/List/EventComponent";
import events from "../common/List/EventList";
import "./Event.css";

function EventPage() {
  return (
    <div className="container">
      <div className="marginDiv80"></div>
      <div className="content">
        <ul>
          <li className="topList">
            <div className="topList__name">공지</div>
            <div className="topList__title">신상품 5% 할인 이벤트</div>
          </li>
        </ul>
        {events.map((event, index) => (
          <EventComponent key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventPage;
