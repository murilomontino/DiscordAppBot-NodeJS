import React from 'react';

import './styles.css';

import { ReactComponent as CloseIcon} from '../../assets/Icons/closeIcon.svg';
import { ReactComponent as MinusIcon} from '../../assets/Icons/minusIcon.svg';
import { ReactComponent as SquareIcon} from '../../assets/Icons/squareIcon.svg';

<<<<<<< HEAD
const MenuTitleBar = () => {
    const remote = window.require('electron').remote.getCurrentWindow()

    const Close = ()=> remote.close()

    const Minimize = () =>remote.minimize()

    const Maximize = () =>{

            if (!remote.isMaximized()) {
                remote.maximize();
            } else {
                remote.unmaximize();
            } 
    }
=======
const { ipcRenderer } = window.require('electron')

const MenuTitleBar = () => {
    
    const Close = () => ipcRenderer.invoke('@window/REQUEST', 'close' )
    
    const Minimize = () => ipcRenderer.invoke('@window/REQUEST', 'minimize' )
    
    const Maximize = () => ipcRenderer.invoke('@window/REQUEST', 'maximize' )
       
            
    
>>>>>>> 6e01ab251587adecbd49096fc87b943a5ae75279
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



