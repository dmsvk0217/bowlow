import React, { useState, useEffect } from "react";
import Review from "../common/Review/Review";
import "./ReviewPage.css";
import ReviewText from "../common/Review/ReviewText";
import { useDispatch } from "react-redux";
import { getReviews } from "../../_actions/review_action";
import ReviewModal from "./ReviewModal";

export default function ReviewPage() {
  const dispatch = useDispatch();
  const [reviews, setreviews] = useState([]);
  const [bestReviews, setbestReviews] = useState([]);
  const [photoReviews, setphotoReviews] = useState([]);
  const [textReviews, settextReviews] = useState([]);

  const [modalReview, setmodalReview] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getReviews()).then((response) => {
      console.log(response.payload);
      setreviews(response.payload);
    });
  }, []);

  useEffect(() => {
    const getbestReviews = reviews.filter((review) => {
      return review.isBest == 1;
    });
    setbestReviews(getbestReviews.slice(0, 6));
    const getphotoReviews = reviews.filter((review) => review.image != null);
    setphotoReviews(getphotoReviews.slice(0, 8));
    const gettextReviews = reviews.filter((review) => review.image == null);
    settextReviews(gettextReviews.slice(0, 4));
  }, [reviews]);

  //스크롤 위치 가져오기
  useEffect(() => {
    window.addEventListener("scroll", () => {});
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      {modalOpen && (
        <ReviewModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          modalReview={modalReview}
        />
      )}
      <div className="container">
        <div className="content">
          <div className="Review__title">Best Review</div>
          <div className="marginDiv50"></div>
          <div className="grid3">
            {/* 6개 */}
            {bestReviews.map((review, index) => (
              <Review
                key={index}
                review={review}
                setmodalReview={setmodalReview}
                setModalOpen={setModalOpen}
              />
            ))}
          </div>
          <div className="marginDiv80"></div>
          <div className="marginDiv50"></div>
          <div className="Review__title">Photo Review</div>
          <div className="marginDiv50"></div>
          <div className="grid4">
            {/* 8개 */}
            {photoReviews.map((review, index) => (
              <Review
                key={index}
                review={review}
                setmodalReview={setmodalReview}
                setModalOpen={setModalOpen}
              />
            ))}
          </div>
          <div className="marginDiv50"></div>
          <div className="marginDiv80"></div>
          <div className="Review__title">Review</div>
          <div className="marginDiv50"></div>
          {/* 4개 */}
          {textReviews.map((review, index) => (
            <ReviewText key={index} review={review} />
          ))}
        </div>
      </div>
    </>
  );
}
