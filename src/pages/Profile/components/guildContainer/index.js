import React, {useState, useMemo, useEffect, memo} from 'react'
import GuildCard from './guild_card'

const { ipcRenderer } = window.require('electron')



const GuildContainer = () => {
   
	const [guilds, setGuild] = useState([])

	useEffect(() => {
		( async () => {
			const response = await ipcRenderer.invoke('@token/REQUEST', { title: 'getGuilds' })
			setGuild(response)
		})()
		return () => {}
	}, [])

    
	const guildCardMap = useMemo(
		() => guilds.map(guild => (<GuildCard key={guild.id}
			guildId={guild.id}
			name={guild.name}
			icon={guild.icon}
			member={guild.memberCount} 
			owner={guild.owner}
		/>)), [guilds])
  
        
	return (
		<>
			<h3 id="guilds-title">Guilds:</h3>
			<div className="guilds-container">
                
				{
					guildCardMap
				}
			</div>
		</>
	)
}

export default memo(GuildContainer)
