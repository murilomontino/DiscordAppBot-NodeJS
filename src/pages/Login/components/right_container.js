import React from "react";
import { useState, useMemo } from "react";
import { Redirect } from "react-router";

import './loading.css'

const { ipcRenderer } = window.require("electron");

const Right_container = () => {

  const [redirect, setRedirect] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isWrongToken, setIsWrongToken] = useState(false)
  
  
  const [checkBox, setCheckBox] = useState(async () => {
      const initalState = await ipcRenderer.invoke('@tokenCheck/REQUEST', { title: 'checkBox' }).then(response => setInputToken(response))
      return initalState
  })

  const [inputToken, setInputToken] = useState(async () => {
    const initialState = await ipcRenderer.invoke('@tokenCheck/REQUEST', { title: 'checkToken' }).then(response => setInputToken(response))
    return checkBox? initialState : false
  })

  const memoizodRedirect = useMemo(() => redirect && <Redirect to="/Main" />, [redirect])
  const memoizodLoading = useMemo(() => {
    return loading && ( // Loading animation
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      // Loading animation end
    )

  }, [loading])

  async function Logar(token) {
    setLoading(true);

    const response = await ipcRenderer.invoke("@token/REQUEST", {
      title: "logar",
      body: token ? token : 0,
    });

    setInputToken('')

    setTimeout(() => {
      if (response) {
        setRedirect(true);
      } else {
        setLoading(false);
        setIsWrongToken(true);
      }
    }, 1000);
  }

  const RemoveBorderRed = () => isWrongToken ? setIsWrongToken(false) : () => { }

  const HandleSubmit = (event) => {
    Logar(inputToken)
    event.preventDefault()

  }

  const HandleTokenChange = (event) => {
    setInputToken(event.target.value)
    event.preventDefault()

  }

const HandleCheckChange = (event) => {
  setCheckBox( checkBox? true : false )
  
}

  return (
    <section className="right-container">

      { memoizodRedirect }
      { memoizodLoading }

      {!loading && (
        <div className="input-container">
          <p>Entre com seu Token:</p>
          <form onSubmit={HandleSubmit}>
            <input
              type="text"
              name="token"
              placeholder={isWrongToken ? "Ops, token incorreto! :(" : ''}
              onFocus={isWrongToken ? RemoveBorderRed : () => { }}
              value={inputToken}
              onChange={HandleTokenChange}
              className={isWrongToken ? "wrong-token" : undefined}
            />
            <button type="submit">Entrar</button>
            <input type='checkbox' onChange={HandleCheckChange}></input>
          </form>
        </div>
      )}
    </section>
  );
};

export default Right_container;
