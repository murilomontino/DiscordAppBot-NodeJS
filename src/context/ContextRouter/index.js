import React, { useContext, createContext, useState } from 'react'

import ContextProfileProvider from "../../context/ContextProfile/";

const { PAGE } = require('./constants/pages')

const ContextRouter = createContext()


const ContextRouterProvider = ({ children }) => {
    

    const [selectedItemOnMenu, setSelectedItemOnMenu] = useState(false);
    
    const routerComponent = (itemSelected) => {
        
        try {
            const COMPONENT = PAGE[itemSelected]? PAGE[itemSelected]: <div><h1>Página não encontrada :(</h1></div>
            return (<ContextProfileProvider> < COMPONENT/> </ContextProfileProvider> )
        } catch (err) {
            console.error(err) 
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
        ItemMenuSelection,
        selectedItemOnMenu,
        routerComponent,
        setSelectedItemOnMenu,
        

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
