import React from "react";
import List from "../common/List/List";
import lists from "../common/List/NoticeList";
import "./Event.css";

function Event() {
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
        {lists.map((list, index) => (
          <List key={index} list={list} />
        ))}
      </div>
    </div>
  );
}

export default Event;
