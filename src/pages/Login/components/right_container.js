import React from "react";
import { useState, useRef } from "react";
import { Redirect } from "react-router";

import './loading.css'

const { ipcRenderer } = window.require("electron");

const Right_container = () => {
  
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isWrongToken, setIsWrongToken] = useState(false);
  
  const inputToken = useRef(null);

  ipcRenderer.invoke('@tokenCheck/REQUEST', {title: 'checkToken'} ).then(response => response)

  async function Logar(token) {
    setLoading(true);

    const { onBot } = await ipcRenderer.sendSync("@token/REQUEST", {
      title: "logar",
      body: token ? token : 0,
    });

    setTimeout(() => {
      if (onBot) {
        setRedirect(true);
      } else {
        setLoading(false);
        setIsWrongToken(true);
      }
    }, 1000);
  }

  const RemoveBorderRed = () => {
    if (isWrongToken) {
      setIsWrongToken(false);
    }
  }
  const HandleSubmit = (event) => {
    Logar(inputToken.current.value);
    event.preventDefault();
  }

 

 
  return (
      <section className="right-container">
        
        { redirect && <Redirect to="/Main" /> }
        {
          loading && ( // Loading animation
                      <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
          )
          // Loading animation end
        }

        {!loading && (
                      <div className="input-container">
                        <p>Entre com seu Token:</p>
                        <form onSubmit={HandleSubmit}>
                          <input
                            type="text"
                            name="token"
                            placeholder={ isWrongToken?"Ops, token incorreto! :(": ''}
                            onFocus={RemoveBorderRed}
                            ref={inputToken}
                            className={isWrongToken ? "wrong-token" : undefined}
                          />
                          <button type="submit">Entrar</button>
                        </form>
                      </div>
        )}
      </section>
    );
};

export default Right_container;
