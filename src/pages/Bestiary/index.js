import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Form } from '@unform/web'
import GuildCard from '../Profile/components/guild_card'
import ImageInput from '../../components/Form/image_input'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'



function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />
}

const { ipcRenderer } = window.require('electron')
const { Input } = require('../../components/Form/')


const Bestiary = () => {

	const formRef = useRef(null)
    
	const [guilds, setGuild] = useState([])

	const [open, setOpen] = useState(true)
    
	useEffect(()=>{
		const guildsExist = document.store.get('guilds')
		if(guildsExist)
			setGuild(document.store.get('guilds'))
        
	},
    
	[])

	const guildCardMap = useMemo(() => guilds.map(guild => (<GuildCard key={guild.id}
		guildId={guild.id}
		name={guild.name}
		icon={guild.icon}
		member={guild.memberCount} />)), [guilds])

	const HandleClick = async (event) => {
		event.preventDefault()
		const response = await ipcRenderer.invoke('@token/REQUEST', { title: 'getGuilds' })
		document.store.set('guilds', response)
		setGuild(response)
        

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
            
			<button onClick={HandleClick}>CLIQUE AQUI PRA TESTAR!</button>
			<button onClick={handleClick}>SnackBar</button>
           

			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="error">
					<label style={{ fontSize: '1.4rem' }}>This is a success message!</label>
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

					<label className="guilds-container">
						{
							guildCardMap
						}
					</label>

				</div>
			</div>

		</div>
	)
}

export default Bestiary
