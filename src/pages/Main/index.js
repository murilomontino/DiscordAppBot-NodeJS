import React from "react";
import "./styles.css";

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
        <div className="top-container">
          <div className="internal-top-container">
          
            <div className="profile-pic"></div>
            <div className="information-container">
              <p id="is-online">ONLINE</p>
              <p id="bot-name">Bot Nome Here</p>
              <p id="bot-creator">Creator name</p>
            </div>
        
            <div className="description-container"></div>
          </div>
        </div>

        <div className="down-container">
          <div className="internal-down-container"> </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
