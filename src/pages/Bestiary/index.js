import React, { useRef, useState } from 'react'
import { Form } from '@unform/web'
import ImageInput from '../../components/Form/image_input'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

const Bestiary = () => {

	// const { ipcRenderer } = window.require('electron')
	const { Input } = require('../../components/Form/')
	const formRef = useRef(null)
    

	const [open, setOpen] = useState(true)
    


	function Alert(props) {
		return <MuiAlert elevation={6} variant="filled" {...props} />
	}
	
	const handleClick = () => {
		setOpen(true)
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}

	return (
		<div>
            
			<button onClick={handleClick}>SnackBar</button>
           

			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="error">
					<label style={{ fontSize: '1.4rem' }}>This is Queijo a a success message!</label>
				</Alert>
			</Snackbar>

			<Form ref={formRef} onSubmit={() => { }} >
				<ImageInput name='imageInput' />
				<Input name='token' />
				<button type='submit'>Submit</button>
			</Form>


			<div className="down-container">
				<div className="internal-down-container">

					<h3 id="guilds-title">Guilds:</h3>
				</div>
			</div>

		</div>
	)
}

export default Bestiary
