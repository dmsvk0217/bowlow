import React, { useState, useEffect } from "react";
import GridItem from "../common/GridItem/GridItem";
import { useDispatch } from "react-redux";
import { getProduct } from "../../_actions/product_action";

function Shop() {
  const dispatch = useDispatch();
  const [products, setproducts] = useState(null);

  useEffect(() => {
    const type = 4;
    dispatch(getProduct(type)).then((response) => {
      setproducts(response.payload);
    });
  }, []);

  return (
    <div className=" container">
      <div className="product__container">
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
