import React, { useState } from "react";
import UserInput from "../common/UserInput/UserInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../../_actions/event_action";

function EventCreatePage() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const name = useSelector((state) => state.user.userData.user.name);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createHandler = () => {
    let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
    let time = {
      year: today.getFullYear(), //현재 년도
      month: today.getMonth() + 1, // 현재 월
      date: today.getDate(), // 현제 날짜
    };
    let timestring = `${time.year}/${time.month}/${time.date}`;

    const data = {
      user_name: name,
      title: title,
      content: content,
      date: timestring,
    };

    dispatch(createEvent(data)).then((response) => {
      console.log(response.payload);
      if (response.payload.crateEventSuccess) {
        console.log("이벤트 글쓰기 성공입니다.");
        navigate("/event", { replace: true });
        return;
      }
      alert("이벤트 글쓰기를 성공적으로 완료하지 못했습니다.");
    });
  };

  return (
    <div className="container">
      <div className="content">
        <UserInput name="제목" setData={settitle} />
        <UserInput name="내용" setData={setcontent} />
        <button onClick={createHandler}>Submit</button>
      </div>
    </div>
  );
}

export default EventCreatePage;
