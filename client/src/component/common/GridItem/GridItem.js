import React from "react";
import { Link } from "react-router-dom";
import "./GridItem.css";

function GridItem(props) {
  const product = props.product;
  return (
    <div className="gridItem">
      <Link to={`/product/${product?.id}`} state={{ type: props.type }}>
        <img src={product?.product_image} alt="img" />
        <p>[{product?.name}]</p>
        <p>KRW [{product?.price}]</p>
      </Link>
    </div>
  );
}

export default GridItem;
