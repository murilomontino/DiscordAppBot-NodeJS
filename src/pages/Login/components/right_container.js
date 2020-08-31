import React, { useState, useMemo } from "react"
import { Redirect } from "react-router"

import "./loading.css"

import "./checkbox.css"

import { useAuth } from '../../../context/ContextAuthentication'


export default () => {

  const [loading, setLoading] = useState(false)
  const [isWrongToken, setIsWrongToken] = useState(false)
  const [redirect, setRedirect ] = useState(false)
  const { inputToken, checkBox, setInputToken, setCheckBox, HandleLogin } = useAuth()

  const memoizodLoading = useMemo(() => {
    return (
      loading && ( // Loading animation
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        // Loading animation end
      )
    )
  }, [loading])
  

  const memoizodCheck = useMemo(()=>{
    const boxChecked = () => checkBox? setCheckBox(false): setCheckBox(true) 

    return ( <div className="check-box-container">
    <input type="checkbox"  id="cbx" style={{ display: "none" }} checked={checkBox} onChange={boxChecked} />
    <label htmlFor="cbx" className="check">
      <svg width="18px" height="18px" viewBox="0 0 18 18">
        <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5
         C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
        <polyline points="1 9 7 14 15 4"></polyline>
      </svg>
    </label>

    <p>Lembrar token</p>
    <button type="submit">Entrar</button>
  </div>)

  }, [setCheckBox, checkBox])

  const RemoveBorderRed = () => isWrongToken ? setIsWrongToken(false) : () => {}
  

  const HandleSubmit = (event) => {
    event.preventDefault();
    (async () => {
      setLoading(true)
      
      setTimeout( async () =>{
        const response = await HandleLogin(inputToken)
        if(response){
          setRedirect(true)
          return () => {}
        }
        setLoading(false)
        setIsWrongToken(true) 
      
      }, 1000)
      
    })()
   
   
  }

  //
const HandleTokenChange = (event) => setInputToken(event.target.value);

  
  

  return (
    <section className="right-container">
      {redirect && <Redirect to="/" />}
      {memoizodLoading}
      {console.log("dentro")}
      {!loading && (
        <div className="input-container">
          <p id="p-before-input">Entre com seu Token:</p>
          <form onSubmit={HandleSubmit}>
            <input
              type="text"
              name="token"
              placeholder={isWrongToken ? "Ops, token incorreto! :(" : ""}
              onFocus={isWrongToken ? RemoveBorderRed : () => {}}
              value={ isWrongToken ? '': inputToken}
              onChange={HandleTokenChange}
              className={isWrongToken ? "wrong-token" : undefined}
            />
           {memoizodCheck}
          </form>
        </div>
      )}
    </section>
  )
}


