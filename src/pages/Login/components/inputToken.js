import React from 'react'
import { useState, createContext, useContext, useEffect } from "react";

const { ipcRenderer } = window.require("electron");


const getToken = async () =>{
    return await ipcRenderer.invoke('@tokenCheck/REQUEST', {title: 'checkToken'} )
    
  }



const ContextInputToken = createContext()

const InputToken = ({isWrongToken, setIsWrongToken}) => {

    const [token, setToken] = useState('')

    useEffect( () => { 
        getToken().then(response => setToken(response))
  
    }, [] )
    

    const HandleChange = (event) =>{
      setToken(event.target.value)
    }
  
    const RemoveBorderRed = () => {
      if (isWrongToken) {
        setIsWrongToken(false);
      }
    }
  
    return (
       <ContextInputToken.Provider value={{token, setToken}}>
      <input
      type="text"
      name="token"
      placeholder={ isWrongToken?"Ops, token incorreto! :(": ''}
      onFocus={isWrongToken? RemoveBorderRed: ()=>{} }
      value={token}
      onChange={HandleChange}
      className={isWrongToken ? "wrong-token" : undefined}
    />
        </ContextInputToken.Provider> 
    )
  }

export default InputToken

export const useToken = () =>{

    const {token, setToken} = useContext(ContextInputToken)
    return {
        token,
        setToken
    }

}


