import React from "react";
import "./styles.css";

function Profile() {
  const { ipcRenderer } = window.require("electron");



  
  return (
   <>
      <div className="top-container">
        <div className="internal-top-container">
          <div className="profile-pic"></div>
          <div className="information-container">
            <p id="is-online">ONLINE</p>
            <p id="bot-name">aaaaaaaaa</p>
            <p id="bot-creator">Creator name</p>
          </div>

          <div className="description-container">
              <div className="description-internal-container">
              <p>
              Memes, image manipulation, memey gambling, stealing, and stupidity. 
              Our currency is in depth, our animals are cute, and our bot is the best
              </p>
              </div>
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