import React, { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { Redirect } from "react-router";

import "./loading.css";

import "./checkbox.css";

import { useAuthentication } from "../../../context/ContextAuthentication";

export default () => {
  const [loading, setLoading] = useState(false)
  const [isWrongToken, setIsWrongToken] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const {
    checkBoxIsChecked,
    setCheckBoxIsChecked,
    HandleLogin,
    tokenRef,
    
  } = useAuthentication()

  const inputTokenRef = useRef(null)

  useEffect(() => {
    inputTokenRef.current.value = tokenRef.current
  }, [inputTokenRef, tokenRef])

  const SetInputOnFocus = useCallback( (event) => {
      setIsWrongToken(false)
      event.target.value = tokenRef.current
}, [tokenRef])

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
    );
  }, [loading])

  const memoizodCheck = useMemo(() => {
    const boxChecked = () =>
      checkBoxIsChecked ? setCheckBoxIsChecked(false) : setCheckBoxIsChecked(true);

    return (
     <>
        <input
          type="checkbox"
          id="cbx"
          style={{ display: "none" }}
          checked={checkBoxIsChecked}
          onChange={boxChecked}
        />
        <label htmlFor="cbx" className="check">
          <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path
              d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5
         C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
            ></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
        </label>

        <p>Lembrar token</p>
     </>
  
    );
  }, [setCheckBoxIsChecked, checkBoxIsChecked])


  const isSubmited = useCallback(async (token) => {
    setLoading(true)
    const response = await HandleLogin(token)
      setTimeout(() => {
        if (response) {
          setRedirect(true)
          return () => {}
        }
        setLoading(false)
        setIsWrongToken(true)
      }, 1000)
    
  }, [HandleLogin])

  const HandleSubmit = (event) => {
    event.preventDefault()
    if ( inputTokenRef.current.value !== "") {
      tokenRef.current = inputTokenRef.current.value
    } 
    isSubmited(tokenRef.current)
    
  };

  return (
    <section className="right-container">
      {redirect && <Redirect to="/" />}
      {memoizodLoading}
  
      {!loading && (
        <div className="input-container">
          <p id="p-before-input">Entre com seu Token:</p>
          <form onSubmit={HandleSubmit}>
            <input
              type="text"
              name="token"
              placeholder={isWrongToken? "Ops, token incorreto! :(":''}
              onFocus={ isWrongToken? ((e) => SetInputOnFocus(e)):(()=>{}) }              
              ref={inputTokenRef}
              className={isWrongToken ? "wrong-token" : undefined}
              spellCheck="false"
            />
             <div className="after-input-container">
            {memoizodCheck}
            <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};