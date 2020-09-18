import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import {useAuthentication} from './context/ContextAuthentication/'
import Profile from './pages/Profile';

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
                <CustomRoute path='/profile' exact component={Profile}></CustomRoute>
                <CustomRoute path="/" exact component={Main} />
                <CustomRoute path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

 
