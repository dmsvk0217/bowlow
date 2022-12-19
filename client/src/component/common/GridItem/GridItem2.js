import React from "react";
import "./GridItem.css";

function GridItem2() {
  return (
    <div className="gridItem">
      <img
        src="https://bowlow.co.kr/web/product/medium/202212/4f43d560d1e5e82d2b082116ff26ebcf.webp"
        alt="img"
      />
      <p>[상품명]</p>
      <p>KRW [가격]</p>
      <p>KRW [할인가격]</p>
    </div>
  );
}

export default GridItem2;
