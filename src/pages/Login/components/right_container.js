import React, { useState, useMemo, useRef, useEffect } from "react";
import { Redirect } from "react-router";

import "./loading.css";

import "./checkbox.css";

import { useAuthentication } from "../../../context/ContextAuthentication";

export default () => {
  const [loading, setLoading] = useState(false);
  const [isWrongToken, setIsWrongToken] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const {
    inputToken,
    checkBoxIsChecked,
    setInputToken,
    setCheckBoxIsChecked,
    HandleLogin,
  } = useAuthentication();
  const inputTokenRef = useRef(null);

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
  }, [loading]);

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
  }, [setCheckBoxIsChecked, checkBoxIsChecked]);

  const RemoveBorderRed = () => (isWrongToken ? setIsWrongToken(false) : false);

  useEffect(() => {

    if (isSubmited) {
      (async () => {
        setLoading(true);

        setTimeout(async () => {
          const response = await HandleLogin(inputToken)

          if (response) {
            setRedirect(true);
            return () => {};
          }
          setLoading(false);
          setIsWrongToken(true);
        }, 1);
      })();
      setIsSubmited(false);
    }
  }, [HandleLogin, inputToken, isSubmited]);

  const HandleSubmit = (event) => {
    event.preventDefault();
    setIsSubmited(true);
    let isInputNotEmpty = inputTokenRef.current.value !== "";
    let currentInputValue = inputTokenRef.current.value;
    setInputToken( (token) => isInputNotEmpty ? currentInputValue:(checkBoxIsChecked?token:""));
    
  };

  const SetInputOnBlur = (event) => {
      if(checkBoxIsChecked){
        event.target.placeholder=inputToken;
      }else{
        event.target.placeholder=""
      }
  }

  const SetInputOnFocus = (event) => {
      if(isWrongToken){
        RemoveBorderRed();
      }else{
        event.target.placeholder = "";
      }
  }

  const SetInputPlaceHolder = () => {
      if(isWrongToken){
        return "Ops, token incorreto! :(";
      }else if(checkBoxIsChecked){
        return inputToken;
      }else{
        return "";
      }
  }

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
              placeholder={SetInputPlaceHolder()}
              onFocus={(e) => SetInputOnFocus(e)}
              onBlur={(e) => SetInputOnBlur(e)}
              ref={inputTokenRef}
              className={isWrongToken ? "wrong-token" : undefined}
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
