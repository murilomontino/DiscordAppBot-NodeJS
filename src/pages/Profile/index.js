import React from "react"
import "./styles.css"
import InformationProfile from './components/information_profile'
import GuildCards from './components/guild_card'

function Profile() {


  return (
    <>
      
      <InformationProfile/>

      <div className="down-container">
        <div className="internal-down-container"> </div>
        <GuildCards/><GuildCards/><GuildCards/>
      </div>
    </>
  );
}

export default Profile;
