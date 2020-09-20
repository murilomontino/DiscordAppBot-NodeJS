import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {useAuthentication} from './context/ContextAuthentication/'

const { PAGE } = require('./constants/pages')



const CustomRoute = ( {isPrivate, ...rest}) => {
    const {loading, authentication} = useAuthentication()

    if(loading)
        return <div/> 

    if(!authentication && isPrivate)
        return <Redirect to='/login'/>

    return <Route {...rest}/>
}

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <CustomRoute isPrivate path={PAGE.home.address} exact component={PAGE.home.Home} />
                <CustomRoute path={PAGE.login.address} component={PAGE.login.Login} />
            </Switch>
        </BrowserRouter>
    )
}

 
