import React, { useState, memo, useMemo, useEffect } from 'react'
import clsx from 'clsx'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'

import { useStyles } from './components/transitionStyle'
import './styles.css'
import Item from './components/Item'
import { useAuthentication } from '../../context/ContextAuthentication'

const {
	ChevronLeftIcon,
	ChevronRightIcon,
} = require('./components/icons').icons()

const { ComponentItemMenu: PAGEs, EXIT } = require('./components/ComponentItemMenu')

const MiniDrawer = () => {
	
	const [menuItem] = useState(PAGEs)

	const classes = useStyles()
	const [open, setOpen] = useState(false)

	const { HandleLogout } = useAuthentication()
	useEffect(()=>{
		menuItem.forEach(
			item => console.log(item)
		)
	
	},[menuItem])
	
	const memoizoidItems = useMemo(()=> (
		menuItem.map((component) => 
			<Item 
				key={component.id} 
				Icon={component.icon} 
				title={component.title}
				firstPage={component.id===1? true:false}
				name={component.name}
			/>)

	), [menuItem])

	function handleDrawerOpen() {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<Drawer
			variant="permanent"
			className={clsx({
				drawer: true,
				[classes.drawerOpen]: open,
				[classes.drawerClose]: !open,
			})}
			classes={{
				paper: clsx({
					drawer: true,
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				}),
			}}
		>
			<List className="listBar">
				{open ? (
					<Item Icon={ChevronLeftIcon} arrow onClick={handleDrawerClose} />
				) : (
					<Item Icon={ChevronRightIcon} arrow onClick={handleDrawerOpen} />
				)}

				<Divider />

				{	memoizoidItems	}

				<Divider />

				<Item Icon={EXIT.icon} onClick={HandleLogout} name={EXIT.name} />
			</List>
		</Drawer>
	)
}


export default memo(MiniDrawer)