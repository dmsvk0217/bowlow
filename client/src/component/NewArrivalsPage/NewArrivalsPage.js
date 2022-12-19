import React from "react";
import "./NewArrivalsPage.css";
import GridItem from "../common/GridItem/GridItem";
import img from "../img/img";

function NewArrivalsPage() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="gird__container">
      <div className="grid">
        {list.map((e, index) => (
          <GridItem key={index} image={img[e + 9]} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivalsPage;
