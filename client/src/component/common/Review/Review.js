import React from "react";
import "./Review.css";

function Review(props) {
  const review = props.review;

  return (
    <div className="reviewContainer">
      <img className="review__image" src={review.image} alt={review.image} />
      <div className="reviewAndProductContainer">
        <div className="review">
          <div className="review__top">
            <div className="review__score">별점 5점</div>
            <div className="product__nameAndsize">[사이즈 / 색상]</div>
          </div>

          <div className="reviewContent">{review.review_content}</div>
          <div className="writerAndDate">
            {review.name} {review.review_date}
          </div>
        </div>
        <div className="product">
          <img
            className="product__image"
            src={review.product_image}
            alt={review.product_image}
          />
          <div className="product__detail">
            <div className="product__name">{review.product_name}</div>
            <div className="product__name">
              {review.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              <span> 원</span>
            </div>
            <div className="product__scoreAndCount">
              평점 {review.review_avg_score} 리뷰 {review.review_count}개
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
