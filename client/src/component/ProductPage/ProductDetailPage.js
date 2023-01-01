import React, { useState, useEffect } from "react";
import "./ProductDetailPage.css";
import GridItem from "../common/GridItem/GridItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createCart } from "../../_actions/cart_action";
import { addCountUser } from "../../_actions/user_action";

function ProductDetailPage() {
  const id = useParams().id;
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const addCartHandler = (type, e) => {
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
      //DB에 Cart 추가가 완료가 되었을 경우에
      if (response.payload.crateCartSuccess) {
        //UserDB에 cart_count +=1 업데이트하기
        //그런데 두 작업을 묶어서 하나가 취소될경우 되돌릴 수 있도록 바꿔야 할 듯함.
        dispatch(addCountUser());
        if (type == 1)
          return alert(
            `${product.product_name}이 장바구니에 성공적으로 담겼습니다.`
          );
        if (type == 2) return navigate("/cart", { replace: false });
      } else {
        return alert(
          `${product.product_name}을 장바구니에 담는데 실패했습니다.`
        );
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
          <button className="buyButton" onClick={() => addCartHandler(2)}>
            구매하기
          </button>
          <button className="cartButton" onClick={() => addCartHandler(1)}>
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
