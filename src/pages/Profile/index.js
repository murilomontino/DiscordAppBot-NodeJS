import React from "react"
import "./styles.css"
import { useProfile } from "../../context/ContextProfile"

function Profile() {
  const {
    botName,
    botAvatarURL,
    botStatus,
    botCreator,
    botDescription

  } = useProfile();


  return (
    <>
      <div className="top-container">
        <div className="top-left-container">
          <div className="profile-pic">
            <img src={botAvatarURL} alt="Profile Avatar Bot"></img>
          </div>
          <div className="bot-information">
            <p id="is-online">{botStatus} </p>
            <p id="bot-name">{botName}</p>
            <p id="bot-creator">{botCreator}</p>
          </div>
        </div>

        <div className="top-right-container">
          <div className="bot-description">
            <p>
              {botDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="down-container">
        <div className="internal-down-container"> </div>
      </div>
    </>
  );
}

export default Profile;
