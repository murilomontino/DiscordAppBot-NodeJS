import React from "react";
import "./styles.css";
import Profile from "../Profile";
import {useAuth} from '../../context/ContextAuthentication'
function Main() {
  const { HandleLogout } = useAuth()

  return (
    <div className="background">
      <div className="menu-container">
        <div className="item-menu">
          <button onClick={HandleLogout}>Login</button>
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
