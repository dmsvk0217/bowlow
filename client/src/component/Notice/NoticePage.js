import React from "react";
import NoticeComponent from "../common/List/NoticeComponent";
import notices from "../common/List/NoticeList";
import "./Notice.css";

function NoticePage() {
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
        {notices.map((notice, index) => (
          <NoticeComponent key={index} notice={notice} />
        ))}
      </div>
    </div>
  );
}

export default NoticePage;
