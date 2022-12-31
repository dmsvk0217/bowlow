import React, { useState, useEffect } from "react";
import "./MyPage.css";
import { useDispatch, useSelector } from "react-redux";
import OrderOne from "./OrderOne";
import { getOrders } from "../../_actions/order_action";
import ModalBasic from "./modal/ModalBasic";

function MyPage() {
  const user = useSelector((state) => state.user.userData.user);
  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const [orderToReivew, setorderToReivew] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {}, [orders]);
  useEffect(() => {
    dispatch(getOrders()).then((response) => {
      console.log("[getOrders]");
      console.log(response.payload);
    });
  }, [user]);

  //스크롤 위치 가져오기
  useEffect(() => {
    window.addEventListener("scroll", () => {});
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="container">
      <div className="content">
        {modalOpen && (
          <ModalBasic
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            position={window.scrollY}
            orderToReivew={orderToReivew}
          />
        )}
        <div className="align">
          <div className="myPage">
            <h2 className="myinfo">개인정보 확인</h2>
            <p>아이디</p>
            <input className="input100" type="text" value={user?.id} />
            <br />
            <br />
            <p>이름</p>
            <input className="input100" type="text" value={user?.name} />
            <br />
            <br />
            <p>전화번호</p>
            <input className="input33" type="text" value={user?.phone} />
            <br />
            <br />
            <p>이메일</p>
            <input className="input33" type="text" value={user?.email} />
            <h2 className="myorder">나의 주문 내역</h2>
            <div className="border_div"></div>
            {orders &&
              orders?.map((order) => {
                return (
                  <OrderOne
                    order={order}
                    setModalOpen={setModalOpen}
                    setorderToReivew={setorderToReivew}
                    type={true}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
