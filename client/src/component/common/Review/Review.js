import React from "react";
import "./Review.css";

function Review(props) {
  const review = props.review;

  return (
    <div className="reviewContainer">
      <img
        className="review__image"
        src={review.reveiwImage}
        alt={review.reveiwImage}
      />
      <div className="reviewAndProductContainer">
        <div className="review">
          <div className="review__top">
            <div className="review__score">별점 5점</div>
            <div className="product__nameAndsize">
              {review.color}/{review.size}
            </div>
          </div>

          <div className="reviewContent">{review.reviewContent}</div>
          <div className="writerAndDate">
            {review.writer} {review.date}
          </div>
        </div>
        <div className="product">
          <img
            className="product__image"
            src={review.productImage}
            alt={review.productImage}
          />
          <div className="product__detail">
            <div className="product__name">{review.productName}</div>
            <div className="product__scoreAndCount">
              평점 {review.productScore} 리뷰 {review.productReviewCount}개
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
