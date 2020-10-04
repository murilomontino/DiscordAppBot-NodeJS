import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CancelIcon from '@material-ui/icons/Cancel'
import { useDescriptionEdit } from './context'

const ButtonEdit = () => {
	const {editClass} = useDescriptionEdit()

	return (
		<div className='container-button-icon'>
			<button className='CheckCircleIcon'>
				<CheckCircleIcon 
					className={editClass.buttonEdit} />
			</button>
			<button onClick={() => console.log('oloko')} className='CancelIcon'>
				<CancelIcon  className={editClass.buttonEdit} />
			</button>
		</div>
	)
}

export default ButtonEdit
