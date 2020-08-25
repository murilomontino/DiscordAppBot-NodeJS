import React from 'react';

import './styles.css';

import { ReactComponent as CloseIcon} from '../../assets/Icons/closeIcon.svg';
import { ReactComponent as MinusIcon} from '../../assets/Icons/minusIcon.svg';
import { ReactComponent as SquareIcon} from '../../assets/Icons/squareIcon.svg';

const MenuTitleBar = () => {
    const Close = ()=>{
            
            const remote = window.require('electron').remote.getCurrentWindow()
            
            remote.close()
       

    }

    const Minimize = () =>{
        
            const remote = window.require('electron').remote.getCurrentWindow()
            remote.minimize()
      
    }

    const Maximize = () =>{
       
            const remote = window.require('electron').remote.getCurrentWindow()
            
            if (!remote.isMaximized()) {
                remote.maximize();
            } else {
                remote.unmaximize();
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



