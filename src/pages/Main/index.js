import React from "react";
import "./styles.css";
import Profile from "../Profile";
import ContextProfileProvider from "../../context/ContextProfile/";
import { ReactComponent as ProfileIcon } from "../../assets/Icons/profileIcon.svg";
import { ReactComponent as PlugueIcon } from "../../assets/Icons/plugueIcon.svg";
import { ReactComponent as BackIcon } from "../../assets/Icons/backIcon.svg";
const { ipcRenderer } = window.require("electron");

function Main() {
  ipcRenderer.on("console/LOG", async (event, message) => {
    try {
      const { messageFormated } = message;
      console.log(messageFormated);
    } catch (error) {}
  });

  // const HandleOnClick = () =>{
  //   ipcRenderer.invoke('@token/REQUEST', {title: 'getBotOnwerApplication' })
  // }

  return (
    <div className="background">
      <div className="menu-container">

        <button className="item-menu" title="Perfil">
          <ProfileIcon className="icon-menu" />
        </button>

        <button className="item-menu" title="Testes">
         
          <PlugueIcon className="icon-menu" />
        </button>

        <form action="/">
        <button type="submit" className="item-menu"  title="Voltar">          
        <BackIcon className="icon-menu" />
        </button>
        </form>

      </div>
      <div className="right-main-container">
        <ContextProfileProvider>
          <Profile />
        </ContextProfileProvider>
      </div>
    </div>
  );
}

export default Main;
