import React from 'react'
import { ReactComponent as ArrowIcon} from '../../../assets/Icons/arrowIcon.svg';

const Left_container = () => {
    return (
        
        <section className="left-container">
            <div className="title-container">
                <h1>  <strong>Cthulhu</strong> bot</h1>
                <p className="sub-title">Gerencie seu bot de RPG no Discord.</p>
            </div>

            <div className="button-container">
                <p>Ainda não tem um bot?</p>
                <a href="/">Criar bot <ArrowIcon className="icon-arrow"/> </a> 
            </div>
        </section>
    )
}

export default Left_container
