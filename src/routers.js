import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthentication } from './context/ContextAuthentication/'

import Home from './pages/Home'
import Login from './pages/Login'

const ADDRESS = require('./constants/routes.json')

const CustomRoute = ({ isPrivate, ...rest }) => {
  
	const { loading, authentication } = useAuthentication()

	if (loading) return <div />

	if (!authentication && isPrivate) return <Redirect to="/login" />

	return <Route {...rest} />
}

export default () => {
	return (
		<BrowserRouter>
			<Switch>
				<CustomRoute
					isPrivate
					path={ADDRESS.HOME.route}
					exact
					component={Home}
				/>
				<CustomRoute path={ADDRESS.LOGIN.route} component={Login} />
			</Switch>
		</BrowserRouter>
	)
}
