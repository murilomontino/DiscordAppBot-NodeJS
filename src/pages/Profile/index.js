import React from 'react'
import './styles.css'
import InformationProfile from './components/information_profile'
import GuildContainer from './components/guild_container'

function Profile() {



	return (
		<>
			<InformationProfile />

			<div className="down-container">
				<div className="internal-down-container">
					<GuildContainer/>

					
				</div>
			</div>
		</>
	)
}

export default Profile
