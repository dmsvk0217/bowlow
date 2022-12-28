import React from "react";
import { Link } from "react-router-dom";
import "./CartOne.css";

function CartOne() {
  return (
    <div className="cart_one">
      <Link to="/">
        <img
          src="https://bowlow.co.kr/web/product/medium/202209/7f9102760dae575e67961d0eb43c96f6.webp"
          alt=""
        />
      </Link>
      <div className="cart_content">
        <p>premium ul pocket 셔츠</p>
        <p>옵션 사이즈 및 색상.</p>
        <p>[수량 선택 옵션 추가]</p>
        <p>KRW 80,400</p>
        <p>-</p>
        <br />
        <br />
        <div className="deleteButton">
          <button>X</button>
        </div>
        <div className="total">
          <p>KRW 162,800 </p>
          <p>배송:기본배송 / 무료</p>
        </div>
      </div>
    </div>
  );
}

export default CartOne;
