import { useEffect, useRef, useState } from "react";
import OrderOne from "../OrderOne";
import "./ModalBasic.css";
import { useDispatch } from "react-redux";
import { createReview, getReviews } from "../../../_actions/review_action";
import getTimeString from "../../common/getTimeString";
import { useNavigate } from "react-router-dom";

function ModalBasic(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setModalOpen = props.setModalOpen;
  const modalOpen = props.modalOpen;
  const position = props.position;
  const orderToReivew = props.orderToReivew;

  const [score, setscore] = useState(0);
  const [content, setcontent] = useState("");
  const [image, setimage] = useState("");

  const createReviewHandler = () => {
    const dataTosubmit = {
      score: score,
      content: content,
      image: image,
      date: getTimeString(),
      product_id: orderToReivew.product_id,
      review_avg_score: orderToReivew.review_avg_score,
      review_count: orderToReivew.review_count,
    };
    console.log(
      "🚀 ~ file: ModalBasic.js:29 ~ createReviewHandler ~ dataTosubmit",
      dataTosubmit
    );
    dispatch(createReview(dataTosubmit)).then((response) => {
      if (response.payload.crateReviewSuccess) {
        alert("리뷰가 성공적으로 제출되었습니다.");
        closeModal();
        navigate(0);
        return;
      }
      alert("리뷰 제출과정에서 오류가 발생했습니다.");
      return;
    });
  };

  // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
  const closeModal = () => {
    setModalOpen(false);
  };

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };
    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);
    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    // 모달창을 useRef로 잡아준다.
    <div ref={modalRef} className="modal">
      <button className="close" onClick={closeModal}>
        X
      </button>
      <h2>리뷰 작성하기</h2>
      <br />
      <p>주문한 상품정보</p>
      <div className="border_div"></div>
      <OrderOne order={orderToReivew} type={false} className="modal_order" />
      <div className="margin_div20"></div>
      <div className="input_div">
        <p>
          리뷰 점수
          <select
            className="score_select"
            value={score}
            onChange={(e) => setscore(e.target.value)}
          >
            <option value="0">점수를 선택해 주세요</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </p>
      </div>
      <div className="input_div">
        <p>내용</p>
        <textarea
          className="content_text"
          type="text"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        />
      </div>
      <div className="input_div">
        <p>사진</p>
        <input
          className="picture_text"
          type="text"
          value={image}
          onChange={(e) => setimage(e.target.value)}
        />
      </div>
      <button className="modal_button" onClick={createReviewHandler}>
        리뷰 제출하기
      </button>
    </div>
  );
}
export default ModalBasic;
