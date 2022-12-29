import React, { useState, useEffect } from "react";
import "./CartPage.css";
import CartOne from "../common/CartOne/CartOne";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../../_actions/cart_action";

function CartPage() {
  const dispatch = useDispatch();
  const [carts, setcarts] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const user_id = useSelector((state) => state.user.userData.user.id);
  const getCartsList = useSelector((state) => state.cart);

  useEffect(() => {
    setcarts(getCartsList);
    console.log("getCartsList 변경 : ", getCartsList);
  }, [getCartsList]);

  useEffect(() => {
    console.log("carts 변경 : ", carts);
    settotalPrice(0);
    carts.map((cart) => {
      settotalPrice((prev) => {
        console.log(
          "🚀 ~ file: CartPage.js:24 ~ settotalPrice ~ parseInt(cart.price)",
          parseInt(cart.price)
        );
        console.log(
          "🚀 ~ file: CartPage.js:24 ~ settotalPrice ~ parseInt(prev)",
          parseInt(prev)
        );
        console.log(
          "cart.price + prev : ",
          parseInt(prev) + parseInt(cart.price)
        );
        return parseInt(prev) + parseInt(cart.price);
      });
    });
  }, [carts]);

  return (
    <div className="container">
      <div className="content">
        <div className="order_top">
          <p>가용적립금 : 0P </p>
          <p>예치금 : 0원 </p>
          <p> 쿠폰 : 1개</p>
        </div>
        <div className="border_div"></div>
        {carts &&
          carts?.map((cart) => {
            return <CartOne cart={cart} />;
          })}
        <div className="cart_total">
          <div className="total_flex">
            <span>PRICE</span>
            <div className="total_right">
              KRW
              {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
          <div className="total_flex">
            <span>SHIPPING</span> <div className="total_right">+ KRW 0</div>
          </div>
          <div className="total_flex">
            <span>TOTAL</span>
            <div className="total_right">
              KRW
              {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
        </div>
        <button className="cart_button">Order</button>
      </div>
    </div>
  );
}

export default CartPage;
