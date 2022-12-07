import React from "react";
import { LogoCover } from "../utils/allImg";
import "./style.css";
const Header = () => {
  return (
    <div className="upper-header">
      <div className="logo-cover">
        <img src={LogoCover} alt="" />
        <h1 className="heading">Leaders in NFT and Metaverse Security</h1>
      </div>
    </div>
  );
};

export default Header;
