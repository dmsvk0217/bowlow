import React from "react";
import Review from "../common/Review/Review";
import "./ReviewPage.css";
import { reviewBest, reviewPhoto } from "../common/Review/ReviewList";
import ReviewText from "../common/Review/ReviewText";

export default function ReviewPage() {
  return (
    <div className="container">
      <div className="content">
        <div className="Review__title">Best Review</div>
        <div className="marginDiv50"></div>
        <div className="grid3">
          {reviewBest.map((review, index) => (
            <Review key={index} review={review} />
          ))}
        </div>
        <div className="marginDiv80"></div>
        <div className="marginDiv50"></div>
        <div className="Review__title">Photo Review</div>
        <div className="marginDiv50"></div>
        <div className="grid4">
          {reviewPhoto.map((review, index) => (
            <Review key={index} review={review} />
          ))}
        </div>
        <div className="marginDiv50"></div>
        <div className="marginDiv80"></div>
        <div className="Review__title">Review</div>
        <div className="marginDiv50"></div>
        <ReviewText />
        <ReviewText />
        <ReviewText />
        <ReviewText />
      </div>
    </div>
  );
}
