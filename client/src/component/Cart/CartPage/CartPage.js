import React, { useState, useEffect } from "react";
import "./CartPage.css";
import CartOne from "../../common/CartOne/CartOne";
import { useSelector } from "react-redux";
import TotalLeft from "../TotalLeft/TotalLeft";
import CartTotal from "../CartTotal/CartTotal";
import TotalRight from "../TotalRight/TotalRight";

function CartPage() {
  const [carts, setcarts] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const user_id = useSelector((state) => state.user.userData.user.id);
  const getCartsList = useSelector((state) => state.cart);
  const [onOrder, setonOrder] = useState(false);

  const [name, setname] = useState("");
  const [addressNumber, setaddressNumber] = useState("");
  const [address, setaddress] = useState("");
  const [addressDetail, setaddressDetail] = useState("");
  const [phone1, setphone1] = useState("");
  const [phone2, setphone2] = useState("");
  const [phone3, setphone3] = useState("");
  const [email1, setemail1] = useState("");
  const [emailDomain, setemailDomain] = useState("");

  useEffect(() => {
    setcarts(getCartsList);
  }, [getCartsList]);

  useEffect(() => {
    settotalPrice(0);
    carts.map((cart) => {
      settotalPrice((prev) => {
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
        {onOrder && (
          <TotalLeft
            name={name}
            setname={setname}
            addressNumber={addressNumber}
            setaddressNumber={setaddressNumber}
            address={address}
            setaddress={setaddress}
            addressDetail={addressDetail}
            setaddressDetail={setaddressDetail}
            phone1={phone1}
            setphone1={setphone1}
            phone2={phone2}
            setphone2={setphone2}
            phone3={phone3}
            setphone3={setphone3}
            email1={email1}
            setemail1={setemail1}
            emailDomain={emailDomain}
            setemailDomain={setemailDomain}
          />
        )}

        {onOrder ? (
          <TotalRight totalPrice={totalPrice} />
        ) : (
          <CartTotal totalPrice={totalPrice} setonOrder={setonOrder} />
        )}
      </div>
    </div>
  );
}

export default CartPage;
