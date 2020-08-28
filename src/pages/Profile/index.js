import React from "react";
import "./styles.css";

function Profile() {
  return (
   <>
      <div className="top-container">
        <div className="internal-top-container">
          <div className="profile-pic"></div>
          <div className="information-container">
            <p id="is-online">ONLINE</p>
            <p id="bot-name">Bot Name Here</p>
            <p id="bot-creator">Creator name</p>
          </div>

          <div className="description-container"></div>
        </div>
      </div>

      <div className="down-container">
        <div className="internal-down-container"> </div>
      </div>
    </>
  );
}

export default Profile;