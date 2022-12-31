import React, { useState, useEffect } from "react";
import Review from "../common/Review/Review";
import "./ReviewPage.css";
import ReviewText from "../common/Review/ReviewText";
import { useDispatch } from "react-redux";
import { getReviews } from "../../_actions/review_action";

export default function ReviewPage() {
  const dispatch = useDispatch();
  const [reviews, setreviews] = useState([]);
  const [bestReviews, setbestReviews] = useState([]);
  const [photoReviews, setphotoReviews] = useState([]);
  const [textReviews, settextReviews] = useState([]);

  useEffect(() => {
    dispatch(getReviews()).then((response) => {
      console.log("reviewPAge");
      console.log(response.payload);
      setreviews(response.payload);
    });
  }, []);

  useEffect(() => {
    const getbestReviews = reviews.filter((review) => {
      console.log("!!!!!");
      return review.isBest == 1;
    });
    setbestReviews(getbestReviews.slice(0, 6));
    const getphotoReviews = reviews.filter((review) => review.image != null);
    setphotoReviews(getphotoReviews.slice(0, 8));
    const gettextReviews = reviews.filter((review) => review.image == null);
    settextReviews(gettextReviews.slice(0, 4));
  }, [reviews]);

  return (
    <div className="container">
      <div className="content">
        <div className="Review__title">Best Review</div>
        <div className="marginDiv50"></div>
        <div className="grid3">
          {/* 6개 */}
          {bestReviews.map((review, index) => (
            <Review key={index} review={review} />
          ))}
        </div>
        <div className="marginDiv80"></div>
        <div className="marginDiv50"></div>
        <div className="Review__title">Photo Review</div>
        <div className="marginDiv50"></div>
        <div className="grid4">
          {/* 8개 */}
          {photoReviews.map((review, index) => (
            <Review key={index} review={review} />
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
  );
}
