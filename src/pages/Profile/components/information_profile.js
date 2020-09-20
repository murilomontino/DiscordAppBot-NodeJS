import React from "react";
import { useProfile } from "../../../context/ContextProfile";

const InformationProfile = () => {
  const {
    botName,
    botAvatarURL,
    botStatus,
    botCreator,
    botDescription,
  } = useProfile();

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

      <div className="top-right-container">
        <div className="bot-description">
          <p>{botDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default InformationProfile;
