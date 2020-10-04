import React from 'react'
import InputDescription from './inputDescription'
import './styles.css'
import DescriptionContextProvider from './context'


const Description = () => {
	return (
		<div className="top-right-container">
			
			<DescriptionContextProvider>
				<InputDescription/>
			</DescriptionContextProvider>

			<div className='container-description-text'>
				<h1>DESCRIÇÃO</h1>
			</div>
			
		</div>
	)
}
export default Description
