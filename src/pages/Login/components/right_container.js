import React from 'react'
import { useState } from 'react'

const { ipcRenderer } = window.require('electron')
 
const Right_container = () => {
    
    const [token, setToken] = useState('')
    
    
    const Logar = (event) => {
        const message = ipcRenderer.sendSync('@token/REQUEST', {
            title: 'logar',
            body: token
        })

        console.log(message)
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
