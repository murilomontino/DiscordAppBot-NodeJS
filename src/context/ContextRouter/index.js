import React, { useContext, createContext, useState } from 'react'

import ContextProfileProvider from '../../context/ContextProfile/'


const ContextRouter = createContext()

const ContextRouterProvider = ({ children }) => {
	const [selectedItemOnMenu, setSelectedItemOnMenu] = useState(false)
	
	const PAGE = require('../../constants/pages').default

	const routerComponent = (itemSelected) => {
		try {
			const COMPONENT = PAGE[itemSelected].component
			if (COMPONENT)
				return (
					<ContextProfileProvider>
						<COMPONENT />
					</ContextProfileProvider>
				)
			
		} catch (err) {
			return
		}
	}

	const ItemMenuSelection = (event) => {
		const newItemSelected = event.currentTarget

		if (newItemSelected !== selectedItemOnMenu.current) {
			selectedItemOnMenu.className = ''
			newItemSelected.className = 'itemSelect'
			setSelectedItemOnMenu(newItemSelected)
		}
	}

	return (
		<ContextRouter.Provider
			value={{
				ItemMenuSelection,
				selectedItemOnMenu,
				routerComponent,
				setSelectedItemOnMenu,
			}}
		>
			{children}
		</ContextRouter.Provider>
	)
}

export const useRouter = () => {
	const context = useContext(ContextRouter)

	return {
		...context,
	}
}

export default ContextRouterProvider
