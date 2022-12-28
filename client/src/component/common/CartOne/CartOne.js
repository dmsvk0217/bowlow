import React from "react";
import { Link } from "react-router-dom";
import "./CartOne.css";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../../_actions/cart_action";
import { subCountUser } from "../../../_actions/user_action";

function CartOne(props) {
  const cart = props.cart;
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteCart(cart));
    dispatch(subCountUser());
  };
  return (
    <div className="cart_one">
      <Link to="/">
        <img src={cart.image} alt="cart_product_image" />
      </Link>
      <div className="cart_content">
        <p>{cart.name}</p>
        <p>옵션 사이즈 및 색상.</p>
        <p>[수량 선택 옵션 추가]</p>
        <p>KRW {cart.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <p>-</p>
        <br />
        <br />
        <div className="deleteButton">
          <button onClick={deleteHandler}>X</button>
        </div>
        <div className="total">
          <p>
            KRW {cart.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <p>배송:기본배송 / 무료</p>
        </div>
      </div>
    </div>
  );
}

export default CartOne;
