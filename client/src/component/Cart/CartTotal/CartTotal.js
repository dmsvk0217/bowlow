import React from "react";
import "./CartTotal.css";

function TotalRight(props) {
  const totalPrice = props.totalPrice;
  const setonOrder = props.setonOrder;

  const onOrderHandler = () => {
    setonOrder(1);
  };

  return (
    <div className="cart_total">
      <div className="total_flex">
        <span>PRICE</span>
        <div className="total_price">
          KRW
          {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
      </div>
      <div className="total_flex">
        <span>SHIPPING</span> <div className="total_price">+ KRW 0</div>
      </div>
      <div className="total_flex">
        <span>TOTAL</span>
        <div className="total_price">
          KRW
          {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
      </div>
      <button className="cart_button" onClick={onOrderHandler}>
        Order
      </button>
    </div>
  );
}

export default TotalRight;
