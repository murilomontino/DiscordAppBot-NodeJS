import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navegador from './components/menuBar'
import Login from "./pages/Login";
import Main from "./pages/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      <Navegador/>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
