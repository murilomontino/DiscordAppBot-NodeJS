import React, { useState, useContext, createContext, useEffect } from 'react'


const ContextProfile = createContext()

const ContextProfileProvider = ({ children }) => {

    const { ipcRenderer } = window.require('electron')


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
