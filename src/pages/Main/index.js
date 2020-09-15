import React, { useRef, useEffect, useState } from "react";
import "./styles.css";
import Profile from "../Profile";
import Rules from "../Rules";
import {useAuthentication} from "../../context/ContextAuthentication"
import ContextProfileProvider from "../../context/ContextProfile/";
import { ReactComponent as ProfileIcon } from "../../assets/Icons/profileIcon.svg";
import { ReactComponent as PlugueIcon } from "../../assets/Icons/plugueIcon.svg";
import { ReactComponent as BackIcon } from "../../assets/Icons/backIcon.svg";
import { ReactComponent as RulesIcon } from "../../assets/Icons/rulesIcon.svg";
import { ReactComponent as ThreePersonsIcon} from "../../assets/Icons/threePersonsIcon.svg";


function Main() {
  const [selectedItemOnMenu, setSelectedItemOnMenu] = useState(false);
  
  const itensMenu = {
    PERFIL: "Perfil",
    TESTES: "Testes",
    REGRAS: "Regras",
    PERSONAGENS: "Personagens",
  }

  const routerComponent = (itemSelected) =>{
    switch (itemSelected) {
      case itensMenu.PERFIL:
        return <ContextProfileProvider> <Profile/> </ContextProfileProvider>
      
      case itensMenu.TESTES:
        return <div><h3>Test Button</h3></div>

      case itensMenu.REGRAS:
        return <Rules/>

      case itensMenu.PERSONAGENS:
        return <div> <h3>Personagens</h3></div>

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
      <div className="menu-container">
        
        
        <button
          ref={firstItemOnMenu}
          onClick={ItemMenuSelection}
          className="item-menu item-menu-selected"
          title={itensMenu.PERFIL}
        >
          <ProfileIcon className="icon-menu" />
        </button>

        <button
          onClick={ItemMenuSelection}
          className="item-menu"
          title={itensMenu.REGRAS}
        >
          <RulesIcon className="icon-menu" />
        </button>

        <button
          onClick={ItemMenuSelection}
          className="item-menu"
          title={itensMenu.PERSONAGENS}
        >
          <ThreePersonsIcon className="icon-menu" />
        </button>

        <button
          onClick={ItemMenuSelection}
          className="item-menu"
          title={itensMenu.TESTES}
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
        
      </div>

      <div className="right-main-container">
        {routerComponent(selectedItemOnMenu.title)}
      
      </div>


    </div>
  );
}

export default Main;
