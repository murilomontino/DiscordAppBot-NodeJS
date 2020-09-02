import React, { useState, useContext, createContext, useEffect, useCallback } from 'react'

const { ipcRenderer } = window.require('electron')
const ContextAuth = createContext()


const ContextAuthProvider = ({ children }) => {

  const [inputToken, setInputToken] = useState('')
  const [checkBoxIsChecked, setCheckBoxIsChecked] = useState(false)
  const [loading, setLoading] = useState(true)
  const [authentication, setAuthentication] = useState(false)

  const fetchToken = useCallback((async () => {
    const check = await ipcRenderer.invoke('@token/REQUEST', { title: 'checkBoxIsChecked', body: '' })
    setCheckBoxIsChecked(check)
    if (check) {
      const token = await ipcRenderer.invoke('@token/REQUEST', { title: 'checkToken', body: '' })
      setInputToken(token)
    }
    else
      setInputToken('')
    
  }), [])

  useEffect(() => {
    (async () => {
      await fetchToken()
      setLoading(false)
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading)
    return <div />

  async function HandleLogin(token) {

    const response = await ipcRenderer.invoke("@token/REQUEST", {
      title: "loginWithToken",
      token: token ? token : '',
    })

    if (response !== 'Error') {


      ipcRenderer.send("@comunication/REQUEST", {
        title: 'saveTokenCheck',
        checkBox: checkBoxIsChecked,
        token: token
      })


      setAuthentication(true)
      return true
    }
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
