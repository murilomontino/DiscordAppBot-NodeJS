import React, { useContext, createContext, useState } from 'react'
import Profile from "../../pages/Profile";
import Bestiary from '../../pages/Bestiary/'

import ContextProfileProvider from "../../context/ContextProfile/";


const ContextRouter = createContext()


const ContextRouterProvider = ({ children }) => {

    const [selectedItemOnMenu, setSelectedItemOnMenu] = useState(false);
    const itensMenu = {
        PERFIL: "Perfil",
        TESTES: "Testes",
        REGRAS: "Regras",
        SOUNDPAD: 'Soundpad',
        LOGOUT: 'Logout'
    }

    const routerComponent = (itemSelected) => {
        switch (itemSelected) {
            case itensMenu.PERFIL:
                return <ContextProfileProvider> <Profile /> </ContextProfileProvider>

            case itensMenu.TESTES:
                return <Bestiary />

            case itensMenu.SOUNDPAD:
                return <div></div>

            default:
                return <div><h1>Página não encontrada :(</h1></div>
        }
    }
    
    const ItemMenuSelection = (event) => {

    const newItemSelected = event.currentTarget;

    if (newItemSelected !== selectedItemOnMenu.current) {
        selectedItemOnMenu.className = ''
        newItemSelected.className = 'itemSelect';
        setSelectedItemOnMenu(newItemSelected);
    }
}




return (
    <ContextRouter.Provider value={{
        itensMenu,
        ItemMenuSelection,
        selectedItemOnMenu,
        routerComponent,
        setSelectedItemOnMenu

    }} >
        {children}
    </ContextRouter.Provider>
)
}


export const useRouter = () => {
    const context = useContext(ContextRouter)

    return ({
        ...context
    })
}

export default ContextRouterProvider
