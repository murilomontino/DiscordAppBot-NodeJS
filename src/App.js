import React from 'react'
import 'fontsource-roboto'
import './assets/styles/global.css'
import Routers from './routers'
import Context from './context'


const ContainerApp = ({children}) => {
	return <div className="App">{children}</div>
}

const App = () => {
	return (
		<ContainerApp>
			
			<Context>
				<Routers />
			</Context>
		</ContainerApp>
	)
}

export default App