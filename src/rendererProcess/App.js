import React from 'react'
import 'fontsource-roboto'
import './assets/styles/global.css'
import Routers from './routers'
import Context from './context'
import MenuTitleBar from './components/MenuTitleBar'


const ContainerApp = ({children}) => {
	return <div className="App">{children}</div>
}

const App = () => {
	return (
		<>
			<MenuTitleBar/>
			<ContainerApp>
				<Context>
					<Routers />
				</Context>
			</ContainerApp>
		</>
	)
}

export default App