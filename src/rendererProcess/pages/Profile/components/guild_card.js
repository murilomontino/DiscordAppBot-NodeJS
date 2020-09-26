import React, { memo } from 'react'

import './guild_card.css'

function GuildCard({ icon, name, guildId, member }) {
	return (
		<div className="guild">
			<img className="guild-icon" src={icon} alt="Profile Avatar Guild"></img>
			<div className="guild-name-container "> {name}</div>
			<div className="guild-informations ">
				<p>ID: {guildId}</p>
				<p>Membros: {member}</p>
				<p>Criador: Meliro</p>
			</div>
		</div>
	)
}

export default memo(GuildCard)