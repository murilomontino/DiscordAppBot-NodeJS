import React, { useContext, createContext, useState, useEffect } from 'react'

const { ipcRenderer } = window.require('electron')
const ContextProfile = createContext()


const ContextProfileProvider = ({ children }) => {
  

  const [loading, setLoading] = useState(true)

  const [all, setAll] = useState()

  useEffect(() => {
    (async () => {
      
      const botName =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotUsername'})
      const botAvatarURL =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotAvatarURL'})
      const botTag =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotTag'})
      const botStatus =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotStatus'})

      
      setAll({
        botName,
        botAvatarURL,
        botTag,
        botStatus
      })

      
    })()
    setLoading(false)


  }, [])



  if (loading)
    return <div />

  return (
    <ContextProfile.Provider value={{
      
      all

    }} >
      {children}
    </ContextProfile.Provider>
  )
}


export const useProfile = () => {
  const {  all } = useContext(ContextProfile)
  return ({
    ...all
  })
}

export default ContextProfileProvider
