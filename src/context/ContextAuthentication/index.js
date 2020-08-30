import React, { useState, useContext, createContext, useEffect} from 'react'
import { Redirect } from "react-router"

const { ipcRenderer } = window.require('electron')
const ContextAuth = createContext()

const ContextAuthProvider = ( { children }) => {
    
    const [redirect, setRedirect] = useState(false)
    const [inputToken, setInputToken] = useState('')
    const [checkBox, setCheckBox] = useState(false)
    const [loading, setLoading] = useState(true)
    const [logout, setLogout] = useState(false)

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

 
 
  async function Login(token) {
    
    const response = await ipcRenderer.invoke("@token/REQUEST", {
      title: "loginWithToken",
      body: token ? token : '',
    })

    if (response !== 'Token Inválido') {
          setRedirect(true)
          return true
        }
    return false
    }

  async function Logout(){
    
  }
  
  if(loading)
    return <div/>

  if(logout){
    setLogout(false)
    return <Redirect to="/Login"/>
  }

  return (
    <>
        {redirect && <Redirect to="/Main" />}
        <ContextAuth.Provider value={{
          inputToken, 
          checkBox, 
          setInputToken, 
          setCheckBox,
          Login,
          Logout
          
          }} >
             { children }
        </ContextAuth.Provider>
    </>
    )
}


export const useAuth = () => {
    const { inputToken, checkBox, setInputToken, setCheckBox, Login, Logout } = useContext(ContextAuth)
    
    return ({
        inputToken,
        setInputToken,
        checkBox,
        setCheckBox,
        Login,
        Logout
        
    })
}

export default ContextAuthProvider
