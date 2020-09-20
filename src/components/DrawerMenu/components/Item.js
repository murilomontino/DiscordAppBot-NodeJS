import React, { useEffect, useRef } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { useRouter } from '../../../context/ContextRouter'

const Item = ({ Icon, firstPage, name, arrow, className, title, ...rest }) => {
	const selectPageFirst = useRef(null)
	const { ItemMenuSelection, setSelectedItemOnMenu } = useRouter()

	useEffect(() => {
		(() => {
			if (firstPage) {
				setSelectedItemOnMenu(selectPageFirst.current)
				selectPageFirst.current.className = 'itemSelect'
			}
		})()
	}, [setSelectedItemOnMenu, firstPage])

	return (
		<div
			ref={selectPageFirst}
			title={title}
			className={className}
			onClick={
				arrow
					? () => {}
					: (e) => {
						ItemMenuSelection(e)
					}
			}
		>
			<ListItem
				className={arrow ? 'arrow toolbar' : 'toolbar'}
				button
				{...rest}
			>
				<ListItemIcon>
					{' '}
					<Icon className="iconButton" />{' '}
				</ListItemIcon>
				{name ? <ListItemText className="textItem" primary={name} /> : ''}
			</ListItem>
		</div>
	)
}

export default Item
