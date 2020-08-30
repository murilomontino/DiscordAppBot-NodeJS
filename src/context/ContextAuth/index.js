import React, { useState, useContext, createContext, useEffect} from 'react'


const ContextAuth = createContext()

const ContextAuthProvider = ( { children }) => {
    const { ipcRenderer } = window.require('electron')

    const [inputToken, setInputToken] = useState('')
    const [checkBox, setCheckBox] = useState(false)
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
   // eslint-disable-next-line no-unused-vars
        const fetchToken = (async () => {
        const check = await ipcRenderer.invoke('@tokenCheck/REQUEST', { title: 'checkBox' })
        setCheckBox(check)
        if(check){
            const token = await ipcRenderer.invoke('@tokenCheck/REQUEST', { title: 'checkToken'}) 
            setInputToken(token)
      }
      setLoading(false)
    })()
    
  } , [ipcRenderer])

 

  if(loading)
    return <div/>

  return (
        <ContextAuth.Provider value={{
          inputToken, 
          checkBox, 
          setInputToken, 
          setCheckBox,
          
          }} >
             { children }
        </ContextAuth.Provider>
    )
}


export const useAuth = () => {
    const { inputToken, checkBox, setInputToken, setCheckBox } = useContext(ContextAuth)
    
    return ({
        inputToken,
        setInputToken,
        checkBox,
        setCheckBox,
        
    })
}

export default ContextAuthProvider
