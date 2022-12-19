import React from "react";
import "./LandingPage.css";
import landingImage from "../img/LandingImg.png";
import GridItem from "../common/GridItem/GridItem";
import GridText from "../common/GridText/GridText";
import Footer from "../common/Footer/Footer";
import img from "../img/img";

function LandingPage() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <div className="landing">
        <img className="landingImg" src={landingImage} alt="LandingIMG" />
        <div className="land">
          <div className="paddingDiv" />
          <GridText text="신상품" />
          <div className="grid">
            {list.map((e, index) => (
              <GridItem key={index} image={img[e - 1]} />
            ))}
          </div>

          <div className="paddingDiv"></div>
          <GridText text="베스트" />
          <div className="grid">
            {list.map((e, index) => (
              <GridItem key={index} image={img[e - 1]} />
            ))}
          </div>
          <div className="paddingDiv" />
        </div>
      </div>
    </>
  );
}

export default LandingPage;