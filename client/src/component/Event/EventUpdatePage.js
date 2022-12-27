import React, { useState, useEffect } from "react";
import "./EventUpdatePage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEvent } from "../../_actions/event_action";

function EventUpdatePage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams().id;
  const getevent = useSelector((state) =>
    state.event.find((event) => event.id == id)
  );

  const [event, setevent] = useState(null);
  const [title, settitle] = useState(getevent?.title);
  const [content, setcontent] = useState(getevent?.content);

  useEffect(() => {
    setevent(getevent);
  }, [getevent]);

  const updateHandler = () => {
    const dataTosubmit = {
      user_name: getevent.user_name,
      title: title,
      content: content,
      date: new Date(),
      id: id,
    };
    dispatch(updateEvent(event.id, dataTosubmit));
    navigate(`/event/${event.id}`, { replace: true });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="event_top">
          <div className="event_title">
            제목
            <input
              type="text"
              value={title}
              onChange={(e) => settitle(e.currentTarget.value)}
            />
          </div>
          <div className="event_writerAndDate">
            {event?.user_name} | {event?.date}
          </div>
        </div>
        <div className="event_content">
          내용
          <input
            type="text"
            value={content}
            onChange={(e) => setcontent(e.currentTarget.value)}
          />
        </div>
        <button className="event_button" onClick={updateHandler}>
          수정하기완료
        </button>
      </div>
    </div>
  );
}

export default EventUpdatePage;
