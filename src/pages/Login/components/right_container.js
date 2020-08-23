import React from 'react'

const Right_container = () => {
    return (
    
        <section className="right-container">
                    
            <div className="input-container">
                <p>Entre com seu Token:</p>
                <form action="/main">
                <input type="text" name="name" />
                <button>Entrar</button>
                </form>
            </div>

        </section>
    )
}

export default Right_container
