import {Link} from 'react-router-dom'
import React from 'react'
import './navegador.css'

const Navegador = () => {
    
    return (
        <nav>
            <ul className='Login'>
                <li><Link to='/'> Login </Link></li>
                <li><Link to ='/Main'> Main</Link></li>

            </ul>
        </nav>
    )
}

export default Navegador
