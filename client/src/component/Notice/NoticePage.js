import React, { useState, useEffect } from "react";
import NoticeComponent from "../common/List/NoticeComponent";
import "./NoticePage.css";
import { useDispatch, useSelector } from "react-redux";
import { getNotices } from "../../_actions/notice_action";
import { Link } from "react-router-dom";

function NoticePage() {
  const [notices, setnotices] = useState(null);
  const user_id = useSelector((state) => state.user.userData.user?.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotices())
      .then((response) => {
        setnotices(response.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="marginDiv80"></div>
      <div className="content">
        <div className="createBtn">
          {user_id && <Link to="./create">글쓰기</Link>}
        </div>
        <ul>
          <li className="topList">
            <div className="topList__name">공지</div>
            <div className="topList__title">신상품 5% 할인 이벤트</div>
          </li>
        </ul>
        {notices &&
          notices.map((notice, index) => (
            <NoticeComponent key={index} notice={notice} />
          ))}
      </div>
    </div>
  );
}

export default NoticePage;
