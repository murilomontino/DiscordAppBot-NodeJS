import React, { useContext, createContext, useState} from 'react'

const { ipcRenderer } = window.require('electron')
const ContextProfile = createContext()


const ContextProfileProvider = ({ children }) => {
    const [botName, setBotName] = useState("...");
    const [botAvatarURL, setBotAvatarURL] = useState("");
    const [botTag, setBotTag] = useState("");
    const [botStatus, setBotStatus] = useState("");

    const GetBotUsername= () =>{
        ipcRenderer.invoke("@token/REQUEST", {
          title: 'getBotUsername'
        }).then(response => setBotName(response))
           
      }

      const GetBotAvatarURL= () =>{
        ipcRenderer.invoke("@token/REQUEST", {
          title: 'getBotAvatarURL'
        }).then(response => setBotAvatarURL(response))
           
      }

      const GetBotTag= () =>{
        ipcRenderer.invoke("@token/REQUEST", {
          title: 'getBotTag'
        }).then(response => setBotTag(response))
           
      }

      const GetBotStatus= () =>{
        ipcRenderer.invoke("@token/REQUEST", {
          title: 'getBotStatus'
        }).then(response => setBotStatus(response))
           
      }



    return (
        <ContextProfile.Provider value={{
            GetBotUsername,
            botName,
            GetBotAvatarURL,
            botAvatarURL,
            GetBotTag,
            botTag,
            GetBotStatus,
            botStatus

        }} >
            {children}
        </ContextProfile.Provider>
    )
}


export const useProfile = () => {
    const {GetBotUsername, botName, GetBotAvatarURL, botAvatarURL, GetBotTag, botTag, GetBotStatus, botStatus} = useContext(ContextProfile)

    return ({
        GetBotUsername, 
        botName,
        GetBotAvatarURL,
        botAvatarURL,
        GetBotTag,
        botTag,
        GetBotStatus,
        botStatus
    })
}

export default ContextProfileProvider
