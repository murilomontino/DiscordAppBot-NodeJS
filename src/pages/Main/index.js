import React from "react";
import "./styles.css";
import Profile from "../Profile";

const {ipcRenderer}  = window.require('electron')
function Main() {

  const HandleOnClick = () =>{
    ipcRenderer.invoke('@token/REQUEST', {title: 'getBotOnwerApplication' })
  }

  return (
    <div className="background">
      <div className="menu-container">
        <div className="item-menu">
          <button onClick={HandleOnClick}>Login</button>
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
