import React, { useContext, createContext, useState, useEffect } from 'react'

const { ipcRenderer } = window.require('electron')
const ContextProfile = createContext()


const ContextProfileProvider = ({ children }) => {
  
  const [botName, setBotName] = useState("...");
  const [botAvatarURL, setBotAvatarURL] = useState("");
  const [botTag, setBotTag] = useState("");
  const [botStatus, setBotStatus] = useState("");
  const [botOwner, setBotOwner] = useState("");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const botName =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotUsername'})
      setBotName(botName)
      const botAvatarURL =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotAvatarURL'})
      setBotAvatarURL(botAvatarURL)
      const botTag =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotTag'})
      setBotTag(botTag)
      const botStatus =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotStatus'})
      setBotStatus(botStatus)
      const botOwner =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotOnwerApplication'})
      setBotOwner(botOwner)
      setLoading(false)
    })()

  }, [])



  if (loading)
    return <div />

  return (
    <ContextProfile.Provider value={{
      
      botName,
     
      botAvatarURL,
     
      botTag,
      
      botStatus,

      botOwner

    }} >
      {children}
    </ContextProfile.Provider>
  )
}


export const useProfile = () => {
  const {  botName,  botAvatarURL,  botTag,  botStatus, botOwner } = useContext(ContextProfile)

  return ({
    
    botName,
    
    botAvatarURL,
    
    botTag,
    
    botStatus,
    
    botOwner
  })
}

export default ContextProfileProvider
