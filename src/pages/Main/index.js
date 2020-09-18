import React, { useRef, useEffect, useState } from "react";
import "./styles.css";
import Profile from "../Profile";
import Bestiary from '../Bestiary/'
import {useAuthentication} from "../../context/ContextAuthentication"
import ContextProfileProvider from "../../context/ContextProfile/";
import { ReactComponent as ProfileIcon } from "../../assets/Icons/profileIcon.svg";
import { ReactComponent as PlugueIcon } from "../../assets/Icons/plugueIcon.svg";
import { ReactComponent as BackIcon } from "../../assets/Icons/backIcon.svg";


function Main() {
  const [selectedItemOnMenu, setSelectedItemOnMenu] = useState(false);
  
  const itensMenu = {
    PERFIL: "Perfil",
    TESTES: "Testes",
    REGRAS: "Regras",
  }

  const routerComponent = (itemSelected) =>{
    switch (itemSelected) {
      case itensMenu.PERFIL:
        return <ContextProfileProvider> <Profile/> </ContextProfileProvider>
      
      case itensMenu.TESTES:
        return <Bestiary/>

      case itensMenu.REGRAS:
        return <div></div>

      default:
        return <div><h1>Página não encontrada :(</h1></div>
    }
  }

  const firstItemOnMenu = useRef(null);
  const {HandleLogout} = useAuthentication() 
  const ItemMenuSelection = (event) => {

    const newItemSelected = event.currentTarget;
    if (newItemSelected !== selectedItemOnMenu.current) {
      selectedItemOnMenu.classList.remove("item-menu-selected");
      newItemSelected.classList.add("item-menu-selected");
      setSelectedItemOnMenu(newItemSelected);
    }
  }

  useEffect(() => {
    setSelectedItemOnMenu(firstItemOnMenu.current);
  }, []);

  return (
    <div className="background">
      {/* <div className="menu-container">
        
      <button
          onClick={(e) => ItemMenuSelection(e)}
          className="item-menu item-menu-selected"
          title={itensMenu.TESTES}
        >
          <PlugueIcon className="icon-menu" />
        </button>

        <button
          ref={firstItemOnMenu}
          onClick={(e) => ItemMenuSelection(e)}
          className="item-menu"
          title={itensMenu.PERFIL}
        >
          <ProfileIcon className="icon-menu" />
        </button>

        <button
          onClick={(e) => ItemMenuSelection(e)}
          className="item-menu"
          title={itensMenu.REGRAS}
        >
          <PlugueIcon className="icon-menu" />
        </button>

        
          <button
            onClick={HandleLogout}
            type="submit"
            className="item-menu"
            title='Logout'
          >
            <BackIcon className="icon-menu" />
          </button>
        
      </div> */}

      <div className="right-main-container">
        {routerComponent(itensMenu.TESTES)}
      </div>


    </div>
  );
}

export default Main;
