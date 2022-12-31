import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OrderOne.css";

function OrderOne(props) {
  const order = props.order;
  const setModalOpen = props.setModalOpen;
  const setorderToReivew = props.setorderToReivew;
  const type = props.type;

  // 모달창 노출
  const showModal = () => {
    setorderToReivew(order);
    setModalOpen(true);
  };

  return (
    <div>
      <div className="order_one">
        <Link to="/">
          <img src={order?.product_image} alt="order_product_image" />
        </Link>
        <div className="order_content">
          {type && (
            <div className="creatReviewButton">
              <button onClick={showModal}>리뷰 작성하기</button>
            </div>
          )}
          <p>{order?.name}</p>
          <p>
            수량<span> : {order?.quantity}</span>
          </p>
          <p>
            주문하시는 분<span> : {order?.user_name}</span>
          </p>
          {type && (
            <>
              <p>
                배송지<span> : {order?.address}</span>
              </p>
            </>
          )}
          <p>
            주문일자<span> : {order?.order_date}</span>
          </p>
          {type && (
            <div className="total">
              <p>
                KRW{" "}
                {order?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              <p>배송:기본배송 / 무료</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderOne;
