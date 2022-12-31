import { useEffect, useRef, useState } from "react";
import "./ReviewModal.css";

function ReviewModal(props) {
  const setModalOpen = props.setModalOpen;
  const review = props.modalReview;

  // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
  const closeModal = () => {
    setModalOpen(false);
  };

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef(null);

  useEffect(() => {
    console.log("[reveiw modal] : ", review);
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
      <div className="img_container">
        <img src={review?.image} alt={review?.image} />
      </div>
      <div className="content_container">
        <button className="close" onClick={closeModal}>
          X
        </button>
        <div className="review__product">
          <img
            className="review__product__image"
            src={review.product_image}
            alt={review.product_image}
          />
          <div className="review__product__detail">
            <div className="review__product__name">{review.product_name}</div>
            <div className="review__product__scoreAndCount">
              <span className="review__gray">평점</span>{" "}
              <span>{review.review_avg_score}</span>
              <span className="marginleft5 review__gray">리뷰 </span>
              <span>{review.review_count}개</span>
            </div>
          </div>
        </div>
        <p>
          제품 리뷰 평점 <span> {review.score} 점</span>
        </p>
        <div className="margin_div10"></div>
        {/* width 고정값 주기 */}
        <p className="review_content">{review.review_content}</p>
        {/* 굵게 */}
        <span className="review_user_name">{review.user_name}</span>
        <span className="review_user_date"> {review.review_date}</span>
        <p className="sizeAndColor">[사이즈/색상]</p>
        <div className="review__help review__gray">
          <img
            className="review_heart_icon"
            src="https://saladlab.s3.ap-northeast-2.amazonaws.com/media/images/cafe24_heart_x.png"
            alt=""
          />{" "}
          0명에게 리뷰가 도움이 됐어요!
        </div>
      </div>
    </div>
  );
}
export default ReviewModal;
