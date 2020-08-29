import React, { useState, useContext, createContext, useEffect} from 'react'

const { ipcRenderer } = window.require('electron')

const ContextAuth = createContext()

const ContextAuthProvider = ( { Children }) => {
    
    const [token, setToken] = useState('')
    const [checkBox, setCheckBox] = useState(false)
    const [processToken, setProcessToken ] = useState(true)

    useEffect(()=>{
   // eslint-disable-next-line no-unused-vars
        const fetchToken = (async () => {
        const check = await ipcRenderer.invoke('@tokenCheck/REQUEST', { title: 'checkBox' })
        setCheckBox(check)
        if(check){
            const token = await ipcRenderer.invoke('@tokenCheck/REQUEST', { title: 'checkToken' }).then(response => 
            response )
        setToken(token)
      }
    })()
    
    setProcessToken(false)
  } , [])

  
  if(processToken){
    return <div/>
  }

    return (
        <ContextAuth.Provider values={{token, checkBox, setToken, setCheckBox}} >
             { Children }
        </ContextAuth.Provider>
    )
}

export default ContextAuthProvider

export const useAuth = () => {
    const {token, checkBox, setToken, setCheckBox} = useContext(ContextAuthProvider)
    return {
        token,
        setToken
    }
}

export default ContextAuth
