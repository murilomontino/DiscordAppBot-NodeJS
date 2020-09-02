import React, { useContext, createContext} from 'react'

const { ipcRenderer } = window.require('electron')
const ContextProfile = createContext()

const ContextProfileProvider = ({ children }) => {

    async function GetBotName(){
        const response = await ipcRenderer.invoke("@token/REQUEST", {
          title: 'getBotUsername'
        })
        return response;
      }

    return (
        <ContextProfile.Provider value={{
           

        }} >
            {children}
        </ContextProfile.Provider>
    )
}


export const useProfile = () => {
    const {} = useContext(ContextProfile)

    return ({
       
    })
}

export { ContextProfileProvider}
