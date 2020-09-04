import React, { useContext, createContext, useState, useEffect } from 'react'

const { ipcRenderer } = window.require('electron')
const ContextProfile = createContext()


const ContextProfileProvider = ({ children }) => {
  

  const [loading, setLoading] = useState(true)

  const [botInformation, setBotInformation] = useState({
    botAvatarURL: "",
    botName: "",
    botTag: "",
    botStatus: "",
    botDescription: "",
    botCreator: ""
  })

  useEffect(() => {
    (async () => {
      
      const Name =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotUsername'})
      const AvatarURL =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotAvatarURL'})
      const Tag =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotTag'})
      const Status =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotStatus'})
      const Creator = await ipcRenderer.invoke("@token/REQUEST", {title: 'getCreatorBotName'})
      const Description = await ipcRenderer.invoke("@token/REQUEST", {title: 'getBotDescriptionApplication'})
      
      setBotInformation({
        botName: Name,
        botAvatarURL: AvatarURL,
        botTag: Tag,
        botStatus: Status.toUpperCase(),
        botCreator: Creator,
        botDescription: Description
      })

      
    })()
    
    setTimeout(()=> setLoading(false), 1)

    


  }, [])



  if (loading)
    return <div />

  return (
    <ContextProfile.Provider value={{
      
      botInformation

    }} >
      {children}
    </ContextProfile.Provider>
  )
}


export const useProfile = () => {
  const {  botInformation } = useContext(ContextProfile)

  return ({
    ...botInformation
  })
}

export default ContextProfileProvider
