import React from 'react'
import { useState, useRef } from 'react'
import { Redirect } from 'react-router'

const { ipcRenderer } = window.require('electron')
 
const Right_container = () => {
    
    const [redirect, setRedirect] = useState(false)
    const [loading, setLoading] = useState(false)
    const inputToken = useRef(null);
    
      function Logar(token) {
        console.log("logar");
        
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


    function HandleSubmit(event){
      
        Logar(inputToken.current.value);
        event.preventDefault();
    }
    
    if(redirect){
        return <Redirect to="/Main" /> 
    }

    else
        return (
            
            <section className="right-container">
                { loading &&   // Loading animation
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                 }

                { !loading && 

                <div className="input-container">
                    <p>Entre com seu Token:</p>
                    <form onSubmit={HandleSubmit}>
                        <input type="text" name="token" ref={inputToken}/>
                        <button type='submit' >Entrar</button>
                    </form>
                </div>
                }

            </section>
        )
}

export default Right_container
