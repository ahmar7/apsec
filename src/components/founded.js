import React from "react";
import { Ico1, Ico2, Ico3, Ico4 } from "../utils/allImg";

const Founded = () => {
  return (
    <div className="founded-section">
      <h3>Founded by talent from:</h3>
      <div className="ico-flex">
        <img src={Ico1} alt="" />
        <img src={Ico2} alt="" />
        <img src={Ico3} alt="" />
        <img src={Ico4} alt="" />
      </div>
    </div>
  );
};

export default Founded;
