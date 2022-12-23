import React from "react";
import "./ReviewText.css";

function ReviewText() {
  return (
    <div className="review__text">
      <div className="review__text__left">
        <img
          className="widget_product_image"
          src="http://bowlow.co.kr/web/product/tiny/202212/6ca144eab8078cef8cd1b6cb1cc49f8f.gif"
          alt=""
        />
        <div className="widget_product_name">
          [BOWLOW MADE] 캐시미어 스트라이프 머슬 V넥 니트
        </div>
        <div className="widget_product_price">88,000원</div>
      </div>
      <div className="review__text__middle">
        <div className="review__text__middle__top">
          <div>평점 5점</div>
          <div className="widget_item_username">UserName</div>
          <div className="widget_item_date">2022-12-23</div>
        </div>
        <div className="widget_item_content">
          옷을 몇개 사다보니 너무 마음에 들어서 평소 사고 싶던 개파카를
          주문했는데.. 너무 마음에 듭니다 상담해주시던 분도 너무 친절하시고 옷의
          핏도 옷의 퀄리티도 너무 마음에 듭니다 쇼핑몰 정착이요~~(2022-12-22
          15:50:11 에 등록된 네이버 페이 구매평)
        </div>
        <div className="review__text__middle__bottom">
          <img
            className="widget_comment_img"
            src="https://saladlab.s3.ap-northeast-2.amazonaws.com/media/images/comment.png"
            alt=""
          />
          <p>1</p>
          <img
            className="widget_heart_icon"
            src="https://saladlab.s3.ap-northeast-2.amazonaws.com/media/images/cafe24_heart_x.png"
            alt=""
          />
          <p>2 명</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewText;
