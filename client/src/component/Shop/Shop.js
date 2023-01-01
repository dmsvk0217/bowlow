import React, { useState, useEffect } from "react";
import GridItem from "../common/GridItem/GridItem";
import { useDispatch } from "react-redux";
import { getProduct } from "../../_actions/product_action";
import { useLocation } from "react-router-dom";
import { shopCategory, shopType } from "./shopCategory";
import "./Shop.css";

function Shop() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [products, setproducts] = useState(null);
  const [ShopTitle, setShopTitle] = useState("");

  const type = location.state?.type;
  const category1 = location.state?.category1;
  const category2 = location.state?.category2;

  useEffect(() => {
    const data = {
      type: type,
      category1: category1,
      category2: category2,
    };
    dispatch(getProduct(data)).then((response) => {
      setproducts(response.payload);
    });

    if (type == 4) {
      setShopTitle(shopCategory[parseInt(category1) - 1][parseInt(category2)]);
    } else {
      setShopTitle(shopType[parseInt(type) - 1]);
    }
  }, [type, category1, category2]);

  return (
    <div className=" container">
      <div className="product__container">
        <h2>{ShopTitle && ShopTitle}</h2>
        <div className="grid3 ">
          {products &&
            products.map((product, index) => (
              <GridItem key={index} product={product} type={4} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
