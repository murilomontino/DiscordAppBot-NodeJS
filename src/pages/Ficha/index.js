import React, {useState} from 'react'
import './styles.css'
import TextField from '@material-ui/core/TextField'

const Sheet = () => {
	const [test, setTest] = useState('') 

    
	const handleChange = (event) => {
		setTest(event.target.value)
	}
	return (
		<div className='background-white'>
			<TextField id='test' variant="filled" label="Name" value={test} onChange={handleChange}/>
		</div>
	)
}

export default Sheet
