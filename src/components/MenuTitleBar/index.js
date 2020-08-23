import React from 'react'
// import { remote } from 'electron'

import './styles.css'

const MenuTitleBar = () => {
    
    const Close = ()=>{
        // remote.getCurrentWindow()
        console.log('testando')

    }

    return (
        <div id='title-bar'>
        <div id="title">Discord App Bot </div>
        <div id="title-bar-btns">
            <button id="min-btn">-</button>
            <button id="max-btn">+</button>
            <button id="close-btn" onClick={Close}>X</button>
        </div>
        </div>

    )
}

export default MenuTitleBar



