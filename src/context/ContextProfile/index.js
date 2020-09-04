import React, { useContext, createContext, useState, useEffect } from 'react'

const { ipcRenderer } = window.require('electron')
const ContextProfile = createContext()


const ContextProfileProvider = ({ children }) => {
  
  // const [botName, setBotName] = useState("...");
  // const [botAvatarURL, setBotAvatarURL] = useState("");
  // const [botTag, setBotTag] = useState("");
  // const [botStatus, setBotStatus] = useState("");
  const [loading, setLoading] = useState(true)

  const [todos, setTodos] = useState()

  useEffect(() => {
    (async () => {
      
      const botName =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotUsername'})
      const botAvatarURL =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotAvatarURL'})
      const botTag =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotTag'})
      const botStatus =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotStatus'})
      
      setTodos({
        botName,
        botAvatarURL,
        botTag,
        botStatus
      })

      setLoading(false)
    })()

  }, [])



  if (loading)
    return <div />

  return (
    <ContextProfile.Provider value={{
      
      todos

    }} >
      {children}
    </ContextProfile.Provider>
  )
}


export const useProfile = () => {
  const {  todos } = useContext(ContextProfile)
  return ({
    ...todos
  })
}

export default ContextProfileProvider
