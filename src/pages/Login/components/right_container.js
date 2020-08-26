import React from 'react'
import { useState, useRef } from 'react'
import { Redirect } from 'react-router'

const { ipcRenderer } = window.require('electron')
 
const Right_container = () => {
    
    const [redirect, setRedirect] = useState(false)
    const [loading, setLoading] = useState(false)
    const inputToken = useRef(null);
    
    // Loading animation
    const TelaDeCarregamento = () => <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
   

    function Logar(token) {
        
        setLoading(true)

        const { onBot } = ipcRenderer.sendSync('@token/REQUEST', {
            title: 'logar',
            body: token ? token : 0
        })
        
        setTimeout(() => {
            if(onBot){
                setRedirect(true)
            }else
                setLoading(false)

        }, 1000 )

        
        
        
    }


    function HandleChange(event){
      
        Logar(inputToken.current.value);
        event.preventDefault();
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
                    <form onSubmit={HandleChange}>
                        <input type="text" name="token" ref={inputToken}/>
                        <button type='submit' >Entrar</button>
                    </form>
                </div>
                }

            </section>
        )
}

export default Right_container
