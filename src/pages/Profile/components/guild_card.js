import React from 'react';
import "./guild_card.css";

export default () => {
    return (<>
        <div className="guild">
            <div className="guild-icon"></div>
            <div className="guild-name-container "> Guild Name Here</div>
            <div className="guild-informations ">
                <p>Membros: 10.000</p>
                <p>Membros Online: 666</p>
                <p>Criador: Meliro</p>
            </div>
        </div>
    </>)
}