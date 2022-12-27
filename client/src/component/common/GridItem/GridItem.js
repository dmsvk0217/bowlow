import React from "react";
import "./GridItem.css";

function GridItem(props) {
  const product = props.product;
  return (
    <div className="gridItem">
      <img src={product?.image} alt="img" />
      <p>[{product?.name}]</p>
      <p>KRW [{product?.price}]</p>
    </div>
  );
}

export default GridItem;
