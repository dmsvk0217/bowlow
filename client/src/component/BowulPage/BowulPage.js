import React from "react";
import GridItem from "../common/GridItem/GridItem";
import img from "../img/img";

function BowulPage() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className=" container">
      <div className="product__container">
        <div className="grid3 ">
          {list.map((e, index) => (
            <GridItem key={index} image={img[e - 1]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BowulPage;
