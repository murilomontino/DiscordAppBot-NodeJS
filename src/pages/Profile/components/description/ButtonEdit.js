import React from 'react'
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone'
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone'
import { useDescriptionEdit } from './context'
import SettingsIcon from '@material-ui/icons/Settings'

const ButtonEdit = () => {
	const {editClass, HandleClickConfirm, HandleClickNegative} = useDescriptionEdit()

	return (
		<div className='container-button-icon' >
			<div className='SettingsIcon'>
				<SettingsIcon/>
			</div>
			<div className={`CheckCircleIcon ${editClass.buttonEdit}`} onClick={HandleClickConfirm}>
				<CheckCircleTwoToneIcon />
			</div>

			<div  className={`CancelIcon ${editClass.buttonEdit}`} onClick={HandleClickNegative}>
				<CancelTwoToneIcon/>
			</div>
		</div>
	)
}

export default ButtonEdit
