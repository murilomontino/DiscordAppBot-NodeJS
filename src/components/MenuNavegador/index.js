import {Link} from 'react-router-dom'
import React from 'react'
import './styles.css'

const Navegador = () => {
    
    return (
        <nav className='Navegador'>
            <ul className='Login'>
                <li><Link to='/Login'> Login </Link></li>
                <li><Link to ='/'> Main</Link></li>
            </ul>
        </nav>
        
    )
}

export default Navegador
