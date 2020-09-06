import React, { useState, useContext, createContext, useEffect, useCallback, useRef } from 'react'

const { ipcRenderer } = window.require('electron')
const ContextAuth = createContext()


const ContextAuthProvider = ({ children }) => {

  const [inputToken, setInputToken] = useState('')
  const [checkBoxIsChecked, setCheckBoxIsChecked] = useState(false)
  
  const [loading, setLoading] = useState(true)
  const [authentication, setAuthentication] = useState(false)
  const tokenRef = useRef(null)

  const fetchToken = useCallback((async () => {
    const {token, checkBox} = await ipcRenderer.invoke('@token/REQUEST', { title: 'checkTokenBox', body: '' })
    setCheckBoxIsChecked(checkBox)
    setInputToken(token)
    tokenRef.current = token
  }), [])

  const BoxSavedConfig = useCallback((async (token) => {
    await ipcRenderer.send("@comunication/REQUEST", {
      title: 'saveTokenCheck',
      checkBox: checkBoxIsChecked,
      token: token
    })
  }), [checkBoxIsChecked])



  useEffect(() => {
    (async () => {
      await fetchToken()
    })()
    setTimeout(setLoading(false), 100)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading)
    return <div />


  async function HandleLogin(token) {

    const response = await ipcRenderer.invoke("@token/REQUEST", {
      title: "loginWithToken",
      token: token,
    })

    if (response !== 'Error') {
      BoxSavedConfig(token)
      setAuthentication(true)
      return true
    }
    else{
      BoxSavedConfig(token)
      return false
    }
   
  }

  async function HandleLogout() {
    await ipcRenderer.invoke("@token/REQUEST", {
      title: "getBotUsername",
      body: '',
    })
    await fetchToken()
    setAuthentication(false)
  }

  return (
    <ContextAuth.Provider value={{
      inputToken,
      checkBoxIsChecked,
      setInputToken,
      setCheckBoxIsChecked,
      HandleLogin,
      tokenRef,
      authentication,
      loading,
      HandleLogout

    }} >
      {children}
    </ContextAuth.Provider>
  )
}


export const useAuthentication = () => {
  const { inputToken, checkBoxIsChecked, tokenRef, setCheckBoxIsChecked, HandleLogin, HandleLogout, authentication, loading } = useContext(ContextAuth)

  return ({
    inputToken,
    tokenRef,
    checkBoxIsChecked,
    setCheckBoxIsChecked,
    HandleLogin,
    HandleLogout,
    authentication,
    loading

  })
}

export default ContextAuthProvider
