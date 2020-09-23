import React from 'react'
import 'fontsource-roboto'
import './assets/styles/global.css'
import Routers from './routers'
import ContextAuthProvider from './context/ContextAuthentication'
import ContextRouterProvider from './context/ContextRouter'

const Store = window.require('electron-store')
const store = new Store()
document.store = store


const ContextAll = ({children}) => {

	return (
		<ContextAuthProvider>
			<ContextRouterProvider>
				{children}
			</ContextRouterProvider>
		</ContextAuthProvider>
	)
}

const App = ({children}) => {
	return <div className="App">{children}</div>
}


export default () => {
	return (
		<App>
			<ContextAll>
				<Routers />
			</ContextAll>
		</App>
	)
}
