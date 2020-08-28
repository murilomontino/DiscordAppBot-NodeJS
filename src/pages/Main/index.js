import React from "react";
import "./styles.css";
import Profile from "../Profile";

function Main() {
  return (
    <div className="background">
      <div className="menu-container">
        <div className="item-menu">
          <a href="/">Login</a>
        </div>
        <div className="item-menu"></div>
        <div className="item-menu"></div>
      </div>
      <div className="right-main-container">

      <Profile/>


      </div>
    </div>
  );
}

export default Main;
