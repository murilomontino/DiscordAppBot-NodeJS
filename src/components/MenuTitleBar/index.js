import React from 'react';
// import {remote} from 'electron'

import './styles.css';

import { ReactComponent as CloseIcon} from '../../assets/Icons/closeIcon.svg';
import { ReactComponent as MinusIcon} from '../../assets/Icons/minusIcon.svg';
import { ReactComponent as SquareIcon} from '../../assets/Icons/squareIcon.svg';

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
        <div className="title-bar">
        <div className="title-text"> Cthulhu bot </div>
        <div className="title-bar-btns">
            <button   onClick={Minimize}><MinusIcon className="icon-minus" /></button>
            <button   onClick={Maximize}><SquareIcon className="icon-square"/></button>
            <button   onClick={Close}><CloseIcon className="icon-close" /></button>
        </div>
        </div>

    )
}

export default MenuTitleBar



