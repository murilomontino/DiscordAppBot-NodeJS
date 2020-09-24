import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import MenuTitleBar from './components/MenuTitleBar'



ReactDOM.render(
	<App />,
	document.getElementById('root')
)

ReactDOM.render(
	<React.StrictMode>
		<MenuTitleBar />
	</React.StrictMode>,
	document.getElementById('menutitlebar')
)
