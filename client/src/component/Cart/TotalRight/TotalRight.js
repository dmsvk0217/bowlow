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
        user_name: name,
        user_id: user_id,
        product_id: cart.product_id,
        quantity: cart.quantity,
        order_date: timestring,
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
        "๐ ~ file: TotalRight.js:42 ~ dispatch ~ response.payload",
        response.payload
      );
      if (response.payload.crateOrderSuccess) {
        alert("์ฃผ๋ฌธ์ด ์๋ฃ๋์์ต๋๋ค.");
        //ํ์ด์ง ์๋ก๊ณ ์นจํด์ ์ฅ๋ฐ๊ตฌ๋ ์นด์ดํฐ ๋ค์ ๋ฐ์์ค๊ธฐ.
        return navigate(0, { replace: true });
      }
      alert("์ฃผ๋ฌธ์ด ๊ณผ์ ์์ ์ค๋ฅ๊ฐ ๋ฐ์ํ์ต๋๋ค.");
    });
  };

  return (
    <div className="total_right">
      <div className="total_div">
        <div className="total_flex">
          <span className="order_text">์ด ์ฃผ๋ฌธ ๊ธ์ก</span>
          <div className="total_price">
            <div>
              KRW {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
        </div>
        <div className="total_flex">
          <div className="order_text">ํ ์ธ + ๋ถ๊ฐ๊ฒฐ์  ๊ธ์ก</div>
          <div className="total_price">+ KRW 0</div>
        </div>
        <div className="total_flex">
          <div className="order_text">์ด ๊ฒฐ์ ๊ธ์ก</div>
          <div className="total_price">
            <span>
              KRW {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
        </div>
      </div>
      <p className="final_text">์นด๋ ๊ฒฐ์  ์ต์ข๊ฒฐ์  ๊ธ์ก</p>
      <h2 className="final_text">
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
