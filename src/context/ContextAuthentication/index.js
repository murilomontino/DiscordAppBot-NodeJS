import React, { useState, useContext, createContext, useEffect} from 'react'

const { ipcRenderer } = window.require('electron')
const ContextAuth = createContext()

const ContextAuthProvider = ( { children }) => {
    
    const [inputToken, setInputToken] = useState('')
    const [checkBox, setCheckBox] = useState(false)
    const [loading, setLoading] = useState(true)
    const [authentication, setAuthentication] = useState(false)

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
    
  } , [])

 
 
  async function HandleLogin(token) {
    
    const response = await ipcRenderer.invoke("@token/REQUEST", {
      title: "loginWithToken",
      body: token ? token : '',
    })

    if (response !== 'Error') {
        setAuthentication(true)
          return true
        }
    return false
    }

  async function HandleLogout(){
    await ipcRenderer.invoke("@token/REQUEST", {
      title: "logoutBot",
      body: '',
    })
    setAuthentication(false)
  }
  
  if(loading)
    return <div/>


  return (
        <ContextAuth.Provider value={{
          inputToken, 
          checkBox, 
          setInputToken, 
          setCheckBox,
          HandleLogin,
          HandleLogout,
          authentication, 
          loading
          
          }} >
             { children }
        </ContextAuth.Provider>
    )
}


export const useAuth = () => {
    const { inputToken, checkBox, setInputToken, setCheckBox, HandleLogin, HandleLogout, authentication, loading } = useContext(ContextAuth)
    
    return ({
        inputToken,
        setInputToken,
        checkBox,
        setCheckBox,
        HandleLogin,
        HandleLogout,
        authentication, 
        loading
        
    })
}

export default ContextAuthProvider
