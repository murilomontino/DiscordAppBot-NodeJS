import React from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router'

const { ipcRenderer } = window.require('electron')
 
const Right_container = () => {
    
    const [token, setToken] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [loading, setLoading] = useState(false)

    const TelaDeCarregamento = () => <p>CARREGANDO</p>
   

    function Logar(event) {
        
        setLoading(true)

        const { onBot } = ipcRenderer.sendSync('@token/REQUEST', {
            title: 'logar',
            body: token ? token : 0
        })

        if(onBot){
            setRedirect(true)
        
        }

        setTimeout(()=>setLoading(false), 1000)
        
        
    }


    function handleChange(event){
        setToken(event.target.value)
        
    }
    


    if(redirect){
        return <Redirect to="/Main" /> 
    }

    else
        return (
            
            <section className="right-container">
                { loading && <TelaDeCarregamento/> }
                { !loading && 

                <div className="input-container">
                    <p>Entre com seu Token:</p>
                    <form>
                        <input type="text" name="name" value={token} onChange={handleChange} />
                        <button type='submit' onClick={Logar}>Entrar</button>
                    </form>
                </div>
                }

            </section>
        )
}

export default Right_container
