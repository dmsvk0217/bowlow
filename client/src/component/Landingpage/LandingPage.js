import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import landingImage from "../img/LandingImg.png";
import GridItem from "../common/GridItem/GridItem";
import GridText from "../common/GridText/GridText";
import img from "../img/img";
import { useDispatch } from "react-redux";
import { getProduct } from "../../_actions/product_action";

function LandingPage() {
  const dispatch = useDispatch();
  const [newArrivalesProducts, setnewArrivalesProducts] = useState(null);
  const [BestProducts, setBestProducts] = useState(null);

  useEffect(() => {
    const type = 0;
    dispatch(getProduct({ type: type, category1: 0, category2: 0 })).then(
      (response) => {
        const products = response.payload;
        setnewArrivalesProducts(
          products.filter((product) => product.type == 2)
        );
        setBestProducts(products.filter((product) => product.type == 3));
      }
    );
  }, []);
  return (
    <div className="landing">
      <img className="landingImg" src={landingImage} alt="LandingIMG" />
      <div className="marginTop"></div>
      <div className="land">
        <div className="marginDiv50" />
        <GridText text="신상품" />
        <div className="grid3 product__container">
          {newArrivalesProducts &&
            newArrivalesProducts.map((product, index) => (
              <GridItem key={index} product={product} />
            ))}
        </div>

        <div className="marginDiv50"></div>
        <GridText text="베스트" />
        <div className="grid3 product__container">
          {BestProducts &&
            BestProducts.map((product, index) => (
              <GridItem key={index} product={product} />
            ))}
        </div>
        <div className="marginDiv50" />
      </div>
    </div>
  );
}

export default LandingPage;
