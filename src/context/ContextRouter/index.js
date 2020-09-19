import React, { useContext, createContext, useState, useEffect } from 'react'
import Profile from "../../pages/Profile";
import Bestiary from '../../pages/Bestiary/'

import ContextProfileProvider from "../../context/ContextProfile/";

const ContextRouter = createContext()


const ContextRouterProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [selectedItemOnMenu, setSelectedItemOnMenu] = useState(false);

    const itensMenu = {
        PERFIL: "Perfil",
        TESTES: "Testes",
        REGRAS: "Regras",
        SOUNDPAD: 'Soundpad'
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

useEffect(() => {
    (()=>{
        setSelectedItemOnMenu({title: itensMenu.PERFIL});
        setLoading(false)
    })()
    
}, [itensMenu.PERFIL]);



if (loading)
    return <div />

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
    const { ItemMenuSelection,
        itensMenu,
        selectedItemOnMenu,
        setSelectedItemOnMenu,
        routerComponent} = useContext(ContextRouter)

    return ({
        ItemMenuSelection,
        itensMenu,
        selectedItemOnMenu,
        routerComponent,
        setSelectedItemOnMenu
    })
}

export default ContextRouterProvider
