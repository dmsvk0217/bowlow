import React, { useEffect, useState } from "react";
import GridItem from "../common/GridItem/GridItem";
import { useDispatch } from "react-redux";
import { getProduct } from "../../_actions/product_action";

function BowulPage() {
  const dispatch = useDispatch();
  const [products, setproducts] = useState(null);

  useEffect(() => {
    const getType = 1;
    dispatch(getProduct(getType)).then((response) => {
      console.log("🚀 ~ file: BowulPage.js:13 ~ dispatch ~ response", response);
      console.log(
        "🚀 ~ file: BowulPage.js:13 ~ dispatch ~ response payload",
        response.payload
      );
      setproducts(response.payload);
    });
  }, []);

  return (
    <div className=" container">
      <div className="product__container">
        <div className="grid3 ">
          {products &&
            products.map((product, index) => (
              <GridItem key={index} product={product} type={1} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BowulPage;
