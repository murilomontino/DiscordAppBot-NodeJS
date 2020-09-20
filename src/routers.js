import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {useAuthentication} from './context/ContextAuthentication/'

const { PAGE, ADDRESS } = require('./constants/pages')



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
                <CustomRoute isPrivate path={ADDRESS.Home} exact component={PAGE.Home} />
                <CustomRoute path={ADDRESS.Login} component={PAGE.Login} />
            </Switch>
        </BrowserRouter>
    )
}

 
