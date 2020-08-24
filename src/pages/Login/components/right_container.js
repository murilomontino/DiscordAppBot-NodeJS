import React from 'react'
import { useState } from 'react'
// import { ipcRenderer } from 'electron'

const { ipcRenderer } = window.require('electron')
 
const Right_container = () => {
    
    const [token, setToken] = useState('')
    
    
    const Logar = (event) => {
        ipcRenderer.send('@notification/REQUEST', {
            title: 'Pong',
            body: 'Hello Vagabundo!'
        })
    }

    const HandleChange = (event) =>{
        setToken(event.target.value)
    }

    return (
    
        <section className="right-container">
                    
            <div className="input-container">
                <p>Entre com seu Token:</p>
                
                <input type="text" name="name" value={token} onChange={HandleChange} />
                <button type='submit' onClick={Logar}>Entrar</button>
                
            </div>

        </section>
    )
}

export default Right_container
