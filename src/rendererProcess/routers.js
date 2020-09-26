import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthentication } from './context/ContextAuthentication/'


import { default as PAGE } from './constants/pages'


const CustomRoute = ({ isPrivate, ...rest }) => {
  
	const { loading, authentication } = useAuthentication()

	if (loading) return <div />

	if (!authentication && isPrivate) return <Redirect to={PAGE.Login.route} />

	return <Route {...rest} />
}

export default () => {


	return (
		<BrowserRouter>
			
			<Switch>

				<CustomRoute path={PAGE.Login.route} component={PAGE.Login.component} />

				<CustomRoute
					// isPrivate
					path={PAGE.Home.route}
					exact
					component={	PAGE.Home.component }
				/>
				
			</Switch>
		
		</BrowserRouter>
	)
}
