import React, { useState, useEffect } from "react";
import "./CartPage.css";
import CartOne from "../common/CartOne/CartOne";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../../_actions/cart_action";

function CartPage() {
  const dispatch = useDispatch();
  const [carts, setcarts] = useState([]);
  console.log("🚀 ~ file: CartPage.js:10 ~ CartPage ~ carts", carts);
  const [totalPrice, settotalPrice] = useState(0);
  const user_id = useSelector((state) => state.user.userData.user.id);
  const getCartsList = useSelector((state) => state.cart);

  console.log("start------");

  useEffect(() => {
    dispatch(getCarts(user_id));
    console.log("초기 랜더링 carts : ", carts);
  }, []);
  useEffect(() => {
    setcarts(getCartsList);
    carts.map((cart) => {
      settotalPrice((prev) => prev + cart.price);
    });

    console.log("getCartsList store 변경!! carts : ", carts);
  }, [getCartsList]);

  console.log("end------");
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
