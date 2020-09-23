import React from 'react'
import 'fontsource-roboto'
import './assets/styles/global.css'
import Routers from './routers'

import Context from './context'

const App = ({children}) => {
	return <div className="App">{children}</div>
}

export default () => {
	return (
		<App>
			<Context>
				<Routers />
			</Context>
		</App>
	)
}
