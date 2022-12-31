import React from "react";
import "./ReviewText.css";

function ReviewText(props) {
  const review = props.review;

  return (
    <div className="review__text">
      <div className="review__text__left">
        <img
          className="widget_product_image"
          src={review.product_image}
          alt=""
        />
        <div className="widget_product_name">{review.product_name}</div>
        <div className="widget_product_price">
          {review.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <span> 원</span>
        </div>
      </div>
      <div className="review__text__middle">
        <div className="review__text__middle__top">
          <div>평점 {review.score}점</div>
          <div className="widget_item_username">{review.user_name}</div>
          <div className="widget_item_date">{review.review_date}</div>
        </div>
        <div className="product__nameAndsize">[사이즈 / 색상]</div>
        <div className="widget_item_content">{review.review_content}</div>
        <div className="review__text__middle__bottom">
          <img
            className="widget_comment_img"
            src="https://saladlab.s3.ap-northeast-2.amazonaws.com/media/images/comment.png"
            alt=""
          />
          <p>0</p>
          <img
            className="widget_heart_icon"
            src="https://saladlab.s3.ap-northeast-2.amazonaws.com/media/images/cafe24_heart_x.png"
            alt=""
          />
          <p>{review.like_count} 명</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewText;
