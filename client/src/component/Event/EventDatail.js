import React, { useState, useEffect } from "react";
import "./EventDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent } from "../../_actions/event_action";
function EventDatail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams().id;
  const getEvent = useSelector((state) =>
    state.event.find((event) => event.id == id)
  );

  const [eventOne, seteventOne] = useState(null);

  useEffect(() => {
    seteventOne(getEvent);
  }, [getEvent]);

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteEvent(eventOne));
    navigate("/event", { replace: true });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="createBtn">
          <Link to={`/event/update/${eventOne?.id}`}>수정하기</Link>
          <Link onClick={deleteHandler}>삭제하기</Link>
        </div>
        <div className="event_top">
          <div className="event_title">{eventOne?.title}</div>
          <div className="event_writerAndDate">
            {eventOne?.user_name} | {eventOne?.date}
          </div>
        </div>
        <div className="event_content">{eventOne?.content}</div>
        <button className="event_button" onClick={() => navigate(-1)}>
          List
        </button>
      </div>
    </div>
  );
}

export default EventDatail;
