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
        <div className='title-bar'>
        <div className="title">Discord App Bot </div>
        <div className="title-bar-btns">
            <button className="min-btn"  onClick={Minimize}>-</button>
            <button className="max-btn"  onClick={Maximize}>+</button>
            <button className="close-btn" onClick={Close}>x</button>
        </div>
        </div>

    )
}

export default MenuTitleBar



