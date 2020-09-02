import React from "react";
import "./styles.css";

function Profile() {
  



  
  return (
   <>
      <div className="top-container">
        
         
          <div className="top-left-container">
            <div className="profile-pic"></div>
            <div className="bot-information">
            <p id="is-online">ONLINE</p>
            <p id="bot-name">Bot Name Here</p>
            <p id="bot-creator">Creator name</p>
            </div>
          </div>

          <div className="top-right-container">
             <div className="bot-description">
              <p>
              Memes, image manipulation, memey gambling, stealing, and stupidity. 
              Our currency is in depth, our animals are cute, and our bot is the best
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