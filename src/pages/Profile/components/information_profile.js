import React, {memo} from 'react'
import { useProfile } from '../../../context/ContextProfile'
import Description from './description'

const InformationProfile = () => {
	const {
		botName,
		botAvatarURL,
		botStatus,
		botCreator,
		
	} = useProfile()

	return (
		<div className="top-container">
			<div className="top-left-container">
				<div className="profile-pic">
					<img src={botAvatarURL} alt="Profile Avatar Bot" />
				</div>
				<div className="bot-information">
					<p id="is-online">{botStatus} </p>
					<p id="bot-name">{botName}</p>
					<p id="bot-creator">{botCreator}</p>
				</div>
			</div>

			
			<Description/>
			
		</div>
	)
}

export default memo(InformationProfile)
