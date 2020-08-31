import React, { useState, useContext, createContext, useEffect } from 'react'

const { ipcRenderer } = window.require('electron')
const ContextProfile = createContext()

const ContextProfileProvider = ({ children }) => {

    const HandleTeste = () =>{
        ipcRenderer.invoke("@token/REQUEST", {
          title: 'getBotUsername'
        }).then(response => console.log(response))
        
      }

    return (
        <ContextProfile.Provider value={{


        }} >
            {children}
        </ContextProfile.Provider>
    )
}


const useProfile = () => {
    const { } = useContext(ContextProfile)

    return ({


    })
}

export { ContextProfileProvider, useProfile }
