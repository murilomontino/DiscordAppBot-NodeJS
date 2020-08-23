import React from 'react'
// import {remote} from 'electron'

import './styles.css'

const remote = window.require("electron").remote.getCurrentWindow()

const MenuTitleBar = () => {
    
    const Close = ()=>{
        remote.close()
        console.log('testando')

    }

    const Minimize = () =>{
        remote.minimize();
    }

    const Maximize = () =>{
        
        if (!remote.isMaximized()) {
            remote.maximize();
          } else {
            remote.unmaximize();
            }
    }
    
    return (
        <div id='title-bar'>
        <div id="title">Discord App Bot </div>
        <div id="title-bar-btns">
            <button id="min-btn"  onClick={Minimize}>-</button>
            <button id="max-btn"  onClick={Maximize}>+</button>
            <button id="close-btn" onClick={Close}>X</button>
        </div>
        </div>

    )
}

export default MenuTitleBar



