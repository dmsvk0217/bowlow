import React, { useState, useEffect } from "react";
import EventComponent from "../common/List/EventComponent";
import "./EventPage.css";
import { getEvents } from "../../_actions/event_action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function EventPage() {
  const dispatch = useDispatch();

  const [events, setevents] = useState(null);

  useEffect(() => {
    dispatch(getEvents()).then((response) => {
      console.log(response.payload);
      setevents(response.payload);
    });
  }, []);

  return (
    <div className="container">
      <div className="marginDiv80"></div>
      <div className="content">
        <div className="createBtn">
          <Link to="./create">글쓰기</Link>
        </div>
        <ul>
          <li className="topList">
            <div className="topList__name">공지</div>
            <div className="topList__title">신상품 5% 할인 이벤트</div>
          </li>
        </ul>
        {events &&
          events.map((event, index) => (
            <EventComponent key={index} event={event} />
          ))}
      </div>
    </div>
  );
}

export default EventPage;
