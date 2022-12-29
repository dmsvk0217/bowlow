import React from "react";
import "./TotalRight.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../_actions/order_action";
import getTimeString from "../../common/getTimeString";

function TotalRight(props) {
  const totalPrice = props.totalPrice;
  const user_id = useSelector((state) => state.user.userData.user.id);
  const getCartList = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = props.name;
  const phone = props.phone1 + "-" + props.phone2 + "- " + props.phone3;
  const addressNumber = props.addressNumber;
  const address = props.address;
  const addressDetail = props.addressDetail;
  const email = props.email + "@" + props.emailDomain;

  const orderHandler = () => {
    let dataTosubmit = [];
    getCartList.map((cart) => {
      const timestring = getTimeString();
      const data = {
        name: name,
        user_id: user_id,
        product_id: cart.product_id,
        quantity: cart.quantity,
        date: timestring,
        phone: phone,
        addressNumber: addressNumber,
        address: address,
        addressDetail: addressDetail,
        email: email,
      };
      dataTosubmit = [...dataTosubmit, data];
    });

    dispatch(createOrder(dataTosubmit)).then((response) => {
      console.log(
        "🚀 ~ file: TotalRight.js:42 ~ dispatch ~ response.payload",
        response.payload
      );
      if (response.payload.crateOrderSuccess) {
        alert("주문이 완료되었습니다.");
        //페이지 새로고침해서 장바구니 카운터 다시 받아오기.
        return navigate(0, { replace: true });
      }
      alert("주문이 과정에서 오류가 발생했습니다.");
    });
  };

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
