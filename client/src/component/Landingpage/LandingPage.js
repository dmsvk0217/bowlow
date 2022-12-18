import React from "react";
import "./LandingPage.css";
import landingImage from "../img/LandingImg.png";

function LandingPage() {
  return (
    <>
      <div className="landing">
        <img className="landingImg" src={landingImage} alt="LandingIMG" />
        <div className="land">
          <div className="grid">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
