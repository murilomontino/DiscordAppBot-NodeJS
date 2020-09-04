import React, { useState, useContext, createContext, useEffect, useCallback } from 'react'

const { ipcRenderer } = window.require('electron')
const ContextAuth = createContext()


const ContextAuthProvider = ({ children }) => {

  const [inputToken, setInputToken] = useState('')
  const [checkBoxIsChecked, setCheckBoxIsChecked] = useState(false)
  
  const [loading, setLoading] = useState(true)
  const [authentication, setAuthentication] = useState(false)

  const fetchToken = useCallback((async () => {
    const {token, checkBox} = await ipcRenderer.invoke('@token/REQUEST', { title: 'checkTokenBox', body: '' })
    setCheckBoxIsChecked(checkBox)
    setInputToken(token)
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
      setLoading(false)
    })()
  }, [fetchToken])

  if (loading)
    return <div />

  async function HandleLogin() {

    const response = await ipcRenderer.invoke("@token/REQUEST", {
      title: "loginWithToken",
      token: inputToken,
    })

    if (response !== 'Error') {
      BoxSavedConfig(inputToken)
      setAuthentication(true)
      return true
    }
    BoxSavedConfig(inputToken)
    return false
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
      HandleLogout,
      authentication,
      loading

    }} >
      {children}
    </ContextAuth.Provider>
  )
}


export const useAuthentication = () => {
  const { inputToken, checkBoxIsChecked, setInputToken, setCheckBoxIsChecked, HandleLogin, HandleLogout, authentication, loading } = useContext(ContextAuth)

  return ({
    inputToken,
    setInputToken,
    checkBoxIsChecked,
    setCheckBoxIsChecked,
    HandleLogin,
    HandleLogout,
    authentication,
    loading

  })
}

export default ContextAuthProvider
