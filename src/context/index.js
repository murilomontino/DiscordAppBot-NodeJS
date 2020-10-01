import React from 'react'

import ContextAuthProvider from './ContextAuthentication'
import ContextRouterProvider from './ContextRouter'

export default ({children}) => {
	
	return (
		
		<ContextAuthProvider>
			<ContextRouterProvider>
				{children}
			</ContextRouterProvider>
		</ContextAuthProvider>
		
	)
}