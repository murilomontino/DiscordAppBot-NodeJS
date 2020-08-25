import React from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router'

const { ipcRenderer } = window.require('electron')
 
const Right_container = () => {
    
    const [token, setToken] = useState('')
    const [redirect, setRedirect] = useState(false)

    function Logar(event) {
        
        const { onBot } = ipcRenderer.sendSync('@token/REQUEST', {
            title: 'logar',
            body: token ? token : 0
        })

        if(onBot){
            setRedirect(true)
        }

        
    }

    function HandleChange(event){
        setToken(event.target.value)
        
    }
  
    if(redirect){
        return <Redirect to="/Main" /> 
    }
    else
        return (
        
            <section className="right-container">
                        
                <div className="input-container">
                <p>Entre com seu Token:</p>
                <form>
                <input type="text" name="name" value={token} onChange={HandleChange} />
                <button type='submit' onClick={Logar}>Entrar</button>
                </form>
                </div>

            </section>
        )
}

export default Right_container
