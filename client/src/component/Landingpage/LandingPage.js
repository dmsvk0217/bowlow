import React from "react";
import "./LandingPage.css";
import landingImage from "../img/LandingImg.png";
import GridItem from "../common/GridItem/GridItem";
import GridItem2 from "../common/GridItem/GridItem2";
import GridText from "../common/GridText/GridText";
import Footer from "../common/Footer/Footer";

function LandingPage() {
  return (
    <>
      <div className="landing">
        <img className="landingImg" src={landingImage} alt="LandingIMG" />
        <div className="land">
          <div className="paddingDiv" />
          <GridText text="신상품" />
          <div className="grid">
            <GridItem />
            <GridItem2 />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem2 />
            <GridItem2 />
            <GridItem />
            <GridItem />
            <GridItem2 />
            <GridItem />
            <GridItem />
            <GridItem2 />
            <GridItem />
            <GridItem2 />
            <GridItem />
            <GridItem />
            <GridItem2 />
            <GridItem2 />
            <GridItem />
          </div>

          <div className="paddingDiv"></div>
          <GridText text="베스트" />
          <div className="grid">
            <GridItem />
            <GridItem2 />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem2 />
            <GridItem2 />
            <GridItem />
            <GridItem />
            <GridItem2 />
            <GridItem />
            <GridItem />
            <GridItem2 />
            <GridItem />
            <GridItem2 />
            <GridItem />
            <GridItem />
            <GridItem2 />
            <GridItem2 />
            <GridItem />
          </div>
          <div className="paddingDiv" />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
