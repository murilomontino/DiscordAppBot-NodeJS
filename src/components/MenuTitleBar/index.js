import React, { useState, memo } from 'react'

import './styles.css'

import CthulhuIcon from '../../assets/Icons/icon.png'
import { ReactComponent as CloseIcon } from '../../assets/Icons/closeIcon.svg'
import { ReactComponent as MinusIcon } from '../../assets/Icons/minusIcon.svg'
import { ReactComponent as SquareIcon } from '../../assets/Icons/squareIcon.svg'

const { ipcRenderer } = window.require('electron')

const ButtonParent = ({ isParent, children, ...rest }) => {
	if (isParent) return <div />

	return <button {...rest}> {children} </button>
}

const MenuTitleBar = () => {
	const [isChildren, setIsChildren] = useState(false)

	ipcRenderer.on('parent-window', async () => {
		setIsChildren(true)
	})

	const Close = () => {
		ipcRenderer.send('@window/REQUEST', { title: 'close' })
	}

	const Minimize = () =>
		ipcRenderer.send('@window/REQUEST', { title: 'minimize' })

	const Maximize = () =>
		ipcRenderer.send('@window/REQUEST', { title: 'maximize' })

	return (
		<div className="title-bar">
			
			<div className='title'>
				<img src={CthulhuIcon} alt='Icone de Aplicação, um cthulhu'/>
				<h1>RPG Cthulhu Bot</h1>
			</div>
		
		
			<div className="title-bar-btns">
				
				<ButtonParent isParent={isChildren} onClick={Minimize}>
					<MinusIcon className="icon-minus" />
				</ButtonParent>

				<ButtonParent isParent={isChildren} onClick={Maximize}>
					<SquareIcon className="icon-square" />
				</ButtonParent>

				<button onClick={Close}>
					<CloseIcon className="icon-close" />
				</button>
				
			</div>
		</div>
	)
}

export default memo(MenuTitleBar)
