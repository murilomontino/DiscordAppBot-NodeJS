import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthentication } from './context/ContextAuthentication/'


import {default as PAGE} from './constants/pages'

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
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<CustomRoute
						isPrivate
						path={ADDRESS.HOME.route}
						exact
						component={PAGE.Home}
					/>
					<CustomRoute path={ADDRESS.LOGIN.route} component={PAGE.Login} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	)
}
