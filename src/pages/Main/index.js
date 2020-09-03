import React from "react";
import "./styles.css";
import Profile from "../Profile";
//import {useAuth} from '../../context/ContextAuthentication'

const {ipcRenderer}  = window.require('electron')
function Main() {
//  const { HandleLogout } = useAuth()

  const HandleOnClick = () =>{
    ipcRenderer.invoke('@token/REQUEST', {title: 'GetBotOnwerApplication' })
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
