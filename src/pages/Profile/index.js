import React, {memo} from 'react'
import './styles.css'
import InformationProfile from './components/information_profile'
import GuildCard from './components/guild_card'

function Profile() {
	return (
		<>
			<InformationProfile />

			<div className="down-container">
				<div className="internal-down-container">
					<h3 id="guilds-title">Guilds:</h3>

					<div className="guilds-container">
						<GuildCard /> <GuildCard /> <GuildCard />
					</div>
				</div>
			</div>
		</>
	)
}

export default memo(Profile)
