import React from "react";
import "./List.css";
import { Link } from "react-router-dom";

function NoticeComponent(props) {
  const notice = props.notice;

  return (
    <ul>
      <li>
        <div className="info__container">
          <div className="number">{notice.number}</div>
          <div className="info">
            <div className="title">
              <Link
                to={`/notice/${notice.number}`}
                state={{
                  notice: notice,
                }}
              >
                {notice.title}
              </Link>
            </div>
            <div className="writer__date">
              {notice.user}
              <span>| {notice.date}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default NoticeComponent;