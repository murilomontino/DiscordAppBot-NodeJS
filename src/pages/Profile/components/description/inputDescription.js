import React, {useEffect, useRef} from 'react'
import { useDescriptionEdit } from './context'
import ContainerButtonText from './containerButtonText'

const InputDescription = () => {
	
	const {botDescription, editClass, setEditClass, inputTextArea, setInputTextArea } = useDescriptionEdit()
	const refDisabled = useRef()
	
	useEffect(() => {
		setInputTextArea(botDescription)
		refDisabled.current.disabled = true
	}, [botDescription, setInputTextArea])
    
	const HandleDoubleClick = (event) =>{
		event.preventDefault()
		refDisabled.current.disabled  = refDisabled.current.disabled? false: true 
		
		if(editClass.buttonEdit==='button-edit-not') 
			setEditClass({
				buttonEdit: 'button-edit',
				textAreaEdit: 'text-area-description-edit'
			})
		else
			setEditClass({
				buttonEdit: 'button-edit-not',
				textAreaEdit: 'text-area-description-not-edit'
			})
	

		
	}

	const HandleChange = (event)=> {
		event.preventDefault()
		setInputTextArea(event.target.value)
	}
    
    
	return (
		
	
			
		<div className='container-text-area'>
			<textarea className={`${editClass.textAreaEdit} text-area`}
				type='text'
				value={inputTextArea}
				onChange={HandleChange}
				ref={refDisabled}
				maxLength='400'
				onDoubleClick={HandleDoubleClick}
			/>
			<ContainerButtonText lengthText={inputTextArea.length}/>
			
		</div>
	
		
	)
}

export default InputDescription
