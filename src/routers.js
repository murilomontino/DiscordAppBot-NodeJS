import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import {useAuthentication} from './context/ContextAuthentication/'

const CustomRoute = ( {isPrivate, ...rest}) => {
    const {loading, authentication} = useAuthentication()

    if(loading)
        return <div/> 

    if(!authentication && isPrivate)
        return <Redirect to='/Login'/>

    return <Route {...rest}/>
}

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <CustomRoute isPrivate path="/" exact component={Main} />
                <CustomRoute path="/Login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

 
