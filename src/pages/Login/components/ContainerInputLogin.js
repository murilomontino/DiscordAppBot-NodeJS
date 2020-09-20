import React, { useState, useMemo, useRef, useCallback } from "react";
import { Redirect } from "react-router";

import "./loading.css";
import "./checkbox.css";

import { useAuthentication } from "../../../context/ContextAuthentication";
import { Form } from "@unform/web";
import { InputToken } from "./inputToken";
import { CheckBoxAnimation } from './checkbox'

export default () => {
  
  const formRefToken = useRef(null)
  
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)

  
  const {
    HandleLogin
  } = useAuthentication()
  
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

  
  const HandleChange = useCallback(()=> formRefToken.current.setFieldError('token', false), [] )

  const HandleSubmit = useCallback(
    async (data) => {

      setLoading(true)
      const response = await HandleLogin(data.token)
      
      setTimeout(() => {
        if (response) {
          setRedirect(true)
          return () => { }
        }
        setLoading(false)
        formRefToken.current.setFieldError('token', true)

      }, 500)
    },
    [HandleLogin],
  )

 
  return (
    <section className="right-container">
      {redirect && <Redirect to="/" />}
      {memoizodLoading}

      {!loading && (
        <Form className="input-container" ref={formRefToken} onSubmit={HandleSubmit} onChange={HandleChange}>

          <p id="p-before-input">Entre com seu Token:</p>
          <InputToken
            formRefToken={formRefToken}
            type="text"
            name="token"
            className='inputToken'
          />

          <div className="after-input-container">
            <CheckBoxAnimation/>
            <button type='submit'>Entrar</button>
          </div>

        </Form>

      )}
    </section>
  );
};