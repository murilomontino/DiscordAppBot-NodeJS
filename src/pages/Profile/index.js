import React from "react";
import "./styles.css";
import GuildCard from "./components/guild_card.js";
import InformationProfile from './components/information_profile'

function Profile() {


  return (
    <>
      
      <InformationProfile/>
      
      <div className="down-container">
        <div className="internal-down-container">

            <h3 id="guilds-title">Guilds:</h3>
            <div className="guilds-container">
              <GuildCard /> <GuildCard /> <GuildCard />
            </div>
       
        </div>
      </div>
    </>
  );
}

export default Profile;
