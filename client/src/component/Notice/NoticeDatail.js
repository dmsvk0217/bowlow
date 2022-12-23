import React from "react";
import "./NoticeDetail.css";
import { useLocation, useNavigate } from "react-router-dom";

function NoticeDatail(props) {
  const location = useLocation(); // 추가된 부분
  const navigate = useNavigate();
  const notice = location.state?.notice; // 추가된 부분

  return (
    <div className="container">
      <div className="content">
        <div className="notice_top">
          <div className="notice_title">{notice.title}</div>
          <div className="notice_writerAndDate">
            {notice.user} | {notice.date}
          </div>
        </div>
        <div className="notice_content">{notice.content}</div>
        <button className="notice_button" onClick={() => navigate(-1)}>
          List
        </button>
      </div>
    </div>
  );
}

export default NoticeDatail;
