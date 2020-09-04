import React from "react";
import "./styles.css";
import Profile from "../Profile";
import ContextProfileProvider from "../../context/ContextProfile/";



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
      
      <ContextProfileProvider>
        <Profile/>
      </ContextProfileProvider>

      </div>
    </div>
  );
}

export default Main;
