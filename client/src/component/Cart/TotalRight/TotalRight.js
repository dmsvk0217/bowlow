import React from "react";
import "./TotalRight.css";

function TotalRight(props) {
  const totalPrice = props.totalPrice;

  const orderHandler = () => {};

  return (
    <div className="total_right">
      <div className="total_div">
        <div className="total_flex">
          <span className="order_text">총 주문 금액</span>
          <div className="total_price">
            <div>
              KRW {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
        </div>
        <div className="total_flex">
          <div className="order_text">할인 + 부가결제 금액</div>
          <div className="total_price">+ KRW 0</div>
        </div>
        <div className="total_flex">
          <div className="order_text">총 결제금액</div>
          <div className="total_price">
            <span>
              KRW {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
        </div>
      </div>
      <p className="final_text">카드 결제 최종결제 금액</p>
      <h2 className="final_price">
        <span>
          KRW {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </h2>
      <button className="cart_button" onClick={orderHandler}>
        Order
      </button>
    </div>
  );
}

export default TotalRight;
