import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CancelIcon from '@material-ui/icons/Cancel'
import { useDescriptionEdit } from './context'

const ButtonEdit = () => {
	const {editClass, HandleClickConfirm, HandleClickNegative} = useDescriptionEdit()

	return (
		<div className='container-button-icon' >
			<div className={`CheckCircleIcon ${editClass.buttonEdit}`} onClick={HandleClickConfirm}>
				<CheckCircleIcon fontSize='large'/>
			</div>

			<div  className={`CancelIcon ${editClass.buttonEdit}`} onClick={HandleClickNegative}>
				<CancelIcon fontSize='large'/>
			</div>
		</div>
	)
}

export default ButtonEdit
