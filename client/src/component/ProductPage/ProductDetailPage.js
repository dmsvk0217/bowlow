import React, { useState, useEffect } from "react";
import "./ProductDetailPage.css";
import GridItem from "../common/GridItem/GridItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { createCart } from "../../_actions/cart_action";
import { cartCountUser } from "../../_actions/user_action";

function ProductDetailPage() {
  const id = useParams().id;
  const location = useLocation();
  const dispatch = useDispatch();
  const Producttype = location.state?.type;
  const user_id = useSelector((state) => state.user.userData.user.id);
  const getProduct = useSelector((state) =>
    state.product.find((product) => {
      return product.id == id;
    })
  );

  const [product, setproduct] = useState(null);
  const [type, settype] = useState(0);
  const [typeText, settypeText] = useState([
    "BOWUL",
    "NEW ARRIVALS",
    "BEST ITEM",
    "SHOP",
  ]);

  useEffect(() => {
    setproduct(getProduct);
    settype(Producttype);
  }, [getProduct, user_id, type]);

  const addCartHandler = (e) => {
    const today = new Date();
    let time = {
      year: today.getFullYear(), //현재 년도
      month: today.getMonth() + 1, // 현재 월
      date: today.getDate(), // 현제 날짜
    };
    let timestring = `${time.year}/${time.month}/${time.date}`;

    const dataTosubmit = {
      user_id: user_id,
      product_id: product.id,
      quantity: 1,
      date: timestring,
    };

    dispatch(createCart(dataTosubmit)).then((response) => {
      console.log(response.payload);
      if (response.payload.crateCartSuccess) {
        dispatch(cartCountUser());
        alert(`${product.name}이 장바구니에 성공적으로 담겼습니다.`);
      } else {
        alert(`${product.name}을 장바구니에 담는데 실패했습니다.`);
      }
    });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="sideBar">
          <p>{typeText[type - 1]}</p>
          <p className="bold">{product?.name}</p>
          <p>KRW {product?.price}</p>
          <br />
          <br />
          <p className="bold">상품정보</p>
          <p>{product?.content}</p>
          <br />
          <p>사이즈</p>
          <p>원단</p>
          <p>배송 및 교화반품 안내</p>
          <br />
          <br />
          <p>총</p>
          <p>KRW {product?.price}</p>
          <br />
          <br />
          <h3>실시간 재고 조회</h3>
          <button className="buyButton">구매하기</button>
          <button className="cartButton" onClick={addCartHandler}>
            장바구니 담기
          </button>
        </div>
        <div className="productCard">
          <GridItem key={0} product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
