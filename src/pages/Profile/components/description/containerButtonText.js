import React from 'react'
import ButtonEdit from './ButtonEdit'

const containerButtonText = ({lengthText}) => {
    
	return (
		<div className='container-button-lenghtText'>
		
			<ButtonEdit/>
        
			<div  className='length-text'>
				<p> {lengthText}  / 400 </p>
			</div>
		</div>
	)
}

export default containerButtonText
