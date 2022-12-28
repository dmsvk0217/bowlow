import React from "react";
import "./CartPage.css";
import CartOne from "../common/CartOne/CartOne";

function CartPage() {
  return (
    <div className="container">
      <div className="content">
        <div className="order_top">
          <p>가용적립금 : 0P </p>
          <p>예치금 : 0원 </p>
          <p> 쿠폰 : 1개</p>
        </div>
        <div className="border_div"></div>
        <CartOne />
        <CartOne />
        <CartOne />
        <CartOne />
        <div className="cart_total">
          <p>
            <span>PRICE</span>KRW 421,200
          </p>
          <p>
            <span>SHIPPING</span> + KRW 0
          </p>
          <p>
            <span>TOTAL</span> KRW 421,200
          </p>
        </div>
        <button className="cart_button">Order</button>
      </div>
    </div>
  );
}

export default CartPage;
