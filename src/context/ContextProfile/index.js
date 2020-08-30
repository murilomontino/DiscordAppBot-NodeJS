import React, { useState, useContext, createContext, useEffect } from 'react'

const { ipcRenderer } = window.require('electron')
const ContextProfile = createContext()

const ContextProfileProvider = ({ children }) => {



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
