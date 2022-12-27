import React, { useState, useEffect } from "react";
import "./NoticeDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteNotice } from "../../_actions/notice_action";

function NoticeDatail(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams().id;
  const [notice, setnotice] = useState(null);

  const getNotice = useSelector((state) =>
    state.notice.find((notice) => notice.id == id)
  );

  useEffect(() => {
    setnotice(getNotice);
    console.log("--------useEffect on getNotice-------");
    console.log("getNotice : ", getNotice);
    console.log("Notice : ", notice);
    console.log("---------------------------------");
  }, [getNotice]);

  const deleteHandler = (event) => {
    event.preventDefault();
    //event.stopPropagation();
    navigate("/notice", { replace: true });
    dispatch(deleteNotice(notice.id));
  };

  return (
    <div className="container">
      <div className="content">
        <div className="createBtn">
          <Link to={`/notice/update/${notice?.id}`}>수정하기</Link>
          <Link onClick={deleteHandler}>삭제하기</Link>
        </div>
        <div className="notice_top">
          <div className="notice_title">{notice?.title}</div>
          <div className="notice_writerAndDate">
            {notice?.user_name} | {notice?.date}
          </div>
        </div>
        <div className="notice_content">{notice?.content}</div>
        <button className="notice_button" onClick={() => navigate(-1)}>
          List
        </button>
      </div>
    </div>
  );
}

export default NoticeDatail;
