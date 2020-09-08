import React, { useRef, useEffect, useState } from "react";
import "./styles.css";
import Profile from "../Profile";
import ContextProfileProvider from "../../context/ContextProfile/";
import { ReactComponent as ProfileIcon } from "../../assets/Icons/profileIcon.svg";
import { ReactComponent as PlugueIcon } from "../../assets/Icons/plugueIcon.svg";
import { ReactComponent as BackIcon } from "../../assets/Icons/backIcon.svg";
import { Redirect } from "react-router";

const routerComponent = () =>{

  return {
    Perfil:( <ContextProfileProvider> <Profile/> </ContextProfileProvider>),
    Testes: (<div></div>),
    Voltar: (<Redirect to="/login" />)
  }

}

function Main() {
  const [selectedItemOnMenu, setSelectedItemOnMenu] = useState(false);
  
  const itensMenu = {
    PERFIL: "Perfil",
    TESTES: "Testes",
    VOLTAR: "Voltar",
  };

  const firstItemOnMenu = useRef(null);

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
          onClick={(e) => ItemMenuSelection(e)}
          className="item-menu item-menu-selected"
          title={itensMenu.PERFIL}
        >
          <ProfileIcon className="icon-menu" />
        </button>

        <button
          onClick={(e) => ItemMenuSelection(e)}
          className="item-menu"
          title={itensMenu.TESTES}
        >
          <PlugueIcon className="icon-menu" />
        </button>

        
          <button
            onClick={(e) => ItemMenuSelection(e)}
            type="submit"
            className="item-menu"
            title={itensMenu.VOLTAR}
          >
            <BackIcon className="icon-menu" />
          </button>
        
      </div>

      <div className="right-main-container">

        {routerComponent()[selectedItemOnMenu.title]}
      
      </div>


    </div>
  );
}

export default Main;
