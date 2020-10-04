import React, { memo } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SettingsIcon from '@material-ui/icons/Settings'
import DeleteIcon from '@material-ui/icons/Delete'
import './guild_card.css'

function GuildCard({ icon, name, guildId, member, owner }) {

	return (
		<div className="guild">
			
			<>
				{icon? 
					<img className="guild-icon" src={icon} alt="Profile Avatar Guild"/>: 
					<AccountCircleIcon className="no-profile-icon"/>
				}
			</>

			<div className="guild-name-container">
				<h1>
					{name}
				</h1>
			</div>

			<div className="guild-informations ">
				<p>ID: {guildId}</p>
				<p>Membros: {member}</p>
				<p>Criador: {owner}</p>
			</div>
			<SettingsIcon fontSize="large"/>
			<DeleteIcon fontSize='large'/>
		</div>
	)
}

export default memo(GuildCard)