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
        <div className="title-bar">
        <div className="title-text"> Discord App Bot </div>
        <div className="title-bar-btns">
            <button   onClick={Minimize}>-</button>
            <button   onClick={Maximize}>+</button>
            <button    onClick={Close}>X</button>
        </div>
        </div>

    )
}

export default MenuTitleBar



