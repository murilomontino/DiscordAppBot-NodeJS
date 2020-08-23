import React from 'react'

import './styles.css'


const MenuTitleBar = () => {
    const Close = ()=>{
        try{
            const remote = window.require('electron').remote.getCurrentWindow()
            
            remote.close()
        }
        catch{

        }

    }

    const Minimize = () =>{
        try{
            const remote = window.require('electron').remote.getCurrentWindow()
            remote.minimize()
        }
        catch{

        }
    }

    const Maximize = () =>{
        try {
            const remote = window.require('electron').remote.getCurrentWindow()
            
            if (!remote.isMaximized()) {
                remote.maximize();
            } else {
                remote.unmaximize();
            }

        } catch (error) {
            
        }
        
    }
    
    return (
        <div id='title-bar'>
        <div id="title">Discord App Bot </div>
        <div id="title-bar-btns">
            <button id="min-btn"  onClick={Minimize}>-</button>
            <button id="max-btn"  onClick={Maximize}>+</button>
            <button id="close-btn" onClick={Close}>x</button>
        </div>
        </div>

    )
}

export default MenuTitleBar



