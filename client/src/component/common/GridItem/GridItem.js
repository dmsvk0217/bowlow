import React from "react";
import "./GridItem.css";

function GridItem(props) {
  return (
    <div className="gridItem">
      <img src={props.image} alt="img" />
      <p>[당일발송] [상품명]</p>
      <p>[상품명]</p>
      <p>KRW [가격]</p>
      <p>KRW [할인가격]</p>
      <p>남은시간 [남은시간] (KRW [할인받는 가격] 할인)</p>
    </div>
  );
}

export default GridItem;
