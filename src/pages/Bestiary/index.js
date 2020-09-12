import React, { useState } from 'react'
import GuildCard  from '../Profile/components/guild_card'
const {ipcRenderer} = window.require('electron')

const Bestiary = () => {
    const [loading, setLoading] = useState(false)
    const [guilds, setGuild] = useState([])
    
    
    const HandleClick = async (event) => {
        event.preventDefault()
        const response =  await ipcRenderer.invoke("@token/REQUEST", {title: 'getGuilds'})
        setGuild(response)
        setTimeout(setLoading(true), 1000)
        
    }
    return (
        <div>
            <button onClick={HandleClick}>CLIQUE AQUI PRA TESTAR!</button>
            {
               loading && guilds.map( guild => (<GuildCard key={guild.id} 
                guildId={guild.id} 
                name={guild.name}
                icon={guild.icon} 
                member={guild.memberCount}/> ) )
            } 
        </div>
    )
}

export default Bestiary
