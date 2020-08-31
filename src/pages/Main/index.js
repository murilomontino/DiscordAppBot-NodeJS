import React from "react";
import "./styles.css";
import Profile from "../Profile";
//import {useAuth} from '../../context/ContextAuthentication'

const {ipcRenderer}  = window.require('electron')
function Main() {
//  const { HandleLogout } = useAuth()

  const HandleTeste = () =>{
    ipcRenderer.invoke("@token/REQUEST", {
      title: 'getBotUsername'
    }).then(response => console.log(response))
    
  }

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
