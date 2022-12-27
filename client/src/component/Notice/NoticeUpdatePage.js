import React, { useState, useEffect } from "react";
import "./NoticeDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateNotice } from "../../_actions/notice_action";

function NoticeUpdatePage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams().id;
  const user_name = useSelector((state) => state.user.userData.user.name);
  const getNotice = useSelector((state) =>
    state.notice.find((notice) => notice.id == id)
  );

  const [notice, setnotice] = useState(null);
  const [title, settitle] = useState(getNotice?.title);
  const [content, setcontent] = useState(getNotice?.content);

  useEffect(() => {
    setnotice(getNotice);
  }, [getNotice]);

  const updateHandler = () => {
    console.log(
      "🚀 ~ file: NoticeUpdatePage.js:16 ~ NoticeUpdatePage ~ user_name",
      user_name
    );
    console.log(
      "🚀 ~ file: NoticeUpdatePage.js:16 ~ NoticeUpdatePage ~ user_name",
      new Date()
    );

    const dataTosubmit = {
      user_name: user_name,
      title: title,
      content: content,
      date: new Date(),
      id: id,
    };
    dispatch(updateNotice(notice.id, dataTosubmit));
    navigate(-1, { replace: true });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="notice_top">
          <div className="notice_title">
            제목
            <input
              type="text"
              value={title}
              onChange={(e) => settitle(e.currentTarget.value)}
            />
          </div>
          <div className="notice_writerAndDate">
            {notice?.user_name} | {notice?.date}
          </div>
        </div>
        <div className="notice_content">
          내용
          <input
            type="text"
            value={content}
            onChange={(e) => setcontent(e.currentTarget.value)}
          />
        </div>
        <button className="notice_button" onClick={updateHandler}>
          수정하기완료
        </button>
      </div>
    </div>
  );
}

export default NoticeUpdatePage;
