import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
// import Profile from "./pages/Profile"

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Main" exact component={Main} />
                <Route path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

 
